import { sponsors } from "../content/content";
import { DnaComet } from "../illustrations/objects/DnaComet";
import { Satellite } from "../illustrations/objects/Satellite";
import { Reveal } from "./Reveal";
import { Scrim } from "./Scrim";
import styles from "./Sponsors.module.css";

export function Sponsors() {
  return (
    <section className={styles.section} id="sponsors">
      <DnaComet className={`${styles.comet} drift-c`} />
      <Satellite variant="ring" color="var(--color-fusion)" size="sm" className={`${styles.mark} drift-b`} />
      <Scrim>
        <Reveal>
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
        </Reveal>
      </Scrim>
    </section>
  );
}
