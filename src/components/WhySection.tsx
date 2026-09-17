import { whyPoints } from "../content/content";
import { IconBadge } from "../illustrations/IconBadge";
import { IconChip, IconGlobe, IconGradCap, IconSeedling } from "../illustrations/sectionIcons";
import { Scrim } from "./Scrim";
import styles from "./WhySection.module.css";

const pointIcons = [IconSeedling, IconChip, IconGlobe, IconGradCap];
const pointColors = ["var(--color-bio)", "var(--color-circuit)", "var(--color-vascular)", "var(--color-fusion)"];

export function WhySection() {
  return (
    <section className={styles.section} id="about">
      <Scrim className={styles.grid}>
        <h2 className={styles.heading}>Who this is for</h2>

        <div className={styles.list}>
          {whyPoints.map((point, i) => (
            <div className={styles.point} key={point.title}>
              <IconBadge icon={pointIcons[i]} color={pointColors[i]} />
              <div>
                <p className={styles.pointTitle}>{point.title}</p>
                <p className={styles.pointDesc}>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Scrim>
    </section>
  );
}
