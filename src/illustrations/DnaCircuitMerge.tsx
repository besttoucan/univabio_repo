import { useMemo } from "react";
import { GlowDefs } from "./objects/GlowDefs";
import { beaconIdentity } from "./objects/objectPalette";
import { glowFilterId } from "./objects/objectStyles";
import { useScrollReveal } from "./useScrollReveal";
import styles from "./DnaCircuitMerge.module.css";

const WIDTH = 640;
const HEIGHT = 130;
const WINDOW_COUNT = 9;

/**
 * The Beacon (build spec v22, section 1's "Widener-moon" move) — UnivaBio's
 * own DNA-circuit fusion mark, reskinned as a small flat space-station: a
 * solid hull, a row of alternating bio/fusion "DNA-as-circuit" window
 * panels, two solar-panel wings, and one bright beacon light — the one
 * object built specifically from this site's own recurring motif rather
 * than a generic biology shape.
 */
export function DnaCircuitMerge({ className }: { className?: string }) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>(0.25);
  const glowId = glowFilterId("beacon-light");
  const { base, outline } = beaconIdentity;

  const windows = useMemo(
    () =>
      Array.from({ length: WINDOW_COUNT }, (_, i) => ({
        x: 100 + (i / (WINDOW_COUNT - 1)) * (WIDTH - 200),
        index: i,
      })),
    [],
  );

  const hullTop = HEIGHT / 2 - 22;
  const hullBottom = HEIGHT / 2 + 22;

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <svg className={styles.svg} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none">
        <defs>
          <GlowDefs id={glowId} />
        </defs>

        {/* solar-panel wings */}
        <path
          className={`${styles.wing} ${revealed ? styles.revealed : ""}`}
          d={`M 30 ${hullTop + 6} L 90 ${hullTop} L 90 ${hullBottom} L 30 ${hullBottom - 6} Z`}
          fill={outline}
        />
        <path
          className={`${styles.wing} ${revealed ? styles.revealed : ""}`}
          style={{ transitionDelay: "0.08s" }}
          d={`M ${WIDTH - 30} ${hullTop + 6} L ${WIDTH - 90} ${hullTop} L ${WIDTH - 90} ${hullBottom} L ${WIDTH - 30} ${hullBottom - 6} Z`}
          fill={outline}
        />

        {/* hull */}
        <rect
          className={`${styles.hull} ${revealed ? styles.revealed : ""}`}
          x="90"
          y={hullTop}
          width={WIDTH - 180}
          height={hullBottom - hullTop}
          rx="14"
          fill={base}
          stroke={outline}
          strokeWidth="1.8"
        />

        {/* window panels — a row of flat squares alternating the "DNA fused into circuit" colors */}
        {windows.map((w) => (
          <rect
            key={w.index}
            className={`${styles.window} ${revealed ? styles.revealed : ""}`}
            style={{ "--delay": `${0.35 + w.index * 0.06}s` } as React.CSSProperties}
            x={w.x - 8}
            y={HEIGHT / 2 - 8}
            width="16"
            height="16"
            rx="3"
            fill={w.index % 2 === 0 ? "var(--color-bio)" : "var(--color-fusion)"}
            stroke={outline}
            strokeWidth="1"
          />
        ))}

        {/* antenna + beacon light — the one sanctioned glow accent */}
        <line
          className={`${styles.antenna} ${revealed ? styles.revealed : ""}`}
          x1={WIDTH / 2}
          y1={hullTop}
          x2={WIDTH / 2}
          y2={hullTop - 26}
          stroke={outline}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          className={`${styles.beacon} ${revealed ? styles.revealed : ""}`}
          cx={WIDTH / 2}
          cy={hullTop - 26}
          r="6"
          fill="var(--color-highlight)"
          stroke={outline}
          strokeWidth="1.2"
          filter={`url(#${glowId})`}
        />
      </svg>
    </div>
  );
}
