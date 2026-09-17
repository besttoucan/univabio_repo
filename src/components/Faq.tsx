import { Fragment, useState } from "react";
import { faqGroups } from "../content/content";
import { IconBadge } from "../illustrations/IconBadge";
import { IconCodeBracket, IconGlobe, IconGradCap } from "../illustrations/sectionIcons";
import { Scrim } from "./Scrim";
import styles from "./Faq.module.css";

const groupIcons = [IconGlobe, IconGradCap, IconCodeBracket];
const groupColors = ["var(--color-vascular)", "var(--color-fusion)", "var(--color-circuit)"];

export function Faq() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section className={styles.section} id="faq">
      <Scrim>
        <h2 className={styles.heading}>Frequently asked questions</h2>

        <div className={styles.groups}>
          {faqGroups.map((group, gi) => (
            <Fragment key={group.title}>
              <div className={styles.groupTitle}>
                <IconBadge icon={groupIcons[gi]} color={groupColors[gi]} size="sm" />
                <h3 className="label">{group.title}</h3>
              </div>
              <div className={styles.groupItems}>
                {group.items.map((item) => {
                  const key = `${group.title}-${item.question}`;
                  const isOpen = openKey === key;
                  return (
                    <div className={`${styles.item} ${isOpen ? styles.open : ""}`} key={key}>
                      <button
                        className={styles.question}
                        aria-expanded={isOpen}
                        onClick={() => setOpenKey(isOpen ? null : key)}
                      >
                        {item.question}
                        <span className={styles.icon} aria-hidden="true">
                          +
                        </span>
                      </button>
                      <div className={styles.answer}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Fragment>
          ))}
        </div>
      </Scrim>
    </section>
  );
}
