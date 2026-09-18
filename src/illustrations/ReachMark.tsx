import { colorBio, colorCircuit, colorHighlight } from "./theme";

export interface ReachMarkProps {
  className?: string;
  /** Closes the gap to a single meeting point, for the footer's "completion" echo. */
  resolved?: boolean;
}

/**
 * The site's persistent small mark (build spec v22): the same reach-and-
 * almost-touch idea as before, rendered as two small flat shapes — an
 * organic blob from the left, a circuit node from the right — with an amber
 * spark in the gap between them.
 */
export function ReachMark({ className, resolved = false }: ReachMarkProps) {
  const gap = resolved ? 0 : 3.2;
  const midX = 16;
  const organicTipX = midX - gap;
  const circuitTipX = midX + gap;

  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d={`M 3 19 Q 4 24 10 23 Q ${organicTipX + 2} 22.5 ${organicTipX} 16 Q ${organicTipX - 1} 19 6 20 Z`}
        fill={colorBio}
      />
      <rect x={circuitTipX - 2.4} y="13.6" width="4.8" height="4.8" rx="1.2" fill={colorCircuit} />
      <rect x="21" y="9.2" width="8" height="3.2" rx="1" fill={colorCircuit} />

      <circle cx={midX} cy="16" r={resolved ? 3.2 : 2.4} fill={colorHighlight} />
      <circle cx={midX} cy="16" r={resolved ? 5.8 : 4.6} fill={colorHighlight} opacity="0.28" />
    </svg>
  );
}
