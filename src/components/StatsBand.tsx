import { DEVPOST_URL } from "../content/content";
import styles from "./StatsBand.module.css";

const stats = [
  { value: "$40,000", label: "In prizes, non-cash", color: "var(--color-coral)" },
  { value: "555+", label: "Hackers registered", asOf: "as of Sep 17, 2026", color: "var(--color-blue)" },
  { value: "100%", label: "Online & global", color: "var(--color-mint)" },
  { value: "13+", label: "Minimum age to join", color: "var(--color-violet)" },
];

export function StatsBand() {
  return (
    <section className={styles.band} aria-label="Event stats">
      <div className={`container ${styles.row}`}>
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.label} style={{ borderTopColor: stat.color }}>
            <span className={styles.value} style={{ color: stat.color }}>
              {stat.value}
            </span>
            <span className={`label ${styles.label}`}>
              {stat.label}
              {stat.asOf && <span className={styles.asOf}>{stat.asOf}</span>}
            </span>
          </div>
        ))}
      </div>
      <p className={`container ${styles.footnote}`}>
        Participant count is a point-in-time figure. See the{" "}
        <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
          live Devpost page
        </a>{" "}
        for the current total.
      </p>
    </section>
  );
}
