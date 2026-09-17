import { useMemo } from "react";
import styles from "./TelemetryLine.module.css";

const CHARS = "01:.-#";

function generate(seed: number, length: number): string {
  let s = seed;
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  return Array.from({ length }, () => CHARS[Math.floor(rand() * CHARS.length)]).join("");
}

export interface TelemetryLineProps {
  seed: number;
  className?: string;
}

/**
 * A quiet strip of ASCII-rendered data readout (build spec v21, section 1:
 * ASCII = AI/data) — used beneath stat numbers to reinforce "this is a data
 * point" without a literal icon.
 */
export function TelemetryLine({ seed, className }: TelemetryLineProps) {
  const text = useMemo(() => generate(seed, 14), [seed]);
  return (
    <span className={`${styles.line} ${className ?? ""}`} aria-hidden="true">
      {text}
    </span>
  );
}
