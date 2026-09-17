import { colorBio, colorCircuit, colorFusion } from "./theme";

const colorRung = "#6b6858";

export interface FusionMarkProps {
  className?: string;
  /** compact = 2 rungs, bold, legible at favicon size. full = more rungs + a visible circuit-trace elbow. */
  variant?: "compact" | "full";
}

const W = 32;
const H = 32;
const AMPLITUDE = 9;
const TURNS = 1.3;

function strandX(y: number, phase: number) {
  return W / 2 + Math.sin((y / H) * Math.PI * 2 * TURNS + phase) * AMPLITUDE;
}

function strandPath(phase: number) {
  const steps = 24;
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const y = (i / steps) * H;
    pts.push(`${strandX(y, phase).toFixed(2)},${y.toFixed(2)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/**
 * The site's recurring "biology + computation" mark: one strand biological
 * (teal), one strand computational (blue), with rungs drawn as small chip-style
 * nodes in the fusion violet instead of plain ladder bars — legible as both a
 * molecule and a circuit in well under two seconds, even at favicon size.
 */
export function FusionMark({ className, variant = "full" }: FusionMarkProps) {
  const rungYs = variant === "compact" ? [11, 21] : [6, 13, 19, 26];
  const nodeAccentIndex = variant === "compact" ? 1 : 2;

  return (
    <svg className={className} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      <path d={strandPath(0)} fill="none" stroke={colorBio} strokeWidth="1.7" strokeLinecap="round" />
      <path d={strandPath(Math.PI)} fill="none" stroke={colorCircuit} strokeWidth="1.7" strokeLinecap="round" />

      {rungYs.map((y, i) => {
        const x1 = strandX(y, 0);
        const x2 = strandX(y, Math.PI);
        const isNode = i === nodeAccentIndex;

        if (!isNode) {
          return <line key={y} x1={x1} y1={y} x2={x2} y2={y} stroke={colorRung} strokeWidth="1.2" />;
        }

        const midX = (x1 + x2) / 2;
        const elbowX = midX + (midX > W / 2 ? 5 : -5);
        return (
          <g key={y}>
            <line x1={x1} y1={y} x2={x2} y2={y} stroke={colorFusion} strokeWidth="1.3" />
            <path
              d={`M ${midX} ${y} L ${elbowX} ${y} L ${elbowX} ${y - 4}`}
              fill="none"
              stroke={colorFusion}
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <rect
              x={elbowX - 1.6}
              y={y - 4 - 1.6}
              width="3.2"
              height="3.2"
              stroke={colorFusion}
              strokeWidth="1"
              fill="none"
            />
          </g>
        );
      })}
    </svg>
  );
}
