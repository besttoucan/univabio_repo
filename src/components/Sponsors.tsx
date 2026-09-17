import { sponsors } from "../content/content";
import { Scrim } from "./Scrim";
import styles from "./Sponsors.module.css";

export function Sponsors() {
  return (
    <section className={styles.section} id="sponsors">
      <Scrim>
        <div className={styles.headingRow}>
          <div>
            <h2 className={styles.heading}>Sponsors</h2>
            <p className={styles.intro}>The prizes above are made possible by these partners.</p>
          </div>
        </div>

        <div className={styles.row}>
          {sponsors.map((sponsor) =>
            sponsor.href ? (
              <a
                key={sponsor.name}
                className={styles.item}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sponsor.name}
              </a>
            ) : (
              <span key={sponsor.name} className={styles.item}>
                {sponsor.name}
              </span>
            ),
          )}
        </div>
      </Scrim>
    </section>
  );
}
