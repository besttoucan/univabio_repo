import type { ReactNode } from "react";
import styles from "./Scrim.module.css";

export interface ScrimProps {
  children: ReactNode;
  className?: string;
}

/**
 * The one reusable "text stays legible over the scene" treatment — a soft
 * dark gradient behind content, no blur/border/card look (build spec v15:
 * particles/ASCII are quiet enough that a glass panel is no longer needed,
 * just a scrim for the sections that still want extra contrast). Used for
 * every section's content block.
 */
export function Scrim({ children, className }: ScrimProps) {
  return <div className={`container ${styles.scrim} ${className ?? ""}`}>{children}</div>;
}
