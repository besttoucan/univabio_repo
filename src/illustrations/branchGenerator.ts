// The single typed, seedable line-art generator behind every branching mark on
// the site — vasculature, chromatin/DNA, circuit traces. One system at different
// params per zone, rather than a grab-bag of hand-built one-off assets.

export interface BranchSegment {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  depth: number;
  length: number;
  strokeWidth: number;
}

export interface BranchGeneratorOptions {
  originX: number;
  originY: number;
  /** Radians. 0 = growing rightward, -PI/2 = growing upward. */
  initialAngle: number;
  maxDepth: number;
  branchLength: number;
  /** Radians of random angle deviation per segment. Lower = more regular/circuit-like. */
  angleJitter: number;
  branchProbability: number | ((depth: number) => number);
  taper: number;
  strokeWeight: number;
  seed: number;
  maxSegments?: number;
}

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

export function generateBranch(options: BranchGeneratorOptions): BranchSegment[] {
  const segments: BranchSegment[] = [];
  const rng = mulberry32(options.seed);
  const maxSegments = options.maxSegments ?? 260;
  let nextId = 0;

  const forkChanceAt = (depth: number) =>
    typeof options.branchProbability === "function"
      ? options.branchProbability(depth)
      : options.branchProbability;

  function walk(x: number, y: number, angle: number, depth: number) {
    if (depth > options.maxDepth || segments.length >= maxSegments) return;

    const len = options.branchLength * Math.pow(options.taper, depth) * (0.7 + rng() * 0.6);
    const angleDelta = (rng() - 0.5) * options.angleJitter;
    const newAngle = angle + angleDelta;
    const x2 = x + Math.cos(newAngle) * len;
    const y2 = y + Math.sin(newAngle) * len;
    const strokeWidth = Math.max(0.5, options.strokeWeight * Math.pow(options.taper, depth));

    segments.push({ id: `s${nextId++}`, x1: x, y1: y, x2, y2, depth, length: len, strokeWidth });

    walk(x2, y2, newAngle, depth + 1);

    if (rng() < forkChanceAt(depth)) {
      const forkSign = rng() > 0.5 ? 1 : -1;
      const forkAngle = newAngle + forkSign * (0.42 + rng() * 0.55);
      walk(x2, y2, forkAngle, depth + 1);
    }
  }

  walk(options.originX, options.originY, options.initialAngle, 0);
  return segments;
}

export function defaultForkCurve(depth: number): number {
  return Math.max(0, 0.58 - depth * 0.085);
}
