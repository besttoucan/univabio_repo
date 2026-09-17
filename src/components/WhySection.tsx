import { whyPoints } from "../content/content";
import { BranchLine } from "../illustrations/BranchLine";
import { IconBadge } from "../illustrations/IconBadge";
import { IconChip, IconGlobe, IconGradCap, IconSeedling } from "../illustrations/sectionIcons";
import styles from "./WhySection.module.css";

const pointIcons = [IconSeedling, IconChip, IconGlobe, IconGradCap];
const pointColors = ["var(--color-bio)", "var(--color-circuit)", "var(--color-vascular)", "var(--color-fusion)"];

export function WhySection() {
  return (
    <section className={styles.section} id="about">
      <BranchLine
        className={styles.scene}
        originX={0.06}
        originY={0.15}
        initialAngleDeg={12}
        depth={6}
        branchLength={9}
        angleJitterDeg={24}
        branchProbability={0.42}
        strokeWeight={1.3}
        seed={101}
        color="var(--color-vascular)"
        accentNodeEvery={4}
        accentColor="var(--color-fusion)"
      />
      <div className={`container ${styles.grid}`}>
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
      </div>
    </section>
  );
}
