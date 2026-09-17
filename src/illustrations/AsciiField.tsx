import { useEffect, useMemo, useState } from "react";
import { asciiCols, asciiGrid, asciiRows, type AsciiCell } from "../assets/scene/referenceAscii";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import styles from "./AsciiField.module.css";

// Smooth/curved characters for organic (root) cells, blockier/technical
// characters for circuit-trace cells — low to high intensity — build spec
// v15 section 2: the character choice itself should "speak" organic vs
// digital, without relying on color alone.
const ORGANIC_RAMP = " .`'\":~+*";
const CIRCUIT_RAMP = " .-_=|#01";

function charFor(cell: AsciiCell): string {
  const [kind, intensity] = cell;
  if (kind === "n") return " ";
  const ramp = kind === "o" ? ORGANIC_RAMP : CIRCUIT_RAMP;
  const idx = Math.min(ramp.length - 1, Math.floor(intensity * ramp.length));
  return ramp[idx] || " ";
}

interface Run {
  kind: AsciiCell[0];
  text: string;
}

function buildRow(cells: readonly AsciiCell[], overrides: Map<number, string>, rowOffset: number): Run[] {
  const runs: Run[] = [];
  cells.forEach((cell, col) => {
    const key = rowOffset + col;
    const ch = overrides.get(key) ?? charFor(cell);
    const kind = cell[0];
    const last = runs[runs.length - 1];
    if (last && last.kind === kind) {
      last.text += ch;
    } else {
      runs.push({ kind, text: ch });
    }
  });
  return runs;
}

export interface AsciiFieldProps {
  className?: string;
}

/**
 * The About section's fusion-seam close-up, rendered as ASCII characters
 * sampled from the reference image (src/assets/scene/referenceAscii.ts) —
 * build spec v15 section 2. A gentle interval swaps a small fraction of
 * characters within their own density band so it reads as alive without
 * changing the overall shape.
 */
export function AsciiField({ className }: AsciiFieldProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [overrides, setOverrides] = useState<Map<number, string>>(() => new Map());

  useEffect(() => {
    if (reducedMotion) return;
    const total = asciiCols * asciiRows;
    const interval = setInterval(() => {
      const next = new Map<number, string>();
      const flickerCount = Math.round(total * 0.02);
      for (let i = 0; i < flickerCount; i++) {
        const row = Math.floor(Math.random() * asciiRows);
        const col = Math.floor(Math.random() * asciiCols);
        const cell = asciiGrid[row][col];
        if (cell[0] === "n") continue;
        const ramp = cell[0] === "o" ? ORGANIC_RAMP : CIRCUIT_RAMP;
        const ch = ramp[Math.floor(Math.random() * ramp.length)];
        next.set(row * asciiCols + col, ch);
      }
      setOverrides(next);
    }, 2200);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const rows = useMemo(
    () => asciiGrid.map((row, r) => buildRow(row, overrides, r * asciiCols)),
    [overrides],
  );

  return (
    <pre className={`${styles.field} ${className ?? ""}`} aria-hidden="true">
      {rows.map((runs, r) => (
        <div key={r} className={styles.row}>
          {runs.map((run, i) => (
            <span key={i} className={run.kind === "c" ? styles.circuit : styles.organic}>
              {run.text}
            </span>
          ))}
        </div>
      ))}
    </pre>
  );
}
