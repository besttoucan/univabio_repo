import { colorCircuit, colorHighlight } from "../theme";
import { GlowDefs } from "./GlowDefs";
import { STROKE_WEIGHT, glowFilterId } from "./objectStyles";
import styles from "./AntibodySatellite.module.css";

export interface AntibodySatelliteProps {
  className?: string;
}

/** The Antibody-Satellite (build spec v21, section 3) — a Y-shaped relay structure with a periodic ping ring, near the stats section. */
export function AntibodySatellite({ className }: AntibodySatelliteProps) {
  const glowId = glowFilterId("antibody-satellite");
  return (
    <div className={`${styles.wrap} ${className ?? ""}`} aria-hidden="true">
      <span className={styles.ring} />
      <span className={`${styles.ring} ${styles.ring2}`} />
      <svg viewBox="0 0 60 60" style={{ display: "block", overflow: "visible" }}>
        <defs>
          <GlowDefs id={glowId} />
        </defs>
        <path
          d="M30 8 L30 28 M30 28 L14 46 M30 28 L46 46"
          fill="none"
          stroke={colorCircuit}
          strokeWidth={STROKE_WEIGHT}
          strokeLinecap="round"
          filter={`url(#${glowId})`}
        />
        <circle cx="30" cy="8" r="3" fill={colorHighlight} filter={`url(#${glowId})`} />
        <circle cx="14" cy="46" r="2.4" fill={colorCircuit} />
        <circle cx="46" cy="46" r="2.4" fill={colorCircuit} />
      </svg>
    </div>
  );
}
