import { useMemo } from "react";
import { useScrollReveal } from "./useScrollReveal";
import styles from "./DnaCircuitMerge.module.css";

const WIDTH = 600;
const HEIGHT = 160;
const RUNG_COUNT = 9;

function strandY(x: number, phase: number) {
  return HEIGHT / 2 + Math.sin((x / WIDTH) * Math.PI * 2.4 + phase) * 34;
}

/**
 * The descent's payoff, Section 0's mandated recurring fusion motif at full
 * size: a DNA ladder whose rungs double as circuit nodes, with a few
 * non-adjacent rungs cross-linked in the single accent color — the one place
 * on the page where the accent is allowed to carry real visual weight.
 */
export function DnaCircuitMerge({ className }: { className?: string }) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>(0.25);

  const { strandA, strandB, rungs } = useMemo(() => {
    const samples = 40;
    const ptsA: string[] = [];
    const ptsB: string[] = [];
    for (let i = 0; i <= samples; i++) {
      const x = (i / samples) * WIDTH;
      ptsA.push(`${x.toFixed(1)},${strandY(x, 0).toFixed(1)}`);
      ptsB.push(`${x.toFixed(1)},${strandY(x, Math.PI).toFixed(1)}`);
    }
    const rungPositions = Array.from({ length: RUNG_COUNT }, (_, i) => {
      const x = ((i + 0.5) / RUNG_COUNT) * WIDTH;
      return { x, yA: strandY(x, 0), yB: strandY(x, Math.PI), index: i };
    });
    return { strandA: `M ${ptsA.join(" L ")}`, strandB: `M ${ptsB.join(" L ")}`, rungs: rungPositions };
  }, []);

  const graphLinks = [
    [rungs[1], rungs[4]],
    [rungs[3], rungs[7]],
    [rungs[5], rungs[2]],
  ] as const;

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <svg className={styles.svg} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none">
        <path
          className={`${styles.strand} ${styles.strandBio} ${revealed ? styles.revealed : ""}`}
          d={strandA}
          pathLength={1}
        />
        <path
          className={`${styles.strand} ${styles.strandCircuit} ${revealed ? styles.revealed : ""}`}
          d={strandB}
          pathLength={1}
          style={{ transitionDelay: "0.15s" }}
        />

        {rungs.map((r) => (
          <line
            key={`rung-${r.index}`}
            className={`${styles.rung} ${revealed ? styles.revealed : ""}`}
            style={{ "--delay": `${1.1 + r.index * 0.06}s` } as React.CSSProperties}
            x1={r.x}
            y1={r.yA}
            x2={r.x}
            y2={r.yB}
          />
        ))}

        {graphLinks.map(([a, b], i) => (
          <line
            key={`link-${i}`}
            className={`${styles.link} ${revealed ? styles.revealed : ""}`}
            style={{ "--delay": `${1.6 + i * 0.1}s` } as React.CSSProperties}
            x1={a.x}
            y1={(a.yA + a.yB) / 2}
            x2={b.x}
            y2={(b.yA + b.yB) / 2}
          />
        ))}

        {rungs.map((r) => (
          <g key={`nodes-${r.index}`}>
            <circle
              className={`${styles.node} ${revealed ? styles.revealed : ""}`}
              style={{ "--delay": `${1.3 + r.index * 0.06}s` } as React.CSSProperties}
              cx={r.x}
              cy={r.yA}
              r={2.2}
            />
            <circle
              className={`${styles.node} ${revealed ? styles.revealed : ""}`}
              style={{ "--delay": `${1.3 + r.index * 0.06}s` } as React.CSSProperties}
              cx={r.x}
              cy={r.yB}
              r={2.2}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
