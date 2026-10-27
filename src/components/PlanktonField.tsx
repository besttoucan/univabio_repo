import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { fitCanvas, rgba, seeded, tokenRgb, type Rgb } from "./glow";
import styles from "./Living.module.css";

interface Mote {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  /** 0 is dim; 1 is a full flash. Decays back to 0 over about 1.5s. */
  energy: number;
  hue: 0 | 1;
}

interface Ripple {
  x: number;
  y: number;
  age: number;
}

const STIR_RADIUS = 90;
const RIPPLE_LIFE = 1.4;
const RIPPLE_SPEED = 260;

/**
 * Dim plankton drifting in dark water. Unlike particles that flee the cursor,
 * these flash where they are disturbed: the pointer leaves a glowing wake, a
 * click or tap sends out a lit ring, and scrolling stirs the field.
 */
export function PlanktonField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const colors: Rgb[] = [tokenRgb("--glow-1"), tokenRgb("--glow-2")];
    const rand = seeded(7);
    let size = fitCanvas(canvas);
    let motes: Mote[] = [];
    const ripples: Ripple[] = [];

    const populate = (scale = 1) => {
      const count = Math.round(Math.min(250, Math.max(80, (size.w * size.h) / 5200)) * scale);
      motes = Array.from({ length: count }, () => ({
        x: rand() * size.w,
        y: rand() * size.h,
        vx: (rand() - 0.5) * 6,
        vy: (rand() - 0.5) * 6 - 2,
        size: 0.6 + rand() * 1.4,
        energy: 0,
        hue: rand() < 0.72 ? 0 : 1,
      }));
    };
    populate();

    const draw = () => {
      ctx.clearRect(0, 0, size.w, size.h);
      for (const m of motes) {
        const c = colors[m.hue];
        ctx.fillStyle = rgba(c, 0.16 + m.energy * 0.84);
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size + m.energy * 1.6, 0, Math.PI * 2);
        ctx.fill();
        if (m.energy > 0.08) {
          ctx.fillStyle = rgba(c, m.energy * 0.18);
          ctx.beginPath();
          ctx.arc(m.x, m.y, 6 + m.energy * 10, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      for (const r of ripples) {
        const t = r.age / RIPPLE_LIFE;
        ctx.strokeStyle = rgba(colors[0], 0.22 * (1 - t));
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.age * RIPPLE_SPEED, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const onResize = () => {
      size = fitCanvas(canvas);
      populate();
      if (reduced) draw();
    };
    window.addEventListener("resize", onResize);

    if (reduced) {
      draw();
      return () => window.removeEventListener("resize", onResize);
    }

    // Lights every mote near the segment the pointer just travelled.
    let last: { x: number; y: number } | null = null;
    const stir = (x: number, y: number) => {
      const from = last ?? { x, y };
      last = { x, y };
      const dx = x - from.x;
      const dy = y - from.y;
      const len2 = dx * dx + dy * dy || 1;
      for (const m of motes) {
        const t = Math.max(0, Math.min(1, ((m.x - from.x) * dx + (m.y - from.y) * dy) / len2));
        const d = Math.hypot(m.x - (from.x + t * dx), m.y - (from.y + t * dy));
        if (d < STIR_RADIUS) m.energy = Math.max(m.energy, 1 - d / STIR_RADIUS);
      }
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") stir(e.clientX, e.clientY);
    };
    const onLeave = () => (last = null);
    const onDown = (e: PointerEvent) => {
      if (ripples.length < 6) ripples.push({ x: e.clientX, y: e.clientY, age: 0 });
    };
    // Scrolling disturbs the water a little everywhere, which is what touch
    // screens get instead of a hover wake.
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const v = Math.abs(window.scrollY - lastScroll);
      lastScroll = window.scrollY;
      const n = Math.min(12, Math.round(v / 14));
      for (let i = 0; i < n; i++) {
        const m = motes[Math.floor(Math.random() * motes.length)];
        m.energy = Math.max(m.energy, 0.5 + Math.random() * 0.4);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let prev = performance.now();
    // Frame-time sampling: if the device cannot keep up, halve the field once.
    let slowFrames = 0;
    let degraded = false;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      if (!degraded && dt > 0.024 && ++slowFrames > 90) {
        degraded = true;
        populate(0.5);
      }
      const decay = Math.exp(-dt / 0.55);
      for (const m of motes) {
        m.x += m.vx * dt;
        m.y += m.vy * dt;
        if (m.x < -10) m.x += size.w + 20;
        if (m.x > size.w + 10) m.x -= size.w + 20;
        if (m.y < -10) m.y += size.h + 20;
        if (m.y > size.h + 10) m.y -= size.h + 20;
        m.energy *= decay;
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.age += dt;
        if (r.age > RIPPLE_LIFE) {
          ripples.splice(i, 1);
          continue;
        }
        const radius = r.age * RIPPLE_SPEED;
        for (const m of motes) {
          const d = Math.abs(Math.hypot(m.x - r.x, m.y - r.y) - radius);
          if (d < 14) m.energy = Math.max(m.energy, (1 - d / 14) * (1 - r.age / RIPPLE_LIFE));
        }
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        prev = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return <canvas ref={ref} className={styles.plankton} aria-hidden="true" />;
}
