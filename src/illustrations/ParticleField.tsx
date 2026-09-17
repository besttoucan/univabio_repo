import { useEffect, useRef, type CSSProperties } from "react";
import { organicPoints, circuitPoints, type ReferencePoint } from "../assets/scene/referencePoints";
import { colorBio, colorCircuit, colorHighlight, hexToRgb } from "./theme";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import styles from "./ParticleField.module.css";

const [BIO_R, BIO_G, BIO_B] = hexToRgb(colorBio);
const [CIRCUIT_R, CIRCUIT_G, CIRCUIT_B] = hexToRgb(colorCircuit);
const [HIGHLIGHT_R, HIGHLIGHT_G, HIGHLIGHT_B] = hexToRgb(colorHighlight);
const HIGHLIGHT_RGBA = (a: number) => `rgba(${HIGHLIGHT_R},${HIGHLIGHT_G},${HIGHLIGHT_B},${a})`;

type Kind = "organic" | "circuit";
type EdgeMode = "random" | "sides";

interface Particle {
  kind: Kind;
  focal: boolean;
  tx: number; // target x, 0-1
  ty: number; // target y, 0-1
  intensity: number;
  startX: number; // 0-1, off/on canvas
  startY: number;
  phase: number; // idle-jitter phase offset
}

function buildParticles(
  sourceOrganic: readonly ReferencePoint[],
  sourceCircuit: readonly ReferencePoint[],
  density: number,
  focalFraction: number,
  seed: number,
  edgeMode: EdgeMode,
): Particle[] {
  let s = seed;
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };

  const pick = (pts: readonly ReferencePoint[], kind: Kind): Particle[] => {
    const stride = Math.max(1, Math.round(1 / density));
    const picked: Particle[] = [];
    for (let i = 0; i < pts.length; i += stride) {
      const [x, y, intensity] = pts[i];
      const along = rand();
      let startX = 0.5;
      let startY = 0.5;
      if (edgeMode === "sides") {
        // organic streams in from the left, circuit from the right — the
        // "coming together from opposite sides" entrance (build spec v16).
        startX = kind === "organic" ? -0.08 : 1.08;
        startY = along;
      } else {
        const edge = Math.floor(rand() * 4);
        if (edge === 0) {
          startX = along;
          startY = -0.08;
        } else if (edge === 1) {
          startX = along;
          startY = 1.08;
        } else if (edge === 2) {
          startX = -0.08;
          startY = along;
        } else {
          startX = 1.08;
          startY = along;
        }
      }
      picked.push({ kind, focal: false, tx: x, ty: y, intensity, startX, startY, phase: rand() * Math.PI * 2 });
    }
    return picked;
  };

  const all = [...pick(sourceOrganic, "organic"), ...pick(sourceCircuit, "circuit")];
  const focalCount = Math.round(all.length * focalFraction);
  const byIntensity = [...all].sort((a, b) => b.intensity - a.intensity);
  for (let i = 0; i < focalCount; i++) byIntensity[i].focal = true;

  return all;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export interface ParticleFieldProps {
  className?: string;
  style?: CSSProperties;
  /** Fraction of sampled reference points to render, 0-1. Dense (~1) for the hero, sparse (~0.12-0.2) for data-heavy sections. */
  density?: number;
  /** Overall canvas opacity. */
  opacity?: number;
  /** Animate particles converging from the edges on mount. Off for quieter background instances. */
  entrance?: boolean;
  entranceDurationMs?: number;
  /** Fraction of the brightest particles rendered in the warm highlight color as focal beacons. */
  focalFraction?: number;
  seed?: number;
  /** Override the point source (default: the reference-image sample). Used by the hand-authored reach motif (build spec v16). */
  sourceOrganic?: readonly ReferencePoint[];
  sourceCircuit?: readonly ReferencePoint[];
  /** "sides" streams organic particles in from the left and circuit particles from the right, for the reach motif. */
  edgeMode?: EdgeMode;
  /** A single pulsing amber spark at a fixed point (0-1), e.g. the reach motif's near-touch gap — the one place allowed a more prominent glow. */
  spark?: { x: number; y: number };
}

/**
 * A canvas of small glowing points whose positions are sampled directly from
 * the reference image (src/assets/scene/referencePoints.ts) rather than
 * drawn from imagination — build spec v15. Organic-region points render as
 * soft glowing circles, circuit-region points as small blocky squares, so the
 * "dissolving into data" idea comes from the image's own composition. On
 * mount (unless reduced motion / entrance=false) particles stream in from
 * the viewport edges and ease onto their target positions.
 */
export function ParticleField({
  className,
  style,
  density = 1,
  opacity = 1,
  entrance = true,
  entranceDurationMs = 2800,
  focalFraction = 0.035,
  seed = 7,
  sourceOrganic = organicPoints,
  sourceCircuit = circuitPoints,
  edgeMode = "random",
  spark,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles = buildParticles(sourceOrganic, sourceCircuit, density, focalFraction, seed, edgeMode);
    const playEntrance = entrance && !reducedMotion;

    let width = 0;
    let height = 0;
    let dpr = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    let rafId = 0;
    let startTime: number | null = null;

    const draw = (now: number) => {
      rafId = requestAnimationFrame(draw);
      if (!visible || width === 0 || height === 0) return;
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const t = playEntrance ? Math.min(1, elapsed / entranceDurationMs) : 1;
      const eased = easeOutCubic(t);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const px = p.startX + (p.tx - p.startX) * eased;
        const py = p.startY + (p.ty - p.startY) * eased;

        let jx = 0;
        let jy = 0;
        if (!reducedMotion && t >= 1) {
          const jitterAmp = 1.6;
          jx = Math.sin(now / 1400 + p.phase) * jitterAmp;
          jy = Math.cos(now / 1700 + p.phase * 1.3) * jitterAmp;
        }

        const x = px * width + jx;
        const y = py * height + jy;
        const alpha = (0.35 + p.intensity * 0.65) * (0.4 + eased * 0.6);
        const [r, g, b] = p.focal
          ? [HIGHLIGHT_R, HIGHLIGHT_G, HIGHLIGHT_B]
          : p.kind === "organic"
            ? [BIO_R, BIO_G, BIO_B]
            : [CIRCUIT_R, CIRCUIT_G, CIRCUIT_B];

        if (p.kind === "organic" && !p.focal) {
          const radius = 1.4 + p.intensity * 2.2;
          const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
          grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
          grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const size = p.focal ? 3 + p.intensity * 2.4 : 1.6 + p.intensity * 2;
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
          if (p.focal) {
            ctx.shadowColor = `rgba(${r},${g},${b},0.9)`;
            ctx.shadowBlur = 6;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
          ctx.shadowBlur = 0;
        }
      }

      if (spark) {
        const sx = spark.x * width;
        const sy = spark.y * height;
        const pulse = reducedMotion ? 1 : 0.7 + Math.sin(now / 650) * 0.3;
        const baseRadius = 3.5 * pulse * eased;
        const glowRadius = 22 * pulse * eased;

        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowRadius);
        glow.addColorStop(0, HIGHLIGHT_RGBA(0.55 * eased));
        glow.addColorStop(1, HIGHLIGHT_RGBA(0));
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(sx, sy, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = HIGHLIGHT_RGBA(Math.min(1, eased + 0.2));
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(1, baseRadius), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      io.disconnect();
    };
  }, [
    sourceOrganic,
    sourceCircuit,
    density,
    entrance,
    entranceDurationMs,
    focalFraction,
    seed,
    edgeMode,
    spark,
    reducedMotion,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas} ${className ?? ""}`}
      style={{ opacity, ...style }}
      aria-hidden="true"
    />
  );
}
