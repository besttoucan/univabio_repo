import { DEVPOST_URL } from "../content/content";
import { BranchLine } from "../illustrations/BranchLine";
import styles from "./Judges.module.css";

export function Judges() {
  return (
    <section className={styles.section} id="judges">
      <BranchLine
        className={styles.field}
        originX={0.04}
        originY={0.52}
        initialAngleDeg={0}
        depth={5}
        branchLength={8.5}
        angleJitterDeg={30}
        branchProbability={0.55}
        strokeWeight={1.1}
        seed={17}
        color="var(--color-bio)"
        accentNodeEvery={4}
        accentColor="var(--color-highlight)"
      />
      <div className="container">
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
