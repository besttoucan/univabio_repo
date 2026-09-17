// Shared style tokens for the "cast of objects" (build spec v21, section 3
// and section 6's consistency audit): every individually-illustrated SVG
// object — Cell-Planet, Mitochondria-Moon, Probe-Ship, Antibody-Satellite,
// Bloodstream Belt, Dim Region, DNA-Comets — uses the same glow-rim filter
// recipe and stroke weight, so they read as one consistent object language
// rather than each having its own bespoke treatment.

export const STROKE_WEIGHT = 1.6;
export const GLOW_STD_DEVIATION = 2.4;

/** A <filter> def every object SVG includes for its glow-rim (soft blur behind the crisp shape). Give each instance a unique id. */
export function glowFilterId(name: string): string {
  return `objectGlow-${name}`;
}
