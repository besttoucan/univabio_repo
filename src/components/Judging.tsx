import { judgingCriteria } from "../content/content";
import { IconBadge } from "../illustrations/IconBadge";
import { IconChip, IconHandshake, IconLayers, IconPulse, IconSparkle } from "../illustrations/icons";
import styles from "./Judging.module.css";

const criteriaIcons = [IconSparkle, IconChip, IconPulse, IconLayers, IconHandshake];
const criteriaColors = [
  "var(--color-violet)",
  "var(--color-blue)",
  "var(--color-coral)",
  "var(--color-mint)",
  "var(--color-yellow-dark)",
];

export function Judging() {
  return (
    <section className={styles.section} id="judging">
      <div className="container">
        <h2 className={styles.heading}>How projects are judged</h2>

        <div className={styles.grid}>
          {judgingCriteria.map((criterion, i) => (
            <div className={styles.item} key={criterion.title}>
              <IconBadge icon={criteriaIcons[i]} color={criteriaColors[i]} size="sm" />
              <h3 className={styles.itemTitle}>{criterion.title}</h3>
              <p className={styles.itemDesc}>{criterion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
