import { colorBio, colorCircuit, colorFusion, colorHighlight, colorVascular } from "../theme";

// Shared pools for the 14 content-mapped satellites (5 judging criteria + 5
// prize tiers + 4 schedule milestones, build spec v22 section 1: "give
// UnivaBio's own content each their own object"). Rather than hand-design 14
// bespoke shapes, each item draws a variant (silhouette) and a color from
// these pools at different strides, so neighboring items in the same section
// never repeat both, and the three content groups don't all open on the same
// pairing either.

export type SatelliteVariant = "antibody" | "dish" | "ring" | "beacon" | "burst" | "crystal" | "pod";

export const satelliteVariants: readonly SatelliteVariant[] = [
  "antibody",
  "dish",
  "ring",
  "beacon",
  "burst",
  "crystal",
  "pod",
];

export const satelliteColorPool: readonly string[] = [
  colorBio,
  colorVascular,
  colorCircuit,
  colorFusion,
  colorHighlight,
  "#e0578f", // rose
  "#8b6bf0", // violet
  "#ffa53d", // orange
  "#9fe05a", // lime
];

export type SatelliteGroup = "judging" | "prizes" | "schedule" | "stats" | "why";

const GROUP_OFFSET: Record<SatelliteGroup, number> = {
  judging: 0,
  prizes: 2,
  schedule: 4,
  stats: 1,
  why: 3,
};

export interface SatelliteAssignment {
  variant: SatelliteVariant;
  color: string;
}

export function satelliteFor(group: SatelliteGroup, index: number): SatelliteAssignment {
  const offset = GROUP_OFFSET[group];
  const variant = satelliteVariants[(index + offset) % satelliteVariants.length];
  const color = satelliteColorPool[(index * 3 + offset) % satelliteColorPool.length];
  return { variant, color };
}
