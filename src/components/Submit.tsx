import type { ReactElement } from "react";
import { DEVPOST_URL, requirements } from "../content/content";
import { CodeIcon, PageIcon, ProjectIcon, VideoIcon } from "../marks/submitIcons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Submit.module.css";

/** Keyed by the requirement index in content.ts. */
const icons: Record<string, () => ReactElement> = {
  "01": ProjectIcon,
  "02": VideoIcon,
  "03": PageIcon,
  "04": CodeIcon,
};

export function Submit({ index = "01" }: { index?: string }) {
  return (
    <section className="section" id="submit" aria-labelledby="submit-title">
      <div className="page">
        <SectionHead
          index={index}
          id="submit-title"
          title="Four files"
          lede="All of them uploaded to Devpost before the deadline. Miss one and the entry is incomplete."
        />

        <ol className={styles.grid}>
          {requirements.map((item, i) => {
            const Icon = icons[item.index];
            return (
              <Reveal as="li" className={styles.card} key={item.index} delay={i * 100}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon />
                </span>
                <span className={`mono ${styles.index}`}>{item.index}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.body}>{item.description}</p>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className={styles.note}>
          <p className="fine">
            Everything happens on{" "}
            <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
              the Devpost listing
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
