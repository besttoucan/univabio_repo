import { colorHighlight, colorVascular } from "../theme";

export interface BloodstreamBeltProps {
  className?: string;
}

/**
 * The Bloodstream Belt (build spec v22, section 1) — a ring of small flat
 * cell-discs reading as an asteroid belt, alternating two vascular-family
 * tones so it has some internal texture without needing a glow.
 */
export function BloodstreamBelt({ className }: BloodstreamBeltProps) {
  const discs = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const wobble = Math.sin(i * 2.7) * 6;
    return {
      cx: 150 + Math.cos(angle) * (110 + wobble),
      cy: 40 + Math.sin(angle) * (26 + wobble * 0.3),
      r: 2.6 + Math.abs(Math.sin(i * 1.3)) * 2.2,
    };
  });

  return (
    <svg className={className} viewBox="0 0 300 80" aria-hidden="true">
      <ellipse
        cx="150"
        cy="40"
        rx="120"
        ry="30"
        fill="none"
        stroke={colorVascular}
        strokeWidth="0.6"
        strokeDasharray="2 5"
        opacity="0.35"
      />
      {discs.map((d, i) => (
        <ellipse
          key={i}
          cx={d.cx}
          cy={d.cy}
          rx={d.r}
          ry={d.r * 0.65}
          fill={i % 4 === 0 ? colorHighlight : colorVascular}
          stroke="#05072a"
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}
