import { colorBio, colorInk } from "../theme";
import { GlowDefs } from "./GlowDefs";
import { STROKE_WEIGHT, glowFilterId } from "./objectStyles";

export interface MitochondriaMoonProps {
  className?: string;
}

/** The Mitochondria-Moon (build spec v21, section 3) — a smaller orbiting body near the Cell-Planet, cristae-textured surface. */
export function MitochondriaMoon({ className }: MitochondriaMoonProps) {
  const glowId = glowFilterId("mito-moon");
  return (
    <svg className={className} viewBox="0 0 120 80" aria-hidden="true">
      <defs>
        <GlowDefs id={glowId} />
        <radialGradient id="mitoMoonFill" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#10281f" />
          <stop offset="100%" stopColor="#040f0b" />
        </radialGradient>
      </defs>
      <ellipse
        cx="60"
        cy="40"
        rx="52"
        ry="32"
        fill="url(#mitoMoonFill)"
        stroke={colorBio}
        strokeWidth={STROKE_WEIGHT}
        filter={`url(#${glowId})`}
        opacity="0.85"
      />
      {/* cristae folds */}
      {[-18, -8, 2, 12, 22].map((dy) => (
        <path
          key={dy}
          d={`M 20 ${40 + dy} Q 60 ${32 + dy} 100 ${40 + dy}`}
          fill="none"
          stroke={colorInk}
          strokeWidth="1"
          opacity="0.3"
        />
      ))}
    </svg>
  );
}
