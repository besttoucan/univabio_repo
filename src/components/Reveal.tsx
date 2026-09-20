import type { CSSProperties, ElementType, ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./Reveal.module.css";

type RevealVariant = "rise" | "wipe" | "draw";

interface RevealProps {
  /** Optional so a bare rule or divider can animate on its own. */
  children?: ReactNode;
  className?: string;
  /** Stagger in ms, for revealing siblings in sequence. */
  delay?: number;
  /** Element to render, so the wrapper stays legal inside lists and tables. */
  as?: ElementType;
  id?: string;
  /**
   * rise: lift and fade, the default for blocks of content.
   * wipe: uncovers from the baseline up, for display headings.
   * draw: a rule that grows out of its left edge.
   */
  variant?: RevealVariant;
}

/**
 * Scroll-triggered entrance, fired once.
 *
 * wipe and draw put their effect on an inner element rather than the observed
 * one. Both collapse the box to zero painted area (clip-path, scaleX(0)), and
 * an element with no area never counts as intersecting, so applying them to
 * the observed node would stop it from ever triggering itself.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  id,
  variant = "rise",
}: RevealProps) {
  const { ref, revealed } = useScrollReveal<HTMLElement>(0.12);
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

  if (variant === "rise") {
    return (
      <Tag
        ref={ref}
        id={id}
        className={`${styles.rise} ${revealed ? styles.in : ""} ${className ?? ""}`}
        style={style}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} id={id} className={`${styles.host} ${className ?? ""}`}>
      <span className={`${styles[variant]} ${revealed ? styles.in : ""}`} style={style}>
        {children}
      </span>
    </Tag>
  );
}
