import { EVENT_PHASE, metaStrip, phaseChip, phaseCta } from "../content/content";
import { Reveal } from "./Reveal";
import styles from "./Hero.module.css";

/** A single cell. The text sits left; the Organism breathes behind it on the right. */
export function Hero() {
  const cta = phaseCta[EVENT_PHASE];

  return (
    <section className={styles.hero} id="top">
      <div className={`page ${styles.inner}`}>
        <Reveal className={`eyebrow ${styles.kicker}`}>BioCataalysis &times; UnivaDev</Reveal>

        <Reveal variant="wipe" as="h1" className={styles.title} delay={80}>
          Intelligence, <em>alive.</em>
        </Reveal>

        <Reveal delay={200}>
          <p className={styles.sub}>
            UnivaBio is an online hackathon where students worldwide build artificial intelligence
            for human health.
          </p>
        </Reveal>

        <Reveal as="ul" className={`metaStrip ${styles.strip}`} delay={260}>
          {metaStrip.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Reveal>

        <Reveal className={styles.actions} delay={320}>
          <p className={`mono ${styles.chip}`}>
            <span className={styles.dot} aria-hidden="true" />
            {phaseChip[EVENT_PHASE]}
          </p>
          <div className={styles.buttons}>
            <a className="btn" href={cta.href} target="_blank" rel="noopener noreferrer">
              {cta.label}
            </a>
            <a className="btn btn--line" href="/#results">
              {{ open: "How to enter", judging: "Submissions", results: "Results" }[EVENT_PHASE]}
            </a>
          </div>
        </Reveal>

        <p className={`mono ${styles.cue}`} aria-hidden="true">
          scroll to grow ↓
        </p>
      </div>
    </section>
  );
}
