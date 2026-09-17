import { colorBio, colorCircuit, colorHighlight, colorInk } from "../theme";
import { GlowDefs } from "./GlowDefs";
import { STROKE_WEIGHT, glowFilterId } from "./objectStyles";

export interface CellPlanetProps {
  className?: string;
}

/**
 * The Cell-Planet (build spec v21, section 3) — the hero's main "world"
 * object: a large organelle-textured sphere with a glowing nucleus as its
 * single brightest feature (the one warm-amber focal point section 6
 * explicitly allows alongside the constellation gap-star).
 */
export function CellPlanet({ className }: CellPlanetProps) {
  const glowId = glowFilterId("cell-planet");
  return (
    <svg className={className} viewBox="0 0 300 300" aria-hidden="true">
      <defs>
        <GlowDefs id={glowId} />
        <radialGradient id="cellPlanetFill" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#123528" />
          <stop offset="60%" stopColor="#081b15" />
          <stop offset="100%" stopColor="#04100c" />
        </radialGradient>
        <clipPath id="cellPlanetClip">
          <circle cx="150" cy="150" r="128" />
        </clipPath>
      </defs>

      <circle
        cx="150"
        cy="150"
        r="128"
        fill="url(#cellPlanetFill)"
        stroke={colorBio}
        strokeWidth={STROKE_WEIGHT}
        filter={`url(#${glowId})`}
        opacity="0.9"
      />

      <g clipPath="url(#cellPlanetClip)" opacity="0.55">
        <ellipse cx="95" cy="200" rx="22" ry="12" fill="none" stroke={colorBio} strokeWidth="1.2" />
        <ellipse cx="205" cy="90" rx="18" ry="10" fill="none" stroke={colorCircuit} strokeWidth="1.2" />
        <circle cx="70" cy="110" r="10" fill="none" stroke={colorCircuit} strokeWidth="1.1" />
        <circle cx="220" cy="205" r="8" fill="none" stroke={colorBio} strokeWidth="1.1" />
        <path d="M60 160 Q90 150 110 165" fill="none" stroke={colorBio} strokeWidth="1" opacity="0.6" />
        <path d="M190 60 Q210 75 230 65" fill="none" stroke={colorCircuit} strokeWidth="1" opacity="0.6" />
      </g>

      <circle cx="150" cy="150" r="112" fill="none" stroke={colorInk} strokeWidth="0.6" opacity="0.18" strokeDasharray="2 7" />

      {/* nucleus — the brightest feature */}
      <circle cx="128" cy="128" r="30" fill={colorHighlight} opacity="0.16" filter={`url(#${glowId})`} />
      <circle cx="128" cy="128" r="16" fill={colorHighlight} opacity="0.85" filter={`url(#${glowId})`} />
    </svg>
  );
}
