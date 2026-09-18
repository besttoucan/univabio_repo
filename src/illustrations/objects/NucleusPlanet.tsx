import { nucleusPlanetIdentity } from "./objectPalette";
import { STROKE_WEIGHT } from "./objectStyles";

export interface NucleusPlanetProps {
  className?: string;
}

/**
 * The Nucleus-Planet (build spec v22/v24, section 1) — the About/theme
 * section's world object: a flat violet sphere with one sweeping chromatin
 * band and a tight cluster of nuclear-pore dots around a bright nucleolus,
 * distinct from the hero's warm Cell-Planet.
 */
export function NucleusPlanet({ className }: NucleusPlanetProps) {
  const { base, detail, outline, accent } = nucleusPlanetIdentity;
  return (
    <svg className={className} viewBox="0 0 260 260" aria-hidden="true">
      <defs>
        <clipPath id="nucleusPlanetClip">
          <circle cx="130" cy="130" r="112" />
        </clipPath>
      </defs>

      <circle cx="130" cy="130" r="112" fill={base} stroke={outline} strokeWidth={STROKE_WEIGHT * 1.5} />

      <g clipPath="url(#nucleusPlanetClip)">
        {/* one sweeping chromatin band */}
        <path
          d="M10 180 Q130 214 250 172 L250 208 Q130 250 10 216 Z"
          fill={detail}
          stroke={outline}
          strokeWidth="1.2"
          opacity="0.9"
        />

        {/* one tight cluster of nuclear-pore dots */}
        <circle cx="185" cy="90" r="11" fill={detail} stroke={outline} strokeWidth="1" />
        <circle cx="203" cy="106" r="7" fill={detail} stroke={outline} strokeWidth="0.9" opacity="0.9" />
        <circle cx="196" cy="120" r="5" fill={detail} stroke={outline} strokeWidth="0.9" opacity="0.85" />
        <circle cx="168" cy="102" r="5" fill={detail} stroke={outline} strokeWidth="0.9" opacity="0.85" />
      </g>

      <circle cx="130" cy="130" r="112" fill="none" stroke={outline} strokeWidth={STROKE_WEIGHT} opacity="0.4" />

      {/* nucleolus — the single brightest feature */}
      <circle cx="108" cy="118" r="20" fill={accent} stroke={outline} strokeWidth="1.4" />
    </svg>
  );
}
