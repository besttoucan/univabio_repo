import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./HelixBand.module.css";

/**
 * The page's one large drawing: a double helix whose amplitude decays to
 * nothing as it travels right, so the strands merge into a single trace and
 * terminate in a chip. Biology on the left, silicon on the right, one
 * continuous line between them.
 *
 * Geometry is computed rather than hand-drawn so the rungs land exactly on the
 * points of maximum strand separation. On first view the strands draw
 * themselves left to right, the base pairs land one by one behind the
 * drawing head, and the chip arrives last.
 */

const WIDTH = 1400;
const HEIGHT = 240;
const CENTER_Y = 120;
const AMPLITUDE = 74;
const WAVELENGTH = 240;
const MERGE_X = 980;
const CHIP_X = 1170;
const CHIP_SIZE = 84;

const K = (2 * Math.PI) / WAVELENGTH;
/** Seconds the strands take to draw across. Rungs land in step with it. */
const DRAW_SECONDS = 2.2;

function amplitudeAt(x: number): number {
  if (x >= MERGE_X) return 0;
  const t = 1 - x / MERGE_X;
  return AMPLITUDE * t * t * (3 - 2 * t);
}

function strandPath(sign: 1 | -1): string {
  const points: string[] = [];
  for (let x = 0; x <= MERGE_X; x += 4) {
    const y = CENTER_Y + sign * amplitudeAt(x) * Math.sin(K * x);
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `M${points.join(" L")}`;
}

/** Rungs sit at the quarter points of the wave, where the strands are furthest apart. */
function rungs() {
  const out: { x: number; top: number; bottom: number }[] = [];
  for (let x = WAVELENGTH / 4; x < MERGE_X; x += WAVELENGTH / 2) {
    const offset = Math.abs(amplitudeAt(x) * Math.sin(K * x));
    if (offset < 9) continue;
    out.push({ x, top: CENTER_Y - offset, bottom: CENTER_Y + offset });
  }
  return out;
}

const RUNGS = rungs();
const STRAND_A = strandPath(1);
const STRAND_B = strandPath(-1);

export function HelixBand({ className }: { className?: string }) {
  const { ref, revealed } = useScrollReveal<SVGSVGElement>(0.2);

  return (
    <svg
      ref={ref}
      className={`${styles.band} ${revealed ? styles.in : ""} ${className ?? ""}`}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMaxYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      style={{ ["--draw" as string]: `${DRAW_SECONDS}s` }}
      aria-hidden="true"
      focusable="false"
    >
      <path className={styles.strand} d={STRAND_A} pathLength={1} />
      <path className={styles.strand} d={STRAND_B} pathLength={1} />

      {RUNGS.map((rung) => {
        // Each base pair appears as the drawing head passes its x position.
        const delay = `${((rung.x / MERGE_X) * DRAW_SECONDS * 0.86).toFixed(2)}s`;
        return (
          <g className={styles.rung} key={rung.x} style={{ transitionDelay: delay }}>
            <path
              d={`M${rung.x} ${rung.top.toFixed(1)}V${rung.bottom.toFixed(1)}`}
              stroke="var(--accent)"
            />
            <rect x={rung.x - 4} y={rung.top - 4} width={8} height={8} fill="var(--accent)" />
            <rect x={rung.x - 4} y={rung.bottom - 4} width={8} height={8} fill="var(--accent)" />
          </g>
        );
      })}

      <g className={styles.tail}>
        {/* the merge: two strands become one trace */}
        <rect x={MERGE_X - 6} y={CENTER_Y - 6} width={12} height={12} fill="var(--coral)" />
        <path d={`M${MERGE_X} ${CENTER_Y}H${CHIP_X}`} />
      </g>

      <g className={styles.chip}>
        <rect x={CHIP_X} y={CENTER_Y - CHIP_SIZE / 2} width={CHIP_SIZE} height={CHIP_SIZE} />
        <rect
          x={CHIP_X + 28}
          y={CENTER_Y - 14}
          width={28}
          height={28}
          fill="var(--accent)"
          stroke="none"
        />
        {[24, 60].map((dx) => (
          <g key={dx}>
            <path d={`M${CHIP_X + dx} ${CENTER_Y - CHIP_SIZE / 2}V${CENTER_Y - CHIP_SIZE / 2 - 22}`} />
            <path d={`M${CHIP_X + dx} ${CENTER_Y + CHIP_SIZE / 2}V${CENTER_Y + CHIP_SIZE / 2 + 22}`} />
          </g>
        ))}
        <path d={`M${CHIP_X + CHIP_SIZE} ${CENTER_Y}H${CHIP_X + CHIP_SIZE + 30}`} />
      </g>
    </svg>
  );
}
