import { mitochondriaMoonIdentity } from "./objectPalette";
import { STROKE_WEIGHT } from "./objectStyles";

export interface MitochondriaMoonProps {
  className?: string;
}

/**
 * The Mitochondria-Moon (build spec v22, section 1) — a smaller flat
 * moon near the Cell-Planet, its cristae-fold texture rendered as flat
 * lens shapes ("craters") in its own teal-green identity, distinct from
 * the planet's warm coral-to-gold.
 */
export function MitochondriaMoon({ className }: MitochondriaMoonProps) {
  const { base, detail, outline } = mitochondriaMoonIdentity;
  return (
    <svg className={className} viewBox="0 0 120 80" aria-hidden="true">
      <ellipse cx="60" cy="40" rx="52" ry="32" fill={base} stroke={outline} strokeWidth={STROKE_WEIGHT} />
      {/* cristae folds — flat alternating-tone lens shapes standing in for craters */}
      {[
        { cx: 30, cy: 26, rx: 11, ry: 5 },
        { cx: 58, cy: 20, rx: 9, ry: 4 },
        { cx: 86, cy: 30, rx: 10, ry: 4.5 },
        { cx: 40, cy: 50, rx: 12, ry: 5 },
        { cx: 74, cy: 54, rx: 9, ry: 4 },
      ].map((c, i) => (
        <ellipse
          key={i}
          cx={c.cx}
          cy={c.cy}
          rx={c.rx}
          ry={c.ry}
          fill={detail}
          stroke={outline}
          strokeWidth="1"
          opacity={i % 2 === 0 ? 0.9 : 0.7}
        />
      ))}
    </svg>
  );
}
