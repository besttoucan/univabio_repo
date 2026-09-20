import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./SectionHead.module.css";

interface SectionHeadProps {
  index: string;
  title: string;
  lede?: ReactNode;
  id?: string;
}

/** Index and oversized title on the left, a short lede across the gutter. */
export function SectionHead({ index, title, lede, id }: SectionHeadProps) {
  return (
    <header className={styles.head}>
      <div>
        <Reveal className={`eyebrow ${styles.index}`} delay={60}>
          {index}
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
