import type { CSSProperties, ReactNode } from "react";
import { BioSticker } from "../marks/BioSticker";
import { Reveal } from "./Reveal";
import styles from "./SectionHead.module.css";

interface SectionHeadProps {
  index: string;
  /** The headline. An <em> inside it is set plain. */
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
}

/** Oversized title on the left, a short lede across the gutter. */
export function SectionHead({ index, title, lede, id }: SectionHeadProps) {
  return (
    <header className={styles.head}>
      {/* a cartoon bio sticker on the window's corner, a different one per section */}
      <BioSticker
        kind={Number(index) || 0}
        className={styles.sticker}
        style={{ "--tilt": `${Number(index) % 2 ? 9 : -8}deg` } as CSSProperties}
      />
      <div>
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
