import { colorBio, colorCircuit, colorHighlight } from "./theme";

export interface ReachMarkProps {
  className?: string;
  /** Closes the gap to a single meeting point, for the footer's "completion" echo. */
  resolved?: boolean;
}

/**
 * The site's persistent small mark (build spec v16): the same reach-and-
 * almost-touch idea as the hero's full particle motif, reduced to just the
 * two nearest tips and the gap between them — organic tendril from the
 * left, circuit trace from the right, amber spark in the gap.
 */
export function ReachMark({ className, resolved = false }: ReachMarkProps) {
  const gap = resolved ? 0 : 3.2;
  const midX = 16;
  const organicTipX = midX - gap;
  const circuitTipX = midX + gap;

  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d={`M 3 21 Q 10 22 ${organicTipX - 4} 17.5 T ${organicTipX} 16`}
        fill="none"
        stroke={colorBio}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d={`M 29 11 L 21 11 L 21 16 L ${circuitTipX} 16`}
        fill="none"
        stroke={colorCircuit}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="19.2" y="9.2" width="3.2" height="3.2" fill={colorCircuit} />

      <circle cx={midX} cy="16" r={resolved ? 2.6 : 2.1} fill={colorHighlight} opacity="0.95" />
      <circle cx={midX} cy="16" r={resolved ? 5.5 : 4.6} fill={colorHighlight} opacity="0.3" />
    </svg>
  );
}
