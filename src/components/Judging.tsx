import { judgingCriteria } from "../content/content";
import { IconBadge } from "../illustrations/IconBadge";
import { IconChip, IconLayers, IconMegaphone, IconPulse, IconSparkle } from "../illustrations/sectionIcons";
import styles from "./Judging.module.css";

const criteriaIcons = [IconSparkle, IconChip, IconPulse, IconLayers, IconMegaphone];
const criteriaColors = [
  "var(--color-fusion)",
  "var(--color-circuit)",
  "var(--color-vascular)",
  "var(--color-highlight)",
  "var(--color-bio)",
];

export function Judging() {
  return (
    <section className={styles.section} id="judging">
      <div className="container">
        <h2 className={styles.heading}>How projects are judged</h2>

        <div className={styles.scroller}>
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
