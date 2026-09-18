import { colorBio, colorCircuit, colorInk } from "../theme";

export interface DnaCometProps {
  className?: string;
}

function ribbonPath(steps: number, phase: number, thickness: number): string {
  const top: string[] = [];
  const bottom: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = i * 8;
    const wobble = Math.sin(i * 0.9 + phase) * 5;
    top.push(`${x},${20 + wobble - thickness}`);
    bottom.push(`${x},${20 + wobble + thickness}`);
  }
  return `M ${top.join(" L ")} L ${bottom.reverse().join(" L ")} Z`;
}

/**
 * A DNA-Comet (build spec v22, section 2) — a sparse streak with a flat
 * double-helix-twist tail, kept as ambient decoration for optional reuse in
 * quiet sections.
 */
export function DnaComet({ className }: DnaCometProps) {
  const steps = 14;
  return (
    <svg className={className} viewBox="0 0 120 40" aria-hidden="true">
      <path d={ribbonPath(steps, 0, 0.9)} fill={colorBio} opacity="0.75" />
      <path d={ribbonPath(steps, Math.PI, 0.9)} fill={colorCircuit} opacity="0.65" />
      <circle cx="4" cy="20" r="3" fill={colorInk} />
    </svg>
  );
}
