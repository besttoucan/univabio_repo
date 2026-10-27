import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./SectionHead.module.css";

interface SectionHeadProps {
  index: string;
  /** Uppercase words after the number: "01 — What is UnivaBio". */
  label: string;
  /** Wrap one phrase in <em>: it is set italic and lit. */
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
}

/** Numbered eyebrow and oversized title on the left, a short lede across the gutter. */
export function SectionHead({ index, label, title, lede, id }: SectionHeadProps) {
  return (
    <header className={styles.head}>
      <div>
        <Reveal className={`eyebrow ${styles.index}`} delay={60}>
          <span className="mono">{index}</span> — {label}
        </Reveal>
        <Reveal variant="wipe" as="h2" id={id} className={styles.title}>
          {title}
        </Reveal>
      </div>

      {lede ? (
        <Reveal className={styles.ledeWrap} delay={140}>
          <p className="lede">{lede}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
