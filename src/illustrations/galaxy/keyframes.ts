// Galaxy keyframes (build spec v19, section 1): the same section-by-section
// "journey" structure as earlier versions, reskinned as travel through a
// cosmos instead of into a body. One fixed-size ambient particle pool is
// reused across every keyframe (same index = same particle "flowing" from
// one configuration to the next), so scrolling reads as continuous travel
// rather than a slideshow of separate scenes.

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

export interface AmbientPoint {
  x: number;
  y: number;
  z: number; // simulated depth, 0 (far) - 1 (near)
  brightness: number;
  warm: boolean;
  twinkleFreq: number;
  twinklePhase: number;
}

interface Center {
  x: number;
  y: number;
  r: number;
  weight: number;
  warm?: boolean;
  /** Bias particles toward an annulus at radius r instead of a filled disc — orbital rings. */
  ring?: boolean;
}

export interface GalaxyProfile {
  id: string;
  centers: Center[];
  /** 0 = every point pulled toward a center, 1 = pure uniform scatter (empty space). */
  scatterMix: number;
  brightness: number;
}

const POOL_SIZE = 420;

function gaussian(rand: () => number): number {
  return (rand() + rand() + rand() - 1.5) / 1.5; // roughly -1..1, center-weighted
}

function pickCenter(centers: Center[], rand: () => number): Center {
  const total = centers.reduce((sum, c) => sum + c.weight, 0);
  let roll = rand() * total;
  for (const c of centers) {
    roll -= c.weight;
    if (roll <= 0) return c;
  }
  return centers[centers.length - 1];
}

/** Generates the fixed-size ambient pool for one profile. Same seed across all profiles so index i is the "same" star throughout the journey. */
export function generateAmbient(profile: GalaxyProfile, seed = 900): AmbientPoint[] {
  const rand = mulberry32(seed);
  const points: AmbientPoint[] = [];

  for (let i = 0; i < POOL_SIZE; i++) {
    let x: number;
    let y: number;
    let warm = false;
    let brightnessMul = 0.5 + rand() * 0.5;

    if (rand() < profile.scatterMix || profile.centers.length === 0) {
      x = rand();
      y = rand();
      brightnessMul *= 0.55;
    } else {
      const c = pickCenter(profile.centers, rand);
      const radius = c.ring ? c.r * (0.85 + rand() * 0.3) : c.r * Math.sqrt(rand());
      const angle = rand() * Math.PI * 2;
      x = c.x + Math.cos(angle) * radius;
      y = c.y + Math.sin(angle) * radius * 0.7;
      warm = !!c.warm && rand() < 0.35;
      if (c.warm) brightnessMul *= 1.3;
    }

    points.push({
      x: Math.min(1, Math.max(0, x + gaussian(rand) * 0.01)),
      y: Math.min(1, Math.max(0, y + gaussian(rand) * 0.01)),
      z: rand(),
      brightness: profile.brightness * brightnessMul,
      warm,
      twinkleFreq: 0.4 + rand() * 1.1,
      twinklePhase: rand() * Math.PI * 2,
    });
  }

  return points;
}

export interface Waypoint {
  /** DOM element id used to measure this waypoint's scroll position. */
  anchorId: string;
  profile: GalaxyProfile;
  /** How present the hand constellation is at this waypoint. */
  constellationOpacity: number;
  /** 0 = gap open (the reach), 1 = gap resolved (arrival). */
  gapT: number;
}

export const waypoints: Waypoint[] = [
  {
    anchorId: "top",
    constellationOpacity: 1,
    gapT: 0,
    profile: {
      id: "hero-wide-galaxy",
      scatterMix: 0.75,
      brightness: 0.55,
      centers: [
        { x: 0.15, y: 0.2, r: 0.12, weight: 1 }, // faint DNA-spiral arm, distant
        { x: 0.85, y: 0.3, r: 0.1, weight: 1 }, // faint cell cluster, distant
      ],
    },
  },
  {
    anchorId: "about",
    constellationOpacity: 0.16,
    gapT: 0,
    profile: {
      id: "nebula",
      scatterMix: 0.25,
      brightness: 0.6,
      centers: [
        { x: 0.25, y: 0.35, r: 0.28, weight: 1.4 },
        { x: 0.7, y: 0.6, r: 0.32, weight: 1.6 },
        { x: 0.5, y: 0.85, r: 0.22, weight: 1 },
      ],
    },
  },
  {
    anchorId: "theme",
    constellationOpacity: 0.14,
    gapT: 0,
    profile: {
      id: "star-cluster-cell",
      scatterMix: 0.12,
      brightness: 0.65,
      centers: [
        { x: 0.5, y: 0.45, r: 0.02, weight: 2.2, warm: true }, // nucleus star
        { x: 0.5, y: 0.45, r: 0.16, weight: 2, ring: true },
        { x: 0.5, y: 0.45, r: 0.26, weight: 1.4, ring: true },
      ],
    },
  },
  {
    anchorId: "requirements",
    constellationOpacity: 0.1,
    gapT: 0,
    profile: {
      id: "quiet-stretch",
      scatterMix: 0.9,
      brightness: 0.32,
      centers: [{ x: 0.5, y: 0.5, r: 0.4, weight: 1 }],
    },
  },
  {
    anchorId: "prizes",
    constellationOpacity: 0.16,
    gapT: 0,
    profile: {
      id: "binary-system",
      scatterMix: 0.2,
      brightness: 0.6,
      centers: [
        { x: 0.32, y: 0.5, r: 0.03, weight: 1.8, warm: true },
        { x: 0.32, y: 0.5, r: 0.18, weight: 1.6, ring: true },
        { x: 0.68, y: 0.5, r: 0.03, weight: 1.8, warm: true },
        { x: 0.68, y: 0.5, r: 0.14, weight: 1.4, ring: true },
      ],
    },
  },
  {
    anchorId: "sponsors",
    constellationOpacity: 0.08,
    gapT: 0,
    profile: {
      id: "quiet-waypoint",
      scatterMix: 0.92,
      brightness: 0.28,
      centers: [{ x: 0.5, y: 0.5, r: 0.35, weight: 1 }],
    },
  },
  {
    anchorId: "faq",
    constellationOpacity: 0.85,
    gapT: 1,
    profile: {
      id: "arrival",
      scatterMix: 0.7,
      brightness: 0.45,
      centers: [{ x: 0.5, y: 0.5, r: 0.3, weight: 1, warm: true }],
    },
  },
];

export const ambientByWaypoint = waypoints.map((w) => generateAmbient(w.profile));
