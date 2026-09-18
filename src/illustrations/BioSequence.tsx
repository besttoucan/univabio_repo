import { useMemo } from "react";
import styles from "./BioSequence.module.css";

const BASES = ["A", "T", "C", "G"] as const;
const BASE_COLOR: Record<(typeof BASES)[number], string> = {
  A: "var(--color-bio)",
  T: "var(--color-vascular)",
  C: "var(--color-circuit)",
  G: "var(--color-fusion)",
};

function generate(seed: number, length: number): string {
  let s = seed;
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  return Array.from({ length }, () => BASES[Math.floor(rand() * BASES.length)]).join("");
}

export interface BioSequenceProps {
  seed: number;
  length?: number;
  className?: string;
}

/**
 * A DNA base-pair readout, rendered as text (build spec v27 follow-up:
 * "consider ASCII... that gives a BIOLOGY vibe") — the site's earlier v21
 * ASCII system was 0/1 computational glyphs and was retired with the rest
 * of that visual language; this is a distinct, narrower reintroduction with
 * its own fixed meaning (A/T/C/G base-pair texture = biology, never used
 * for anything else), kept to quiet/sparse sections as ambient texture.
 */
export function BioSequence({ seed, length = 48, className }: BioSequenceProps) {
  const text = useMemo(() => generate(seed, length), [seed, length]);
  return (
    <div className={`${styles.strip} ${className ?? ""}`} aria-hidden="true">
      {text.split("").map((base, i) => (
        <span key={i} className={styles.base} style={{ color: BASE_COLOR[base as (typeof BASES)[number]] }}>
          {base}
        </span>
      ))}
    </div>
  );
}
