import { DEVPOST_URL } from "../content/content";
import { CellCharacter } from "../illustrations/CellCharacter";
import styles from "./Judges.module.css";

export function Judges() {
  return (
    <section className={styles.section} id="judges">
      <CellCharacter className={styles.critterA} color="var(--color-blue)" />
      <CellCharacter className={styles.critterB} color="var(--color-yellow)" flip expression="wink" />
      <div className={`container ${styles.inner}`}>
        <p className={styles.statement}>
          Judged by engineers, clinicians, and founders working at the{" "}
          <span className={styles.highlight}>intersection of AI and health.</span>
        </p>
        <a className="btn btn-quiet" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
          See the full judging panel on Devpost →
        </a>
      </div>
    </section>
  );
}
