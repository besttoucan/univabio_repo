import { colorCircuit, colorHighlight } from "../theme";
import { GlowDefs } from "./GlowDefs";
import { STROKE_WEIGHT, glowFilterId } from "./objectStyles";
import styles from "./ProbeShip.module.css";

export interface ProbeShipProps {
  className?: string;
  /** Rotation in degrees — which way the ship is "traveling." */
  heading?: number;
  /** Renders the trailing ASCII scan-line — build spec v21 section 1: ASCII is reserved for the AI/computational language, and the Probe-Ship's trail is its clearest use. */
  trail?: boolean;
}

const SCAN_CHARS = "01.:-=#10.:";

/**
 * The Probe-Ship (build spec v21, section 3) — UnivaBio's recurring "AI"
 * character: an antibody/nanobot-shaped craft, cyan (the AI/computational
 * color throughout this site), traveling steadily toward the Dim Region
 * across several sections.
 */
export function ProbeShip({ className, heading = 0, trail = true }: ProbeShipProps) {
  const glowId = glowFilterId("probe-ship");
  return (
    <div className={`${styles.wrap} ${className ?? ""}`} style={{ transform: `rotate(${heading}deg)` }} aria-hidden="true">
      {trail && (
        <span className={styles.trail} style={{ transform: `rotate(${-heading}deg)` }}>
          {SCAN_CHARS.split("").map((ch, i) => (
            <span key={i} style={{ opacity: 0.15 + (i / SCAN_CHARS.length) * 0.6 }}>
              {ch}
            </span>
          ))}
        </span>
      )}
      <svg viewBox="0 0 60 30" className={styles.svg}>
        <defs>
          <GlowDefs id={glowId} />
        </defs>
        <path
          d="M4 15 L26 9 L50 15 L26 21 Z"
          fill="#08101f"
          stroke={colorCircuit}
          strokeWidth={STROKE_WEIGHT}
          strokeLinejoin="round"
          filter={`url(#${glowId})`}
        />
        <path d="M26 9 L26 21" stroke={colorCircuit} strokeWidth="1" opacity="0.5" />
        <circle cx="46" cy="15" r="2.6" fill={colorHighlight} filter={`url(#${glowId})`} />
      </svg>
    </div>
  );
}
