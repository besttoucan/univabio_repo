import { cellPlanetIdentity } from "./objectPalette";
import { STROKE_WEIGHT } from "./objectStyles";

export interface CellPlanetProps {
  className?: string;
}

/**
 * The Cell-Planet (build spec v22/v24, section 1) — the hero's main "world"
 * object: a flat coral-to-gold sphere with two sweeping organelle bands
 * (a HackHarvard-style banded-planet composition) and one tight cluster of
 * vesicle "craters," rather than shapes scattered loosely across the
 * surface. The one deliberately warm object in an otherwise cool-toned cast.
 */
export function CellPlanet({ className }: CellPlanetProps) {
  const { base, detail, outline, accent } = cellPlanetIdentity;
  return (
    <svg className={className} viewBox="0 0 300 300" aria-hidden="true">
      <defs>
        <clipPath id="cellPlanetClip">
          <circle cx="150" cy="150" r="128" />
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="128" fill={base} stroke={outline} strokeWidth={STROKE_WEIGHT * 1.5} />

      <g clipPath="url(#cellPlanetClip)">
        {/* two sweeping organelle bands, Saturn-stripe composition */}
        <path
          d="M18 205 Q150 245 282 190 L282 235 Q150 288 18 250 Z"
          fill={detail}
          stroke={outline}
          strokeWidth="1.4"
        />
        <path
          d="M10 95 Q150 60 290 108 L290 88 Q150 42 10 76 Z"
          fill={detail}
          stroke={outline}
          strokeWidth="1.4"
          opacity="0.9"
        />

        {/* one tight cluster of vesicle craters, not scattered */}
        <circle cx="196" cy="150" r="13" fill={detail} stroke={outline} strokeWidth="1.1" />
        <circle cx="218" cy="168" r="8" fill={detail} stroke={outline} strokeWidth="1" opacity="0.9" />
        <circle cx="206" cy="182" r="6" fill={detail} stroke={outline} strokeWidth="1" opacity="0.85" />
        <circle cx="176" cy="170" r="5" fill={detail} stroke={outline} strokeWidth="1" opacity="0.85" />
      </g>

      <circle cx="150" cy="150" r="128" fill="none" stroke={outline} strokeWidth={STROKE_WEIGHT} opacity="0.4" />

      {/* nucleus — the planet's single brightest, warmest feature */}
      <circle cx="118" cy="128" r="19" fill={accent} stroke={outline} strokeWidth="1.4" />
    </svg>
  );
}
