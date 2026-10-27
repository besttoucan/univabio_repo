import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { fitCanvas, rgba, seeded, tokenRgb, type Rgb } from "./glow";
import styles from "./Living.module.css";

/** One readout per growth stage, hero to footer. */
const READOUT = ["1", "4", "64", "10³", "10⁶", "10⁹", "∞"];
const MAX_CELLS = 64;
const GOLDEN = 2.399963;

interface Segment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** 0..1, when in the layer's growth this segment appears. */
  birth: number;
  depth: number;
  /** 0 is the first network; 1 the finer one that densifies it later. */
  layer: 0 | 1;
  children: number[];
}

interface Pulse {
  path: number[];
  at: number;
}

/**
 * Grows a branching network outward from the colony, breadth first, so a
 * segment's birth order is how far it sits from the colony.
 */
function growNetwork(cx: number, cy: number, unit: number, w: number, h: number): Segment[] {
  const rand = seeded(2026);
  const segs: Segment[] = [];
  const layers: Array<{ roots: number; step: number; cap: number; layer: 0 | 1 }> = [
    { roots: 9, step: 0.075, cap: 900, layer: 0 },
    { roots: 15, step: 0.05, cap: 800, layer: 1 },
  ];
  for (const spec of layers) {
    const start = segs.length;
    let front = Array.from({ length: spec.roots }, (_, i) => {
      const a = (i / spec.roots) * Math.PI * 2 + rand() * 0.4;
      const r = unit * 0.2;
      return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, a, depth: 0, parent: -1 };
    });
    let level = 0;
    const margin = unit * 0.15;
    while (front.length && segs.length - start < spec.cap) {
      const next: typeof front = [];
      for (const tip of front) {
        const len = unit * spec.step * (0.7 + rand() * 0.6);
        const a = tip.a + (rand() - 0.5) * 0.7;
        const x2 = tip.x + Math.cos(a) * len;
        const y2 = tip.y + Math.sin(a) * len;
        if (x2 < -margin || x2 > w + margin || y2 < -margin || y2 > h + margin) continue;
        const index = segs.length;
        segs.push({ x1: tip.x, y1: tip.y, x2, y2, birth: level, depth: tip.depth, layer: spec.layer, children: [] });
        if (tip.parent >= 0) segs[tip.parent].children.push(index);
        next.push({ x: x2, y: y2, a, depth: tip.depth, parent: index });
        if (rand() < 0.3) {
          const fork = a + (rand() < 0.5 ? -1 : 1) * (0.45 + rand() * 0.4);
          next.push({ x: x2, y: y2, a: fork, depth: tip.depth + 1, parent: index });
        }
      }
      front = next;
      level++;
    }
    for (let i = start; i < segs.length; i++) segs[i].birth /= Math.max(1, level - 1);
  }
  return segs;
}

/** A random walk from a root to a leaf, for a light pulse to travel along. */
function pulsePath(segs: Segment[], roots: number[], rand: () => number): number[] {
  if (!roots.length) return [];
  let i = roots[Math.floor(rand() * roots.length)];
  const path = [i];
  while (segs[i].children.length) {
    i = segs[i].children[Math.floor(rand() * segs[i].children.length)];
    path.push(i);
  }
  return path;
}

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

/**
 * The page's one illustration. A single breathing cell in the hero divides
 * into a colony, sends out filaments, becomes a network, and by the footer the
 * whole network is lit. Growth follows scroll position, both ways.
 */
export function Organism() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const glow1: Rgb = tokenRgb("--glow-1");
    const glow2: Rgb = tokenRgb("--glow-2");
    const glow3: Rgb = tokenRgb("--glow-3");
    const rand = seeded(11);

    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;
    let unit = 0;
    let segs: Segment[] = [];
    let roots: number[] = [];
    let pulses: Pulse[] = [];

    const layout = () => {
      ({ w, h } = fitCanvas(canvas, 1.5));
      const wide = w > 900;
      cx = wide ? w * 0.7 : w * 0.5;
      cy = wide ? h * 0.52 : h * 0.6;
      unit = Math.min(w, h) * (wide ? 1 : 1.15);
      segs = growNetwork(cx, cy, unit, w, h);
      roots = segs.flatMap((s, i) => (s.birth === 0 ? [i] : []));
      pulses = Array.from({ length: 28 }, () => ({ path: pulsePath(segs, roots, rand), at: rand() * 6 }));
    };
    layout();

    const target = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? (window.scrollY / max) * 6 : 0;
    };
    let growth = target();
    let stage = -1;
    let time = 0;

    const drawCells = () => {
      const count = growth <= 1 ? 4 ** growth : Math.min(MAX_CELLS, 4 * 16 ** (growth - 1));
      const rc = (unit * 0.07) / Math.cbrt(count);
      const breath = reduced ? 1 : 1 + 0.06 * Math.sin(time * 1.3);
      const differentiate = clamp01(growth - 2);
      const dim = 1 - 0.45 * clamp01((growth - 3) / 2);
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < Math.ceil(count); i++) {
        const emerge = clamp01(count - i);
        // A new cell buds from its parent, then moves out to its own place.
        const place = (k: number) => {
          const r = rc * 1.12 * Math.sqrt(k + 0.5) * (k === 0 ? 0 : 1);
          return [cx + Math.cos(k * GOLDEN) * r, cy + Math.sin(k * GOLDEN) * r];
        };
        const [px, py] = place(i >> 1);
        const [tx, ty] = place(i);
        const x = px + (tx - px) * emerge;
        const y = py + (ty - py) * emerge;
        const r = rc * breath * (0.4 + 0.6 * emerge);
        const color = differentiate > 0 && i % 3 === 1 ? glow2 : glow1;
        // Signals pass between touching membranes as a travelling brightness.
        const signal = reduced ? 0.5 : 0.5 + 0.5 * Math.sin(time * 2.2 - i * 0.6);
        const a = dim * emerge;

        const body = ctx.createRadialGradient(x, y, 0, x, y, r * 2.4);
        body.addColorStop(0, rgba(color, 0.55 * a));
        body.addColorStop(0.4, rgba(color, 0.16 * a));
        body.addColorStop(1, rgba(color, 0));
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.arc(x, y, r * 2.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = rgba(color, (0.3 + 0.35 * signal * Math.min(1, growth)) * a);
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const drawNetwork = () => {
      const grow = [clamp01((growth - 2.5) / 2.5), clamp01((growth - 4.3) / 1.2)];
      if (grow[0] === 0) return;
      const lit = clamp01((growth - 5.5) / 0.5);
      for (const layer of [0, 1] as const) {
        const g = grow[layer];
        if (!g) continue;
        for (const thick of [true, false]) {
          ctx.beginPath();
          for (const s of segs) {
            if (s.layer !== layer || s.birth > g || (s.depth < 2) !== thick) continue;
            // The growing tip extends smoothly instead of popping in.
            const k = clamp01((g - s.birth) * 20);
            ctx.moveTo(s.x1, s.y1);
            ctx.lineTo(s.x1 + (s.x2 - s.x1) * k, s.y1 + (s.y2 - s.y1) * k);
          }
          const base = (layer ? 0.1 : 0.2) + lit * 0.22;
          const color = layer ? glow2 : glow1;
          const width = (thick ? 1.4 : 0.7) * (layer ? 0.7 : 1);
          ctx.strokeStyle = rgba(color, base * 0.25);
          ctx.lineWidth = width * 5;
          ctx.stroke();
          ctx.strokeStyle = rgba(color, base);
          ctx.lineWidth = width;
          ctx.stroke();
        }
      }

      const shown = Math.round(clamp01((growth - 3) / 2) * pulses.length);
      for (let p = 0; p < shown; p++) {
        const pulse = pulses[p];
        const i = Math.floor(pulse.at);
        const s = segs[pulse.path[i]];
        if (!s || s.birth > grow[s.layer]) continue;
        const f = pulse.at - i;
        const x = s.x1 + (s.x2 - s.x1) * f;
        const y = s.y1 + (s.y2 - s.y1) * f;
        const halo = ctx.createRadialGradient(x, y, 0, x, y, 9);
        const color = lit > 0.5 && p % 4 === 0 ? glow3 : glow1;
        halo.addColorStop(0, rgba(color, 0.9));
        halo.addColorStop(1, rgba(color, 0));
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, w, h);
      drawCells();
      drawNetwork();
      const next = Math.min(6, Math.round(growth));
      if (next !== stage && readoutRef.current) {
        stage = next;
        readoutRef.current.textContent = READOUT[stage];
      }
    };

    const onResize = () => {
      layout();
      draw();
    };
    window.addEventListener("resize", onResize);

    if (reduced) {
      // No motion: each scroll position gets a still rendering of its stage.
      let queued = 0;
      const onScroll = () => {
        cancelAnimationFrame(queued);
        queued = requestAnimationFrame(() => {
          growth = target();
          draw();
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      draw();
      return () => {
        cancelAnimationFrame(queued);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScroll);
      };
    }

    let raf = 0;
    let prev = performance.now();
    let lastScroll = window.scrollY;
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      time += dt;
      growth += (target() - growth) * Math.min(1, dt * 4);
      // Signals hurry along the branches while the page is moving.
      const velocity = Math.min(8, Math.abs(window.scrollY - lastScroll) / 40);
      lastScroll = window.scrollY;
      for (const pulse of pulses) {
        pulse.at += dt * (2.2 + velocity * 4);
        if (pulse.at >= pulse.path.length) {
          pulse.path = pulsePath(segs, roots, rand);
          pulse.at = 0;
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
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <>
      <canvas ref={canvasRef} className={styles.organism} aria-hidden="true" />
      <p className={`mono ${styles.readout}`} aria-hidden="true">
        CELLS <span ref={readoutRef}>1</span>
      </p>
    </>
  );
}
