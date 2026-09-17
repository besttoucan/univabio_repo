import { BranchLine } from "./BranchLine";

export interface ScheduleVesselProps {
  className?: string;
}

/** A thin branching line that grows left-to-right, echoing the bloodstream motif as a colored timeline. */
export function ScheduleVessel({ className }: ScheduleVesselProps) {
  return (
    <BranchLine
      className={className}
      originX={0.02}
      originY={0.6}
      initialAngleDeg={4}
      depth={4}
      branchLength={13}
      angleJitterDeg={16}
      branchProbability={0.3}
      strokeWeight={1.2}
      seed={31}
      revealDurationMs={1200}
      color="var(--color-vascular)"
      accentNodeEvery={2}
      accentColor="var(--color-fusion)"
      viewBoxWidth={220}
      viewBoxHeight={60}
    />
  );
}
