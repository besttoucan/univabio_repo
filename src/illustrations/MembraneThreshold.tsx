import { useScrollReveal } from "./useScrollReveal";
import styles from "./MembraneThreshold.module.css";

export interface MembraneThresholdProps {
  opacity?: number;
}

/** The "crossing into a cell" narrative beat — a horizon-like curve that draws across the section once, on scroll-reveal. */
export function MembraneThreshold({ opacity = 0.5 }: MembraneThresholdProps) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>(0.35);

  return (
    <div ref={ref} className={styles.wrap} style={{ opacity }} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 1000 400" preserveAspectRatio="none">
        <path
          className={`${styles.curve} ${styles.bioCurve} ${revealed ? styles.revealed : ""}`}
          d="M -20 70 Q 500 150 1020 55"
          pathLength={1}
        />
        <path
          className={`${styles.curve} ${styles.circuitCurve} ${revealed ? styles.revealed : ""}`}
          d="M -20 95 Q 500 178 1020 82"
          pathLength={1}
        />
      </svg>
    </div>
  );
}
