import { judgingCriteria } from "../content/content";
import { Satellite } from "../illustrations/objects/Satellite";
import { satelliteFor } from "../illustrations/objects/satellitePalette";
import { ProbeShip } from "../illustrations/objects/ProbeShip";
import { SynapsePlanet } from "../illustrations/objects/SynapsePlanet";
import { Reveal } from "./Reveal";
import { Scrim } from "./Scrim";
import styles from "./Judging.module.css";

export function Judging() {
  return (
    <section className={styles.section} id="judging">
      <SynapsePlanet className={`${styles.synapsePlanet} drift-b`} />
      <ProbeShip className={`${styles.approachingShip} drift-c`} heading={12} />
      <Scrim>
        <h2 className={styles.heading}>How projects are judged</h2>

        <div className={styles.grid}>
          {judgingCriteria.map((criterion, i) => {
            const { variant, color } = satelliteFor("judging", i);
            return (
              <Reveal className={styles.item} key={criterion.title} delay={i * 90}>
                <Satellite variant={variant} color={color} className={styles.badge} />
                <h3 className={styles.itemTitle}>{criterion.title}</h3>
                <p className={styles.itemDesc}>{criterion.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Scrim>
    </section>
  );
}
