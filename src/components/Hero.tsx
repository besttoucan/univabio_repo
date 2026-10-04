import { DEVPOST_URL, heroFacts, scheduleEvents } from "../content/content";
import { useScheduleStatus } from "../hooks/useScheduleStatus";
import { HelixBand } from "../marks/HelixBand";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import styles from "./Hero.module.css";

export function Hero() {
  const { daysToDeadline, message } = useScheduleStatus(scheduleEvents);
  const open = daysToDeadline !== null;

  return (
    <section className={styles.hero} id="top">
      <div className={`page ${styles.top}`}>
        <Reveal className={`eyebrow ${styles.kicker}`}>
          BioCataalysis &times; UnivaDev &nbsp;/&nbsp; Online &nbsp;/&nbsp; Ages 13+
        </Reveal>

        <Reveal variant="wipe" as="h1" className={styles.title} delay={80}>
          UnivaBio
        </Reveal>

        <div className={styles.under}>
          <Reveal delay={220}>
            <h2 className={styles.theme}>
              Artificial intelligence <em>for human health.</em>
            </h2>
          </Reveal>

          <Reveal className={styles.actions} delay={320}>
            <a className="btn" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
              Register on Devpost
            </a>
            <a className="btn btn--line" href="/compete/">
              How to enter
            </a>
          </Reveal>
        </div>
      </div>

      <div className={styles.bandWrap}>
        <HelixBand className={styles.band} />
      </div>

      <div className={`page ${styles.strip}`}>
        <p className={styles.status}>
          <span className={styles.statusText}>
            {open ? "Submissions open" : "Submissions closed"}
          </span>
          {open ? (
            <span className={`mono ${styles.countdown}`}>
              <Counter to={daysToDeadline} /> days left
            </span>
          ) : (
            <span className={`mono ${styles.countdown}`}>{message}</span>
          )}
        </p>

        <dl className={styles.facts}>
          {heroFacts.map((fact, i) => (
            <Reveal className={styles.fact} key={fact.label} delay={i * 80}>
              <dt className={`mono ${styles.factLabel}`}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
              {fact.note ? <dd className={styles.factNote}>{fact.note}</dd> : null}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
