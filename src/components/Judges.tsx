import { DEVPOST_URL } from "../content/content";
import { MitochondriaMoon } from "../illustrations/objects/MitochondriaMoon";
import { Satellite } from "../illustrations/objects/Satellite";
import { Reveal } from "./Reveal";
import { Scrim } from "./Scrim";
import styles from "./Judges.module.css";

export function Judges() {
  return (
    <section className={styles.section} id="judges">
      <MitochondriaMoon className={`${styles.moon} drift-b`} />
      <Satellite variant="dish" color="var(--color-vascular)" size="md" className={`${styles.satelliteLeft} drift-c`} />
      <Satellite variant="burst" color="var(--color-highlight)" size="sm" className={`${styles.satelliteRight} drift-a`} />
      <Scrim className={styles.panel}>
        <Reveal>
          <p className={styles.statement}>
            Judged by engineers, clinicians, and founders working at the{" "}
            <span className={styles.highlight}>intersection of AI and health.</span>
          </p>
          <a className="btn btn-quiet" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
            See the full judging panel on Devpost →
          </a>
        </Reveal>
      </Scrim>
    </section>
  );
}
