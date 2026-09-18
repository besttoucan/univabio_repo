import type { CSSProperties, ReactNode } from "react";
import { useScrollReveal } from "../illustrations/useScrollReveal";
import styles from "./Reveal.module.css";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, for revealing a list of siblings in sequence. */
  delay?: number;
}

/** Generic scroll-triggered fade/rise wrapper — one-shot, respects reduced motion (via useScrollReveal). */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>(0.15);
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <div ref={ref} className={`${styles.reveal} ${revealed ? styles.revealed : ""} ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}
