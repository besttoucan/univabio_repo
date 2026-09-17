import { prizes } from "../content/content";
import { IconCapsule, IconRibbon } from "../illustrations/icons";
import styles from "./Prizes.module.css";

const tierColors = [
  "var(--color-yellow)",
  "var(--color-blue)",
  "var(--color-coral)",
  "var(--color-mint)",
  "var(--color-violet)",
];

export function Prizes() {
  return (
    <section className={styles.section} id="prizes">
      <div className="container">
        <h2 className={styles.heading}>Prizes</h2>
        <p className={styles.intro}>
          <strong>All prizes are non-cash</strong> — sponsor product credits, subscriptions, and
          licenses, matching Devpost's official prize disclosures.
        </p>

        <div className={styles.grid}>
          {prizes.map((prize, i) => {
            const color = tierColors[i % tierColors.length];
            const Icon = i < 3 ? IconRibbon : IconCapsule;
            return (
              <div className={`${styles.card} ${i === 0 ? styles.featured : ""}`} key={prize.rank}>
                <span className={styles.iconWrap} style={{ background: color }}>
                  <Icon />
                </span>
                <span className={styles.rank}>{prize.rank}</span>
                <span className={styles.winners}>{prize.winners}</span>
                <ul className={styles.items}>
                  {prize.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
