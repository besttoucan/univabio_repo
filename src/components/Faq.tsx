import { CONTACT_EMAIL, DEVPOST_RULES_URL, faqGroups } from "../content/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Faq.module.css";

export function Faq({ index = "02" }: { index?: string }) {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="page">
        <SectionHead
          index={index}
          id="faq-title"
          label="FAQ"
          title={<>Questions, <em>answered.</em></>}
          lede={
            <>
              If anything here disagrees with the{" "}
              <a href={DEVPOST_RULES_URL} target="_blank" rel="noopener noreferrer">
                official rules
              </a>
              , the rules win.
            </>
          }
        />

        {faqGroups.map((group, groupIndex) => (
          <Reveal className={styles.group} key={group.title} delay={groupIndex * 80}>
            <h3 className={`eyebrow ${styles.groupTitle}`}>{group.title}</h3>

            <div className={styles.items}>
              {group.items.map((item) => (
                <details className={styles.item} key={item.question}>
                  <summary className={styles.question}>
                    <span>{item.question}</span>
                    <span className={styles.sign} aria-hidden="true" />
                  </summary>
                  <p className={styles.answer}>{item.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        ))}

        <p className={`fine ${styles.contact}`}>
          Still stuck? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
