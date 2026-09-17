import { prizes } from "../content/content";
import { PrizeNodeCluster } from "../illustrations/PrizeNodeCluster";
import styles from "./Prizes.module.css";

const tierColors = ["var(--color-fusion)", "var(--color-circuit)", "var(--color-bio)"];
const tierDensity = [3, 2, 1];

export function Prizes() {
  return (
    <section className={styles.section} id="prizes">
      <div className="container">
        <h2 className={styles.heading}>Prizes</h2>
        <p className={styles.intro}>
          <strong>All prizes are non-cash</strong> — sponsor product credits, subscriptions, and
          licenses, matching Devpost's official prize disclosures.
        </p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Included</th>
            </tr>
          </thead>
          <tbody>
            {prizes.map((prize, i) => (
              <tr key={prize.rank}>
                <td>
                  {i < 3 && (
                    <PrizeNodeCluster
                      className={styles.node}
                      seed={400 + i}
                      color={tierColors[i]}
                      density={tierDensity[i]}
                    />
                  )}
                  <span className={styles.rank}>{prize.rank}</span>
                  <span className={styles.winners}>{prize.winners}</span>
                </td>
                <td>
                  <ul className={styles.items}>
                    {prize.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
