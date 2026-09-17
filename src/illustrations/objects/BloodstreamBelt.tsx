import { colorVascular } from "../theme";
import { GlowDefs } from "./GlowDefs";
import { glowFilterId } from "./objectStyles";

export interface BloodstreamBeltProps {
  className?: string;
}

/**
 * The Bloodstream Belt (build spec v21, section 3) — a ring of small
 * glowing cell-discs reading as an asteroid belt. Kept in the established
 * "vascular" palette tone (not literal red) per section 6's palette
 * discipline rule.
 */
export function BloodstreamBelt({ className }: BloodstreamBeltProps) {
  const glowId = glowFilterId("bloodstream-belt");
  const discs = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const wobble = Math.sin(i * 2.7) * 6;
    return {
      cx: 150 + Math.cos(angle) * (110 + wobble),
      cy: 40 + Math.sin(angle) * (26 + wobble * 0.3),
      r: 2.4 + Math.abs(Math.sin(i * 1.3)) * 2,
    };
  });

  return (
    <svg className={className} viewBox="0 0 300 80" aria-hidden="true">
      <defs>
        <GlowDefs id={glowId} />
      </defs>
      <ellipse cx="150" cy="40" rx="120" ry="30" fill="none" stroke={colorVascular} strokeWidth="0.5" opacity="0.2" />
      {discs.map((d, i) => (
        <ellipse
          key={i}
          cx={d.cx}
          cy={d.cy}
          rx={d.r}
          ry={d.r * 0.65}
          fill={colorVascular}
          opacity={0.55 + (i % 3) * 0.12}
          filter={`url(#${glowId})`}
        />
      ))}
    </svg>
  );
}
