// v22 flat-illustration identities for the site's bespoke "cast" objects
// (build spec v22: HackHarvard-style flat vector illustration — every object
// gets its own confident, internally-coherent color identity rather than
// sharing the site's narrow UI palette). Each record is a small closed
// palette: base = the object's dominant flat fill, detail = a lighter tone
// for texture shapes layered on top, outline = a darker shade of base used
// for the object's own stroke (not a single global ink stroke), accent = a
// sparing highlight point (nucleus, beacon light, engine glow).
//
// Cell-Planet is deliberately the one warm identity — every other object
// here, and the site's underlying theme.ts palette, is cool-toned (green/
// teal/blue/cyan), so the hero planet is the intended point of contrast.

export interface ObjectIdentity {
  base: string;
  detail: string;
  outline: string;
  accent: string;
}

export const cellPlanetIdentity: ObjectIdentity = {
  base: "#ff8a5c",
  detail: "#ffcf6b",
  outline: "#9c3f2b",
  accent: "#fff1c2",
};

export const mitochondriaMoonIdentity: ObjectIdentity = {
  base: "#3ea67f",
  detail: "#7fe0c0",
  outline: "#1c4d3c",
  accent: "#c8f7e6",
};

export const nucleusPlanetIdentity: ObjectIdentity = {
  base: "#6a5bd1",
  detail: "#9c8cf2",
  outline: "#362a7a",
  accent: "#ffb454",
};

export const synapsePlanetIdentity: ObjectIdentity = {
  base: "#4f7fe0",
  detail: "#8fb0ff",
  outline: "#1c2f66",
  accent: "#3f9fc9",
};

export const probeShipIdentity: ObjectIdentity = {
  base: "#4f7fe0",
  detail: "#bfe6ff",
  outline: "#1c2f66",
  accent: "#ffb454",
};

export const beaconIdentity: ObjectIdentity = {
  base: "#4f7fe0",
  detail: "#55d98f",
  outline: "#1c2f66",
  accent: "#ffb454",
};
