import { probeShipIdentity } from "./objectPalette";
import { STROKE_WEIGHT } from "./objectStyles";
import styles from "./ProbeShip.module.css";

export interface ProbeShipProps {
  className?: string;
  /** Rotation in degrees — which way the ship is "traveling." */
  heading?: number;
  /** Renders a trail of small flat exhaust chevrons behind the hull. */
  trail?: boolean;
}

/**
 * The Probe-Ship (build spec v22, section 1) — UnivaBio's recurring mascot:
 * a clean, flat-illustrated probe with a solid-colored hull, a canopy panel,
 * and an amber nose light, reused identically across every section it
 * appears in so it reads as one consistent character.
 */
export function ProbeShip({ className, heading = 0, trail = true }: ProbeShipProps) {
  const { base, detail, outline, accent } = probeShipIdentity;
  return (
    <div className={`${styles.wrap} ${className ?? ""}`} style={{ transform: `rotate(${heading}deg)` }} aria-hidden="true">
      <svg viewBox="0 0 60 30" className={styles.svg}>
        {trail && (
          <g opacity="0.7">
            <path d="M-2 15 L-9 12 L-9 18 Z" fill={detail} opacity="0.35" />
            <path d="M-9 15 L-15 13 L-15 17 Z" fill={detail} opacity="0.22" />
          </g>
        )}
        <path
          d="M4 15 L26 9 L50 15 L26 21 Z"
          fill={base}
          stroke={outline}
          strokeWidth={STROKE_WEIGHT}
          strokeLinejoin="round"
        />
        <path d="M20 13 L32 13 L29 17 L23 17 Z" fill={detail} stroke={outline} strokeWidth="0.8" />
        <circle cx="46" cy="15" r="2.6" fill={accent} stroke={outline} strokeWidth="0.6" />
      </svg>
    </div>
  );
}
