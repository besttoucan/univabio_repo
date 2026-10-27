/** Canvas drawing needs the glow tokens as numbers so it can vary their alpha. */
export type Rgb = [number, number, number];

export function tokenRgb(name: string): Rgb {
  const hex = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export const rgba = ([r, g, b]: Rgb, a: number) => `rgba(${r},${g},${b},${a})`;

/** Deterministic PRNG, so the organism grows the same shape on every load. */
export function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Sizes a fixed, full-viewport canvas to the window at a capped pixel ratio. */
export function fitCanvas(canvas: HTMLCanvasElement, maxDpr = 2) {
  const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  canvas.getContext("2d")!.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { w, h };
}
