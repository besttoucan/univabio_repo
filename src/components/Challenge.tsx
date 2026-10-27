import { challengeExamples } from "../content/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Challenge.module.css";

export function Challenge({ index = "01" }: { index?: string }) {
  return (
    <section className="section" id="theme" aria-labelledby="challenge-title">
      <div className="page">
        <SectionHead
          index={index}
          id="challenge-title"
          label="The theme · AI for human health"
          title={<>The <em>brief.</em></>}
          lede="Build something that helps a person detect illness earlier, understand it better, or live with it more easily."
        />

        <ol className={styles.list}>
          {challengeExamples.map((example, i) => (
            <Reveal as="li" className={styles.item} key={example} delay={i * 90}>
              <span className={`mono ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.text}>{example}</span>
            </Reveal>
          ))}
        </ol>

        <Reveal className={styles.note} delay={120}>
          <p>
            An app, a website, a model, a simulation, an algorithm. Any form, as long as it runs and
            you can show it working.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
