import { DEVPOST_URL } from "../content/content";
import { Scrim } from "./Scrim";
import styles from "./Judges.module.css";

export function Judges() {
  return (
    <section className={styles.section} id="judges">
      <Scrim className={styles.panel}>
        <p className={styles.statement}>
          Judged by engineers, clinicians, and founders working at the{" "}
          <span className={styles.highlight}>intersection of AI and health.</span>
        </p>
        <a className="btn btn-quiet" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
          See the full judging panel on Devpost →
        </a>
      </Scrim>
    </section>
  );
}
