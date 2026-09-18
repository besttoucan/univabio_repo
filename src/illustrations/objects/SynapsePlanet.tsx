import { synapsePlanetIdentity } from "./objectPalette";
import { STROKE_WEIGHT } from "./objectStyles";

export interface SynapsePlanetProps {
  className?: string;
}

/**
 * The Synapse-Planet (build spec v22/v25, section 1) — a third, clearly
 * distinct planet identity (blue/cyan, against the hero's warm coral and
 * the About section's violet), textured with branching neural/synapse
 * lines instead of organelle bands, for the Judging/Prizes zone.
 */
export function SynapsePlanet({ className }: SynapsePlanetProps) {
  const { base, detail, outline, accent } = synapsePlanetIdentity;
  return (
    <svg className={className} viewBox="0 0 260 260" aria-hidden="true">
      <defs>
        <clipPath id="synapsePlanetClip">
          <circle cx="130" cy="130" r="112" />
        </clipPath>
      </defs>

      <circle cx="130" cy="130" r="112" fill={base} stroke={outline} strokeWidth={STROKE_WEIGHT * 1.5} />

      <g clipPath="url(#synapsePlanetClip)">
        {/* branching synapse lines, drawn as flat thin ribbons, not stroke-only paths */}
        <path
          d="M20 90 L80 100 L120 70 L175 85 M80 100 L95 140 M175 85 L210 60 M175 85 L220 110"
          fill="none"
          stroke={detail}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        {[
          [20, 90],
          [80, 100],
          [120, 70],
          [175, 85],
          [95, 140],
          [210, 60],
          [220, 110],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 7 : 5} fill={accent} stroke={outline} strokeWidth="1" />
        ))}
      </g>

      <circle cx="130" cy="130" r="112" fill="none" stroke={outline} strokeWidth={STROKE_WEIGHT} opacity="0.4" />

      {/* core node — the planet's brightest feature */}
      <circle cx="150" cy="175" r="17" fill={accent} stroke={outline} strokeWidth="1.4" />
    </svg>
  );
}
