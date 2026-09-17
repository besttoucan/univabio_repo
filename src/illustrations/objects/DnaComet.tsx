import { colorBio, colorCircuit, colorInk } from "../theme";
import { GlowDefs } from "./GlowDefs";
import { glowFilterId } from "./objectStyles";

export interface DnaCometProps {
  className?: string;
}

/** A DNA-Comet (build spec v21, section 3) — a sparse streak with a double-helix-twist tail, scattered through quiet sections. */
export function DnaComet({ className }: DnaCometProps) {
  const glowId = glowFilterId("dna-comet");
  const steps = 14;
  const strandA: string[] = [];
  const strandB: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = i * 8;
    const wobble = Math.sin(i * 0.9) * 5;
    strandA.push(`${x},${20 + wobble}`);
    strandB.push(`${x},${20 - wobble}`);
  }

  return (
    <svg className={className} viewBox="0 0 120 40" aria-hidden="true">
      <defs>
        <GlowDefs id={glowId} />
      </defs>
      <circle cx="4" cy="20" r="2.6" fill={colorInk} filter={`url(#${glowId})`} />
      <polyline points={strandA.join(" ")} fill="none" stroke={colorBio} strokeWidth="1" opacity="0.6" />
      <polyline points={strandB.join(" ")} fill="none" stroke={colorCircuit} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
