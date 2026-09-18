import type { ReactNode } from "react";
import styles from "./ParchmentPanel.module.css";

export interface ParchmentPanelProps {
  children: ReactNode;
  className?: string;
}

/**
 * A warm off-white content card (build spec v26, section 2) for text-heavy
 * content — About copy, FAQ — legible against the busy illustrated
 * background. Keeps UnivaBio's own serif/body typography (via the site's
 * --font-display/--font-body tokens, untouched here) rather than switching
 * to a different display face, and works by locally overriding the
 * --color-ink* tokens so existing text styles (h1-h4, p, .label, a) read
 * dark-on-cream without each needing its own override.
 */
export function ParchmentPanel({ children, className }: ParchmentPanelProps) {
  return <div className={`${styles.panel} ${className ?? ""}`}>{children}</div>;
}
