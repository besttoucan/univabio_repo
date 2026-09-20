import { stats } from "../content/content";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import styles from "./Stats.module.css";

export function Stats() {
  return (
    <section className={styles.band} aria-label="The event in numbers">
      <div className={`page ${styles.row}`}>
        {stats.map((stat, i) => (
          <div className={styles.cell} key={stat.label}>
            <Counter
              className={styles.value}
              to={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              delay={i * 130}
            />
            <Reveal className={styles.label} delay={i * 130 + 200}>
              {stat.label}
            </Reveal>
            <Reveal as="span" variant="draw" className={styles.rule} delay={i * 130} />
          </div>
        ))}
      </div>
    </section>
  );
}
