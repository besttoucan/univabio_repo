// The site's one illustration palette. Every illustration component imports
// these instead of hardcoding hex values, so the whole cast of graphics reads
// as one crafted system. Colors are assigned *semantically* and used the same
// way everywhere:
//   colorBio      — cellular / biological structures (organelles, membranes)
//   colorVascular — blood / vascular / connective imagery
//   colorCircuit  — circuit / data / computational structures
//   colorFusion   — the moments biology becomes signal — DNA-as-circuit, merges
//   colorHighlight— sparing use: CTA emphasis, the "1st place" / featured beat
//
// Keep in sync with the matching --color-* custom properties in src/index.css.

export const colorPaper = "#f6f5f0";
export const colorInk = "#15140f";
export const colorInkDim = "#4a473e";
export const colorInkFaint = "#8c8879";

export const colorBio = "#1f7a5c";
export const colorVascular = "#e0524a";
export const colorCircuit = "#2f5fd6";
export const colorFusion = "#7c4fd6";
export const colorHighlight = "#e2a02c";

export const gradients = {
  bio: [colorBio, "#54b98c"] as const,
  circuit: [colorCircuit, "#6a8bff"] as const,
  fusion: [colorFusion, colorCircuit] as const,
  vascular: [colorVascular, colorHighlight] as const,
};
