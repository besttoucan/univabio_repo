import { whyPoints } from "../content/content";
import { Satellite } from "../illustrations/objects/Satellite";
import { satelliteFor } from "../illustrations/objects/satellitePalette";
import { Reveal } from "./Reveal";
import { Scrim } from "./Scrim";
import styles from "./WhySection.module.css";

export function WhySection() {
  return (
    <section className={styles.section} id="about">
      <Scrim className={styles.grid}>
        <div className={styles.headingCol}>
          <h2 className={styles.heading}>Who this is for</h2>
          <Satellite variant="ring" color="var(--color-circuit)" accentColor="var(--color-fusion)" size="lg" className={styles.sideMark} />
        </div>

        <div className={styles.list}>
          {whyPoints.map((point, i) => {
            const { variant, color } = satelliteFor("why", i);
            return (
              <Reveal className={styles.point} key={point.title} delay={i * 90}>
                <Satellite variant={variant} color={color} size="md" className={styles.pointMark} />
                <div>
                  <p className={styles.pointTitle}>{point.title}</p>
                  <p className={styles.pointDesc}>{point.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Scrim>
    </section>
  );
}
