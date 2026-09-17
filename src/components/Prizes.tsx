import { prizes } from "../content/content";
import { Scrim } from "./Scrim";
import styles from "./Prizes.module.css";

export function Prizes() {
  return (
    <section className={styles.section} id="prizes">
      <Scrim>
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
            {prizes.map((prize) => (
              <tr key={prize.rank}>
                <td>
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
      </Scrim>
    </section>
  );
}
