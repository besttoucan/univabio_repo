// The site's central motif, now built as an actual constellation (build spec
// v19, section 0): v16 tried hundreds of particles forming literal hand
// anatomy and it read as noise; v17 hand-authored finger curves that read
// better but were still dense point-clouds. A constellation sidesteps both
// problems on purpose — a small number of bright "star" points connected by
// thin lines is the classic star-chart technique for suggesting a shape
// without filling it in, and it's thematically correct for a galaxy-themed
// world rather than a workaround.
//
// Each hand is reduced to ~11 key points (a palm/wrist anchor plus a knuckle
// and a fingertip per finger — 5 fingers × 2 + 1 = 11), per the spec's
// "15-25 key points per hand" guidance, echoing the same reference this site
// has used since v17 (the FreeSVG "Creation of Adam" hand paths weren't
// fetchable — no direct file URL, gated behind a session-cookie download
// flow — so these are hand-placed key points in the same varied-finger-
// length arrangement authored for v17, just reduced to knuckle+tip stars).

export interface Star {
  x: number;
  y: number;
}

export interface Hand {
  palm: Star;
  /** [knuckle, tip] per finger, index finger first (the one nearest the gap). */
  fingers: [Star, Star][];
}

const leftPalm: Star = { x: 0.24, y: 0.82 };
const leftFingers: [Star, Star][] = [
  [{ x: 0.36, y: 0.805 }, { x: 0.475, y: 0.775 }], // index — reaches furthest
  [{ x: 0.33, y: 0.775 }, { x: 0.45, y: 0.755 }], // middle
  [{ x: 0.3, y: 0.755 }, { x: 0.42, y: 0.745 }], // ring
  [{ x: 0.27, y: 0.735 }, { x: 0.375, y: 0.735 }], // pinky
  [{ x: 0.28, y: 0.855 }, { x: 0.38, y: 0.82 }], // thumb
];

const rightPalm: Star = { x: 0.76, y: 0.82 };
const rightFingers: [Star, Star][] = [
  [{ x: 0.64, y: 0.805 }, { x: 0.525, y: 0.775 }],
  [{ x: 0.67, y: 0.775 }, { x: 0.55, y: 0.755 }],
  [{ x: 0.7, y: 0.755 }, { x: 0.58, y: 0.745 }],
  [{ x: 0.73, y: 0.735 }, { x: 0.625, y: 0.735 }],
  [{ x: 0.72, y: 0.855 }, { x: 0.62, y: 0.82 }],
];

export const leftHand: Hand = { palm: leftPalm, fingers: leftFingers };
export const rightHand: Hand = { palm: rightPalm, fingers: rightFingers };

/** The gap star's position when open (the payoff moment) vs. resolved (the arrival keyframe, merged into the formation). */
export const gapOpen: Star = { x: 0.5, y: 0.775 };
export const gapResolved: Star = { x: 0.5, y: 0.775 };

/** Line segments to draw for one hand: palm→knuckle, knuckle→tip, per finger. */
export function handSegments(hand: Hand): [Star, Star][] {
  const segs: [Star, Star][] = [];
  for (const [knuckle, tip] of hand.fingers) {
    segs.push([hand.palm, knuckle]);
    segs.push([knuckle, tip]);
  }
  return segs;
}

export function allStars(hand: Hand): Star[] {
  return [hand.palm, ...hand.fingers.flatMap(([k, t]) => [k, t])];
}
