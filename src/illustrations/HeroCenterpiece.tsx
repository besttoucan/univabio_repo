import { colorBio, colorCircuit, colorFusion, colorHighlight, colorInk, colorPaper, colorVascular } from "./theme";
import { useScrollReveal } from "./useScrollReveal";
import styles from "./HeroCenterpiece.module.css";

function Capsule({ cx, cy, w, h, rotate, fill }: { cx: number; cy: number; w: number; h: number; rotate: number; fill: string }) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={h / 2} fill={fill} stroke={colorInk} strokeWidth="1.4" />
      <path d={`M ${-w / 2 + h / 2} 0 Q 0 ${h / 4} ${w / 2 - h / 2} 0`} fill="none" stroke={colorInk} strokeWidth="1" opacity="0.5" />
    </g>
  );
}

function HexOrganelle({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
  }).join(" ");
  return <polygon points={pts} fill={fill} stroke={colorInk} strokeWidth="1.2" />;
}

/**
 * The hero's centerpiece — a cell cross-section where the organelles are drawn
 * half-biological, half-computational: round/capsule organelles read as
 * mitochondria and vesicles, hexagonal ones read as circuit dies, and the
 * nucleus itself is rendered as a small chip. Intentionally the most detailed,
 * most colorful single graphic on the page — it has to sell the theme in one
 * glance, before any copy is read.
 */
export function HeroCenterpiece({ className }: { className?: string }) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className={`${className ?? ""} ${revealed ? styles.revealed : ""}`} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 400 400">
        <defs>
          <radialGradient id="membraneFill" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#eef8f2" />
            <stop offset="100%" stopColor="#d6ece0" />
          </radialGradient>
          <linearGradient id="nucleusFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorFusion} />
            <stop offset="100%" stopColor={colorCircuit} />
          </linearGradient>
          <linearGradient id="mitoFillA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorVascular} />
            <stop offset="100%" stopColor={colorHighlight} />
          </linearGradient>
        </defs>

        <circle className={styles.grow} cx="200" cy="200" r="170" fill="url(#membraneFill)" stroke={colorInk} strokeWidth="2.5" />
        <circle cx="200" cy="200" r="152" fill="none" stroke={colorInk} strokeWidth="1" opacity="0.25" strokeDasharray="2 6" />

        {/* connective signal traces, nucleus to organelles */}
        <g className={styles.traceGroup}>
          <path d="M 175 160 Q 130 150 108 138" fill="none" stroke={colorFusion} strokeWidth="1.4" />
          <path d="M 215 235 Q 235 265 248 285" fill="none" stroke={colorFusion} strokeWidth="1.4" />
          <path d="M 250 180 Q 285 180 305 178" fill="none" stroke={colorFusion} strokeWidth="1.4" />
          <circle cx="305" cy="178" r="3" fill={colorFusion} />
          <rect x="102" y="133" width="6" height="6" fill="none" stroke={colorFusion} strokeWidth="1.2" />
        </g>

        {/* organelles */}
        <g className={styles.traceGroup} style={{ transitionDelay: "0.15s" }}>
          <Capsule cx={108} cy={140} w={54} h={22} rotate={-24} fill="url(#mitoFillA)" />
          <Capsule cx={280} cy={292} w={48} h={20} rotate={32} fill="url(#mitoFillA)" />

          <circle cx="100" cy="262" r="17" fill={colorBio} stroke={colorInk} strokeWidth="1.2" />
          <circle cx="252" cy="108" r="13" fill={colorBio} stroke={colorInk} strokeWidth="1.2" />

          <HexOrganelle cx={150} cy={322} r={16} fill={colorCircuit} />
          <HexOrganelle cx={311} cy={200} r={13} fill={colorCircuit} />
        </g>

        {/* nucleus, rendered as a chip */}
        <g className={styles.grow} style={{ transitionDelay: "120ms" }}>
          <ellipse cx="228" cy="196" rx="72" ry="62" fill="url(#nucleusFill)" stroke={colorInk} strokeWidth="1.8" />
          <g stroke={colorPaper} strokeWidth="1.1" opacity="0.85">
            <line x1="196" y1="170" x2="196" y2="222" />
            <line x1="228" y1="164" x2="228" y2="228" />
            <line x1="260" y1="170" x2="260" y2="222" />
            <line x1="184" y1="184" x2="272" y2="184" />
            <line x1="184" y1="208" x2="272" y2="208" />
          </g>
          <rect x="190" y="178" width="7" height="7" fill={colorPaper} opacity="0.9" />
          <rect x="255" y="202" width="7" height="7" fill={colorPaper} opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}
