import { BranchLine } from "./BranchLine";

export interface PrizeNodeClusterProps {
  className?: string;
  seed: number;
  color: string;
  /** Higher rank = denser cluster, more forking, more accent nodes — 1st place reads as the richest graphic. */
  density: number;
}

/** A small chromatin-style node cluster placed near a prize tier — same generator, color-coded and densified by rank. */
export function PrizeNodeCluster({ className, seed, color, density }: PrizeNodeClusterProps) {
  return (
    <BranchLine
      className={className}
      originX={0.5}
      originY={0.9}
      initialAngleDeg={-90}
      depth={3 + density}
      branchLength={11}
      angleJitterDeg={14}
      branchProbability={0.32 + density * 0.08}
      taper={0.86}
      strokeWeight={2.2}
      seed={seed}
      revealDurationMs={1100}
      color={color}
      accentNodeEvery={Math.max(1, 3 - density)}
      accentColor="var(--color-highlight)"
      viewBoxWidth={80}
      viewBoxHeight={80}
    />
  );
}
