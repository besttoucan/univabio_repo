// The site's central motif (build spec v16): two branching forms reaching
// toward each other, tips almost touching, with a spark in the gap — the
// same underlying composition as "two hands almost touching," built from
// this site's own established visual language (organic tendrils vs. angular
// circuit traces) rather than literal hand anatomy. Unlike the ambient
// fields in referencePoints.ts, these points are deliberately authored (not
// sampled from a photo) because the taper and the near-touch gap distance
// are the whole idea and need to be designed on purpose.

import type { ReferencePoint } from "../assets/scene/referencePoints";

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A smooth, curved tendril (organic) from base to tip via a bowed quadratic curve. */
function organicTendril(
  baseX: number,
  baseY: number,
  tipX: number,
  tipY: number,
  bow: number,
  steps: number,
): ReferencePoint[] {
  const midX = (baseX + tipX) / 2 + bow;
  const midY = (baseY + tipY) / 2;
  const pts: ReferencePoint[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = (1 - t) * (1 - t) * baseX + 2 * (1 - t) * t * midX + t * t * tipX;
    const y = (1 - t) * (1 - t) * baseY + 2 * (1 - t) * t * midY + t * t * tipY;
    const intensity = 0.45 + t * 0.4;
    pts.push([x, y, intensity]);
  }
  return pts;
}

/** An angular, right-angled polyline (circuit trace) from base to tip. */
function circuitTendril(baseX: number, baseY: number, tipX: number, tipY: number, steps: number): ReferencePoint[] {
  const bendX = baseX + (tipX - baseX) * 0.6;
  const legs: [number, number, number, number][] = [
    [baseX, baseY, bendX, baseY],
    [bendX, baseY, bendX, tipY],
    [bendX, tipY, tipX, tipY],
  ];
  const pts: ReferencePoint[] = [];
  const perLeg = Math.max(1, Math.floor(steps / legs.length));
  legs.forEach(([x1, y1, x2, y2], legIndex) => {
    for (let i = 0; i <= perLeg; i++) {
      const t = i / perLeg;
      const overall = (legIndex + t) / legs.length;
      const intensity = 0.45 + overall * 0.4;
      pts.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, intensity]);
    }
  });
  return pts;
}

export interface ReachMotif {
  organic: ReferencePoint[];
  circuit: ReferencePoint[];
  gap: { x: number; y: number };
}

/**
 * Builds the two reaching forms. `gapHalfWidth` is the normalized distance
 * from center to each form's nearest tip — the near-touch distance that
 * makes the composition read (too close looks merged, too far looks
 * disconnected).
 */
export function buildReachMotif(seed = 5, gapHalfWidth = 0.02): ReachMotif {
  const rand = mulberry32(seed);
  const centerX = 0.5;
  const centerY = 0.78;
  const spanX = 0.34; // how far each form's base sits from center, normalized
  const tendrilCount = 7;

  const organic: ReferencePoint[] = [];
  const circuit: ReferencePoint[] = [];

  for (let i = 0; i < tendrilCount; i++) {
    const spread = (i / (tendrilCount - 1) - 0.5) * 2; // -1..1
    const baseY = centerY + spread * 0.2;
    const baseX = centerX - spanX + (rand() - 0.5) * 0.02;
    const tipY = centerY + spread * (0.012 + rand() * 0.006);
    const tipX = centerX - gapHalfWidth - Math.abs(spread) * 0.015;
    const bow = spread * 0.05 + (rand() - 0.5) * 0.015;
    organic.push(...organicTendril(baseX, baseY, tipX, tipY, bow, 42));
  }

  for (let i = 0; i < tendrilCount; i++) {
    const spread = (i / (tendrilCount - 1) - 0.5) * 2;
    const baseY = centerY + spread * 0.14;
    const baseX = centerX + spanX + (rand() - 0.5) * 0.02;
    const tipY = centerY + spread * (0.012 + rand() * 0.006);
    const tipX = centerX + gapHalfWidth + Math.abs(spread) * 0.015;
    circuit.push(...circuitTendril(baseX, baseY, tipX, tipY, 39));
  }

  return { organic, circuit, gap: { x: centerX, y: centerY } };
}
