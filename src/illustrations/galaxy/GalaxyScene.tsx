import { useEffect, useRef } from "react";
import { drawDitherPatch } from "../dither";
import { colorBio, colorCircuit, colorHighlight, colorInk, hexToRgb } from "../theme";
import { usePrefersReducedMotion } from "../usePrefersReducedMotion";
import { allStars, gapOpen, handSegments, leftHand, rightHand } from "./constellation";
import { ambientByWaypoint, waypoints } from "./keyframes";
import styles from "./GalaxyScene.module.css";

const WHITE = hexToRgb(colorInk);
const BLUE = hexToRgb(colorCircuit);
const TEAL = hexToRgb(colorBio);
const AMBER = hexToRgb(colorHighlight);
const COOL_PALETTE = [WHITE, BLUE, TEAL];

// The Dim Region (build spec v21, section 3): the health problem, rendered
// as a glitchy dither patch per section 1's technique mapping, which
// resolves into clean palette-correct particles as the journey reaches the
// footer. Anchored to specific waypoints by index (0 top … 6 faq).
const DIM_REGION_APPEAR_FROM = 3; // requirements
const DIM_REGION_APPEAR_AT = 4; // prizes
const DIM_REGION_RESOLVE_AT = 6; // faq
const DIM_REGION_POS = { x: 0.86, y: 0.62 };
const SICK_A: readonly [number, number, number] = [74, 74, 85];
const SICK_B: readonly [number, number, number] = [138, 90, 69];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

interface Anchor {
  progress: number;
  index: number;
}

/**
 * The site's persistent world (build spec v19): one fixed canvas, one
 * ambient star pool, keyframed by scroll position instead of mounted fresh
 * per section — the hero's wide galaxy view thickens into a nebula, arrives
 * at a cell's star cluster, passes through quiet stretches of space,
 * reaches a binary system, and finally arrives, all as one continuous
 * scene. The hand constellation (constellation.ts) sits at the same screen
 * position throughout, prominent in the hero and receded elsewhere, closing
 * its gap at the arrival keyframe.
 */
export function GalaxyScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let anchors: Anchor[] = [];

    const measure = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      anchors = waypoints.map((w, i) => {
        const el = document.getElementById(w.anchorId);
        const y = el ? el.getBoundingClientRect().top + window.scrollY : 0;
        return { progress: Math.min(1, Math.max(0, y / maxScroll)), index: i };
      });
      // guard against any non-increasing anchor (odd layout) so the bracket search stays sane
      for (let i = 1; i < anchors.length; i++) {
        if (anchors[i].progress <= anchors[i - 1].progress) {
          anchors[i].progress = anchors[i - 1].progress + 0.001;
        }
      }
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(document.body);
    window.addEventListener("resize", measure);

    let rafId = 0;

    const draw = (now: number) => {
      rafId = requestAnimationFrame(draw);
      if (width === 0 || height === 0 || anchors.length < 2) return;

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      let lo = 0;
      while (lo < anchors.length - 2 && anchors[lo + 1].progress < scrollProgress) lo++;
      const hi = lo + 1;
      const span = anchors[hi].progress - anchors[lo].progress;
      const localT = span > 0 ? Math.min(1, Math.max(0, (scrollProgress - anchors[lo].progress) / span)) : 0;

      const ptsA = ambientByWaypoint[lo];
      const ptsB = ambientByWaypoint[hi];
      const wA = waypoints[lo];
      const wB = waypoints[hi];

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const t = reducedMotion ? 0 : now;

      for (let i = 0; i < ptsA.length; i++) {
        const a = ptsA[i];
        const b = ptsB[i];
        const x = lerp(a.x, b.x, localT) * width;
        const y = lerp(a.y, b.y, localT) * height;
        const z = lerp(a.z, b.z, localT);
        const brightness = lerp(a.brightness, b.brightness, localT);
        const warm = localT < 0.5 ? a.warm : b.warm;

        const twinkle = reducedMotion
          ? 1
          : 0.78 + 0.22 * Math.sin(t / 1000 / a.twinkleFreq + a.twinklePhase);
        const alpha = Math.min(1, brightness * twinkle * (0.5 + z * 0.7));
        const radius = 0.6 + z * 1.6 + brightness * 0.8;

        const [r, g, bch] = warm ? AMBER : COOL_PALETTE[i % COOL_PALETTE.length];
        ctx.fillStyle = `rgba(${r},${g},${bch},${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- the Dim Region: dither -> clean particles as the journey resolves ---
      if (anchors.length > DIM_REGION_RESOLVE_AT) {
        const appearSpan = anchors[DIM_REGION_APPEAR_AT].progress - anchors[DIM_REGION_APPEAR_FROM].progress;
        const appearT =
          appearSpan > 0
            ? Math.min(1, Math.max(0, (scrollProgress - anchors[DIM_REGION_APPEAR_FROM].progress) / appearSpan))
            : 0;
        const resolveSpan = anchors[DIM_REGION_RESOLVE_AT].progress - anchors[DIM_REGION_APPEAR_AT].progress;
        const resolveT =
          resolveSpan > 0
            ? Math.min(1, Math.max(0, (scrollProgress - anchors[DIM_REGION_APPEAR_AT].progress) / resolveSpan))
            : 0;

        if (appearT > 0.01) {
          const dx = DIM_REGION_POS.x * width;
          const dy = DIM_REGION_POS.y * height;
          const radius = Math.min(width, height) * 0.14;

          drawDitherPatch(ctx, dx, dy, radius, SICK_A, SICK_B, appearT * (1 - resolveT));

          // resolved half: clean glowing particles fading in as the dither fades out
          if (resolveT > 0.01) {
            const cleanCount = 18;
            let seed = 42;
            const rand = () => {
              seed = (seed * 1103515245 + 12345) & 0x7fffffff;
              return seed / 0x7fffffff;
            };
            for (let i = 0; i < cleanCount; i++) {
              const a = rand() * Math.PI * 2;
              const r = radius * Math.sqrt(rand());
              const px = dx + Math.cos(a) * r;
              const py = dy + Math.sin(a) * r * 0.8;
              const alpha = 0.5 * resolveT * appearT;
              const [cr, cg, cb] = i % 2 === 0 ? TEAL : WHITE;
              ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha.toFixed(3)})`;
              ctx.beginPath();
              ctx.arc(px, py, 1.2 + rand() * 1.4, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // --- hand constellation ---
      const constOpacity = lerp(wA.constellationOpacity, wB.constellationOpacity, localT);
      const gapT = lerp(wA.gapT, wB.gapT, localT);

      const drawHand = (
        segs: [{ x: number; y: number }, { x: number; y: number }][],
        stars: { x: number; y: number }[],
        color: readonly [number, number, number],
        angular: boolean,
      ) => {
        const [r, g, bch] = color;
        ctx.strokeStyle = `rgba(${r},${g},${bch},${(constOpacity * 0.8).toFixed(3)})`;
        ctx.lineWidth = 1;
        for (const [p1, p2] of segs) {
          ctx.beginPath();
          if (angular) {
            const midX = p1.x + (p2.x - p1.x) * 0.5;
            ctx.moveTo(p1.x * width, p1.y * height);
            ctx.lineTo(midX * width, p1.y * height);
            ctx.lineTo(midX * width, p2.y * height);
            ctx.lineTo(p2.x * width, p2.y * height);
          } else {
            ctx.moveTo(p1.x * width, p1.y * height);
            ctx.lineTo(p2.x * width, p2.y * height);
          }
          ctx.stroke();
        }
        for (const s of stars) {
          ctx.fillStyle = `rgba(${r},${g},${bch},${constOpacity.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(s.x * width, s.y * height, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      drawHand(handSegments(leftHand), allStars(leftHand), TEAL, false);
      drawHand(handSegments(rightHand), allStars(rightHand), BLUE, true);

      // hint lines reaching toward the gap, lengthening as gapT -> 1 (closing)
      const reach = 0.4 + gapT * 0.6;
      const leftTip = leftHand.fingers[0][1];
      const rightTip = rightHand.fingers[0][1];
      ctx.strokeStyle = `rgba(${AMBER[0]},${AMBER[1]},${AMBER[2]},${(constOpacity * 0.7).toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(leftTip.x * width, leftTip.y * height);
      ctx.lineTo(lerp(leftTip.x, gapOpen.x, reach) * width, lerp(leftTip.y, gapOpen.y, reach) * height);
      ctx.moveTo(rightTip.x * width, rightTip.y * height);
      ctx.lineTo(lerp(rightTip.x, gapOpen.x, reach) * width, lerp(rightTip.y, gapOpen.y, reach) * height);
      ctx.stroke();

      // the gap star — the brightest point in the scene
      const pulse = reducedMotion ? 1 : 0.75 + Math.sin(t / 650) * 0.25 * (1 - gapT * 0.6);
      const gapRadius = (2.6 + gapT * 1.2) * pulse;
      const gx = gapOpen.x * width;
      const gy = gapOpen.y * height;
      const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, gapRadius * 7);
      glow.addColorStop(0, `rgba(${AMBER[0]},${AMBER[1]},${AMBER[2]},${(0.55 * constOpacity).toFixed(3)})`);
      glow.addColorStop(1, `rgba(${AMBER[0]},${AMBER[1]},${AMBER[2]},0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(gx, gy, gapRadius * 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(${AMBER[0]},${AMBER[1]},${AMBER[2]},${Math.min(1, constOpacity + 0.15).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(gx, gy, gapRadius, 0, Math.PI * 2);
      ctx.fill();
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
