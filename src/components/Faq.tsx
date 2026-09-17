import { Fragment, useState } from "react";
import { faqGroups } from "../content/content";
import styles from "./Faq.module.css";

export function Faq() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <h2 className={styles.heading}>Frequently asked questions</h2>

        <div className={styles.groups}>
          {faqGroups.map((group) => (
            <Fragment key={group.title}>
              <h3 className={`label ${styles.groupTitle}`}>{group.title}</h3>
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
      </div>
    </section>
  );
}
