import { requirements } from "../content/content";
import { IconBadge } from "../illustrations/IconBadge";
import { OrganelleMarks } from "../illustrations/OrganelleMarks";
import { IconCodeBracket, IconDocument, IconFolder, IconPlay } from "../illustrations/sectionIcons";
import { Scrim } from "./Scrim";
import styles from "./Requirements.module.css";

const reqIcons = [IconFolder, IconPlay, IconDocument, IconCodeBracket];
const reqColors = ["var(--color-circuit)", "var(--color-vascular)", "var(--color-bio)", "var(--color-fusion)"];

export function Requirements() {
  return (
    <section className={styles.section} id="requirements">
      <OrganelleMarks className={styles.marks} variant="a" />
      <Scrim>
        <h2 className={styles.heading}>What you'll submit</h2>

        <div className={styles.grid}>
          {requirements.map((req, i) => (
            <div className={styles.card} key={req.index}>
              <IconBadge icon={reqIcons[i]} color={reqColors[i]} />
              <span className={styles.title}>{req.title}</span>
              <p className={styles.desc}>{req.description}</p>
            </div>
          ))}
        </div>
      </Scrim>
    </section>
  );
}
