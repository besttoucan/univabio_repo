import { useMemo, type CSSProperties } from "react";
import { defaultForkCurve, generateBranch } from "./branchGenerator";
import { useScrollReveal } from "./useScrollReveal";
import styles from "./BranchLine.module.css";

export interface BranchLineProps {
  originX?: number;
  originY?: number;
  /** Degrees. 0 = growing rightward, -90 = growing upward. */
  initialAngleDeg?: number;
  depth?: number;
  branchLength?: number;
  angleJitterDeg?: number;
  branchProbability?: number | ((depth: number) => number);
  taper?: number;
  strokeWeight?: number;
  seed?: number;
  revealDurationMs?: number;
  /** Draws a small node at this fraction of segments' tips, in the accent color — the "fusion point." */
  accentNodeEvery?: number;
  accentColor?: string;
  color?: string;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  preserveAspectRatio?: string;
  className?: string;
}

export function BranchLine({
  originX = 0.5,
  originY = 0.9,
  initialAngleDeg = -90,
  depth = 6,
  branchLength = 11,
  angleJitterDeg = 26,
  branchProbability = defaultForkCurve,
  taper = 0.75,
  strokeWeight = 1.4,
  seed = 1,
  revealDurationMs = 1400,
  accentNodeEvery,
  accentColor = "var(--color-accent)",
  color = "var(--color-ink)",
  viewBoxWidth = 100,
  viewBoxHeight = 100,
  preserveAspectRatio = "none",
  className,
}: BranchLineProps) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  const segments = useMemo(
    () =>
      generateBranch({
        originX: originX * viewBoxWidth,
        originY: originY * viewBoxHeight,
        initialAngle: (initialAngleDeg * Math.PI) / 180,
        maxDepth: depth,
        branchLength,
        angleJitter: (angleJitterDeg * Math.PI) / 180,
        branchProbability,
        taper,
        strokeWeight,
        seed,
      }),
    [
      originX,
      originY,
      viewBoxWidth,
      viewBoxHeight,
      initialAngleDeg,
      depth,
      branchLength,
      angleJitterDeg,
      branchProbability,
      taper,
      strokeWeight,
      seed,
    ],
  );

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio={preserveAspectRatio}
      >
        {segments.map((seg) => {
          const style = {
            "--len": seg.length,
            "--dur": `${revealDurationMs}ms`,
            "--delay": `${seg.depth * 70}ms`,
            stroke: color,
          } as CSSProperties;

          return (
            <line
              key={seg.id}
              className={`${styles.segment} ${revealed ? styles.revealed : ""}`}
              style={style}
              x1={seg.x1}
              y1={seg.y1}
              x2={seg.x2}
              y2={seg.y2}
              strokeWidth={seg.strokeWidth}
            />
          );
        })}

        {accentNodeEvery &&
          segments
            .filter((_, i) => i % accentNodeEvery === 0)
            .map((seg) => {
              const style = {
                "--delay": `${seg.depth * 70 + 200}ms`,
                fill: accentColor,
              } as CSSProperties;
              return (
                <circle
                  key={`${seg.id}-node`}
                  className={`${styles.node} ${revealed ? styles.revealed : ""}`}
                  style={style}
                  cx={seg.x2}
                  cy={seg.y2}
                  r={Math.max(0.8, seg.strokeWidth)}
                />
              );
            })}
      </svg>
    </div>
  );
}
