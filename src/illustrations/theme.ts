// The site's one illustration palette. Every illustration component imports
// these instead of hardcoding hex values, so the whole cast of graphics reads
// as one crafted system. Colors are assigned *semantically* and used the same
// way everywhere:
//   colorBio      — cellular / biological structures (organelles, membranes)
//   colorVascular — blood / vascular / connective imagery
//   colorCircuit  — circuit / data / computational structures
//   colorFusion   — the moments biology becomes signal — DNA-as-circuit, merges
//   colorHighlight— sparing use: CTA emphasis, glow points, the "1st place" beat
//
// v12: sampled directly from the reference image (src/assets/scene/
// bio-circuit-fusion.*) with a color-picking script rather than approximated
// — its base is navy-indigo and its circuit color is a saturated blue, not
// the teal/cyan guessed in v10/v11. Keep in sync with the matching
// --color-* custom properties in src/index.css.

export const colorPaper = "#05072a";
export const colorInk = "#eef1fb";
export const colorInkDim = "#b7c0e0";
export const colorInkFaint = "#6b7396";

export const colorBio = "#55d98f";
export const colorVascular = "#67e0c9";
export const colorCircuit = "#4f7fe0";
export const colorFusion = "#3f9fc9";
export const colorHighlight = "#ffb454";

export const gradients = {
  bio: [colorBio, "#1f7a5c"] as const,
  circuit: [colorCircuit, "#102bd3"] as const,
  fusion: [colorFusion, colorCircuit] as const,
  vascular: [colorVascular, colorHighlight] as const,
};

/** "#rrggbb" -> [r, g, b], 0-255 each. Used wherever a canvas 2D context needs an rgba() string built from these hex constants. */
export function hexToRgb(hex: string): readonly [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
