import { requirements } from "../content/content";
import styles from "./Requirements.module.css";

const reqColors = ["var(--color-coral)", "var(--color-blue)", "var(--color-mint)", "var(--color-violet)"];

export function Requirements() {
  return (
    <section className={styles.section} id="requirements">
      <div className="container">
        <h2 className={styles.heading}>What you'll submit</h2>

        <div className={styles.grid}>
          {requirements.map((req, i) => (
            <div className={styles.card} key={req.index}>
              <span className={styles.badge} style={{ background: reqColors[i] }}>
                {req.index}
              </span>
              <span className={styles.title}>{req.title}</span>
              <p className={styles.desc}>{req.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
