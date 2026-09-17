import { whyPoints } from "../content/content";
import { IconBadge } from "../illustrations/IconBadge";
import { IconGlobe, IconGradCap, IconHandshake, IconSeedling } from "../illustrations/icons";
import styles from "./WhySection.module.css";

const pointIcons = [IconSeedling, IconHandshake, IconGlobe, IconGradCap];
const pointColors = ["var(--color-mint)", "var(--color-violet)", "var(--color-blue)", "var(--color-coral)"];

export function WhySection() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <p className={`label ${styles.eyebrow}`}>You belong here</p>
        <h2 className={styles.heading}>Who this is for</h2>

        <div className={styles.grid}>
          {whyPoints.map((point, i) => (
            <div className={styles.card} key={point.title}>
              <IconBadge icon={pointIcons[i]} color={pointColors[i]} />
              <p className={styles.pointTitle}>{point.title}</p>
              <p className={styles.pointDesc}>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
