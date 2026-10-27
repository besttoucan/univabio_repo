import { judgingCriteria } from "../content/content";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Judging.module.css";

const total = judgingCriteria.reduce((sum, criterion) => sum + criterion.points, 0);

export function Judging({ index = "03" }: { index?: string }) {
  return (
    <section className="section" id="judging" aria-labelledby="judging-title">
      <div className="page">
        <SectionHead
          index={index}
          id="judging-title"
          label="Judging"
          title={<>The <em>scorecard.</em></>}
          lede="Five criteria, five points each, nothing weighted above the rest."
        />

        <div className={styles.layout}>
          <ol className={styles.list}>
            {judgingCriteria.map((criterion, i) => (
              <Reveal as="li" className={styles.row} key={criterion.title} delay={i * 90}>
                <span className={`mono ${styles.points}`}>{criterion.points}</span>
                <h3 className={styles.title}>{criterion.title}</h3>
                <p className={styles.body}>{criterion.description}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className={styles.total} delay={200}>
            <Counter className={styles.totalValue} to={total} delay={300} />
            <span className={styles.totalLabel}>points possible</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
