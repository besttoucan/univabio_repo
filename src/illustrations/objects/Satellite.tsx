import { GlowDefs } from "./GlowDefs";
import { STROKE_WEIGHT, glowFilterId } from "./objectStyles";
import styles from "./Satellite.module.css";
import type { SatelliteVariant } from "./satellitePalette";

export interface SatelliteProps {
  variant: SatelliteVariant;
  color: string;
  accentColor?: string;
  outlineColor?: string;
  /** Detail density — larger satellites (e.g. 1st place) can afford a touch more. */
  size?: "sm" | "md" | "lg";
  /** Sparing glow accent — reserve for the one or two most prominent satellites sitewide. */
  glow?: boolean;
  className?: string;
}

/**
 * A generic flat-illustrated satellite (build spec v22, section 1: judging
 * criteria and prize tiers as individual satellites). One shared component
 * covers a handful of distinct silhouettes so UnivaBio's content — judging
 * criteria, prize tiers, schedule milestones — can each get its own
 * individually colored, individually shaped object without 14 bespoke files.
 */
export function Satellite({
  variant,
  color,
  accentColor,
  outlineColor = "#05072a",
  size = "md",
  glow = false,
  className,
}: SatelliteProps) {
  const accent = accentColor ?? "#eef1fb";
  const strokeWidth = size === "lg" ? STROKE_WEIGHT * 1.15 : size === "sm" ? STROKE_WEIGHT * 0.85 : STROKE_WEIGHT;
  const glowId = glowFilterId(`satellite-${variant}`);
  const filter = glow ? `url(#${glowId})` : undefined;

  return (
    <svg className={`${styles.svg} ${className ?? ""}`} viewBox="0 0 60 60" aria-hidden="true">
      {glow && (
        <defs>
          <GlowDefs id={glowId} />
        </defs>
      )}
      <g stroke={outlineColor} strokeWidth={strokeWidth} strokeLinejoin="round" filter={filter}>
        {variant === "antibody" && (
          <>
            <path d="M30 10 L30 30 M30 30 L16 14 M30 30 L44 14 M30 30 L30 50" fill="none" strokeLinecap="round" />
            <path d="M30 24 L36 30 L30 36 L24 30 Z" fill={color} />
            <circle cx="16" cy="14" r="6" fill={color} />
            <circle cx="44" cy="14" r="6" fill={color} />
            <circle cx="30" cy="50" r="6" fill={accent} />
          </>
        )}
        {variant === "dish" && (
          <>
            <rect x="26" y="34" width="8" height="16" rx="2" fill={color} />
            <path d="M12 34 A18 12 0 0 1 48 34 Z" fill={color} />
            <path d="M18 30 A12 8 0 0 1 42 30 Z" fill={accent} opacity="0.9" />
            <circle cx="30" cy="16" r="4.5" fill={accent} />
          </>
        )}
        {variant === "ring" && (
          <>
            <circle cx="30" cy="30" r="22" fill={color} />
            <circle cx="30" cy="30" r="11" fill={outlineColor} stroke="none" />
            <circle cx="30" cy="30" r="6" fill={accent} />
            <circle cx="10" cy="30" r="3" fill={accent} stroke="none" />
            <circle cx="50" cy="30" r="3" fill={accent} stroke="none" />
          </>
        )}
        {variant === "beacon" && (
          <>
            <path d="M30 6 L48 30 L30 54 L12 30 Z" fill={color} />
            <path d="M30 18 L38 30 L30 42 L22 30 Z" fill={accent} />
            <path d="M30 6 L30 -2" strokeLinecap="round" />
            <circle cx="30" cy="-2" r="3" fill={accent} stroke="none" />
          </>
        )}
        {variant === "burst" && (
          <>
            <path
              d="M30 4 L35 22 L52 16 L39 29 L54 38 L36 36 L38 54 L30 40 L22 54 L24 36 L6 38 L21 29 L8 16 L25 22 Z"
              fill={color}
              strokeLinejoin="round"
            />
            <circle cx="30" cy="30" r="7" fill={accent} />
          </>
        )}
        {variant === "crystal" && (
          <>
            <path d="M30 6 L48 22 L40 52 L20 52 L12 22 Z" fill={color} />
            <path d="M30 6 L48 22 L30 30 Z" fill={accent} opacity="0.85" />
            <path d="M30 6 L12 22 L30 30 Z" fill={accent} opacity="0.55" />
            <path d="M20 52 L30 30 L40 52 Z" fill={accent} opacity="0.4" />
          </>
        )}
        {variant === "pod" && (
          <>
            <path d="M18 20 A12 12 0 0 1 42 20 L42 40 A12 12 0 0 1 18 40 Z" fill={color} />
            <circle cx="30" cy="26" r="7" fill={accent} />
            <rect x="26" y="42" width="8" height="12" rx="2" fill={color} />
            <path d="M14 26 L6 22 M14 34 L6 38 M46 26 L54 22 M46 34 L54 38" strokeLinecap="round" fill="none" />
          </>
        )}
      </g>
    </svg>
  );
}
