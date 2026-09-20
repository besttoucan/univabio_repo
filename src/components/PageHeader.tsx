import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  /** A fact worth carrying at the top of the page, not a label for the title. */
  kicker: string;
  title: string;
  lede: ReactNode;
}

export function PageHeader({ kicker, title, lede }: PageHeaderProps) {
  return (
    <header className={`page ${styles.header}`}>
      <Reveal className={`eyebrow ${styles.kicker}`}>{kicker}</Reveal>
      <Reveal variant="wipe" as="h1" className={styles.title} delay={70}>
        {title}
      </Reveal>
      <Reveal className={styles.ledeWrap} delay={160}>
        <p className={styles.lede}>{lede}</p>
      </Reveal>
    </header>
  );
}
