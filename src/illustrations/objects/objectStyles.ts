// Shared style tokens for the "cast of objects" (build spec v22, section 4's
// consistency rule): every individually-illustrated SVG object shares the
// same *construction technique* — an opaque flat fill paired with a stroke
// in a darker shade of that object's own base color, plus small opaque flat
// detail shapes (craters, panels, folds) layered on top for texture — rather
// than a restricted site-wide palette. Per-object colors live in
// objectPalette.ts (bespoke objects) and satellitePalette.ts (the 14
// content-mapped satellites).

export const STROKE_WEIGHT = 1.6;
export const GLOW_STD_DEVIATION = 2.4;

/**
 * A <filter> def for the object's glow-rim (soft blur behind the crisp
 * shape). Per the v22 spec, glow no longer simulates light on every body —
 * it's reserved for exactly two sparing accent points sitewide: the Beacon's
 * light (DnaCircuitMerge) and the 1st-place prize satellite's accent. Give
 * each instance a unique id.
 */
export function glowFilterId(name: string): string {
  return `objectGlow-${name}`;
}
