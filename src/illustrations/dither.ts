// The site's one dither utility (build spec v21, section 1): ordered-dither
// pixel blocks are reserved for transition/corruption/"the unsolved
// problem" — used for the Dim Region and fusion-seam moments. Never used
// decoratively; if something doesn't represent a problem or a
// organic-to-circuit transition, it doesn't get this treatment.

const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];
const BAYER_SIZE = 4;
const BAYER_MAX = 16;

/** Draws a glitchy ordered-dither patch at (cx, cy), sized `radius`, in colorA/colorB (hex). `intensity` 0-1 controls how noisy/visible it is — driven by scrollProgress for the Dim Region's resolve. */
export function drawDitherPatch(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  colorA: readonly [number, number, number],
  colorB: readonly [number, number, number],
  intensity: number,
  blockSize = 4,
): void {
  if (intensity <= 0.02) return;
  const [ar, ag, ab] = colorA;
  const [br, bg, bb] = colorB;

  for (let y = -radius; y < radius; y += blockSize) {
    for (let x = -radius; x < radius; x += blockSize) {
      const dist = Math.sqrt(x * x + y * y) / radius;
      if (dist > 1) continue;
      const falloff = (1 - dist) * intensity;
      if (falloff <= 0.02) continue;

      const bx = Math.floor((x + radius) / blockSize) % BAYER_SIZE;
      const by = Math.floor((y + radius) / blockSize) % BAYER_SIZE;
      const threshold = (BAYER_4X4[by][bx] + 0.5) / BAYER_MAX;
      const mix = Math.random() < 0.5 + (threshold - 0.5) * 0.6 ? 1 : 0;

      const r = mix ? br : ar;
      const g = mix ? bg : ag;
      const b = mix ? bb : ab;
      ctx.fillStyle = `rgba(${r},${g},${b},${falloff.toFixed(3)})`;
      ctx.fillRect(cx + x, cy + y, blockSize, blockSize);
    }
  }
}
