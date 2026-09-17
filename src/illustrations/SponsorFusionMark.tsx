import { BranchLine } from "./BranchLine";

export interface SponsorFusionMarkProps {
  className?: string;
}

/** The DNA-to-circuit transition, rendered small next to the sponsor list — regular angles, fusion-colored nodes at the tips. */
export function SponsorFusionMark({ className }: SponsorFusionMarkProps) {
  return (
    <BranchLine
      className={className}
      originX={0.05}
      originY={0.5}
      initialAngleDeg={0}
      depth={5}
      branchLength={9}
      angleJitterDeg={9}
      branchProbability={0.45}
      strokeWeight={1.1}
      seed={309}
      revealDurationMs={1300}
      color="var(--color-circuit)"
      accentNodeEvery={2}
      accentColor="var(--color-fusion)"
      viewBoxWidth={200}
      viewBoxHeight={60}
    />
  );
}
