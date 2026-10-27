import {
  BIOCATAALYSIS_URL,
  CONTACT_EMAIL,
  DEVPOST_RULES_URL,
  DEVPOST_URL,
  EVENT_PHASE,
  pageLinks,
  phaseCta,
  scheduleEvents,
} from "../content/content";
import { useScheduleStatus } from "../hooks/useScheduleStatus";
import { ChipMark } from "../marks/ChipMark";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import styles from "./Footer.module.css";

export function Footer() {
  const { daysToDeadline } = useScheduleStatus(scheduleEvents);
  const cta = phaseCta[EVENT_PHASE];

  return (
    <footer className={styles.footer}>
      <div className={`page ${styles.closing}`} id="next">
        <Reveal className={`eyebrow ${styles.next}`}>What&rsquo;s next</Reveal>

        {daysToDeadline !== null ? (
          <Reveal className={styles.clock}>
            <Counter className={styles.clockValue} to={daysToDeadline} />
            <span className={styles.clockLabel}>days to the deadline</span>
          </Reveal>
        ) : null}

        <Reveal variant="wipe" as="h2" className={styles.title} delay={80}>
          Your idea could be <em>the next thing to grow.</em>
        </Reveal>

        <Reveal className={styles.cta} delay={200}>
          <a className="btn" href={cta.href} target="_blank" rel="noopener noreferrer">
            {cta.label}
          </a>
          {EVENT_PHASE === "open" ? null : (
            <a className="btn btn--line" href={BIOCATAALYSIS_URL} target="_blank" rel="noopener noreferrer">
              Stay updated
            </a>
          )}
          <span className={styles.ctaNote}>
            {EVENT_PHASE === "open"
              ? "Students 13+, anywhere in the world."
              : "Follow BioCataalysis for the next edition."}
          </span>
        </Reveal>
      </div>

      <div className={`page ${styles.meta}`}>
        <div className={styles.brand}>
          <span className={styles.wordmark}>
            <ChipMark className={styles.mark} />
            UnivaBio
          </span>
          <p className={styles.brandNote}>
            A student hackathon from BioCataalysis and UnivaDev on artificial intelligence for human
            health.
          </p>
        </div>

        <nav className={styles.col} aria-label="Pages">
          <h2 className={styles.colTitle}>Pages</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            {pageLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.col} aria-label="Official links">
          <h2 className={styles.colTitle}>Official</h2>
          <ul>
            <li>
              <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
                Devpost listing
              </a>
            </li>
            <li>
              <a href={DEVPOST_RULES_URL} target="_blank" rel="noopener noreferrer">
                Full rules
              </a>
            </li>
            <li>
              <a href={BIOCATAALYSIS_URL} target="_blank" rel="noopener noreferrer">
                BioCataalysis
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles.col} aria-label="Site">
          <h2 className={styles.colTitle}>Site</h2>
          <ul>
            <li>
              <a href="/privacy/">Privacy</a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`page ${styles.bottom}`}>
        <p className={`mono ${styles.copy}`}>&copy; {new Date().getFullYear()} UnivaBio</p>
        <p className={`mono ${styles.copy}`}>Details follow Devpost. Checked 27 October 2026.</p>
        <p className={`mono ${styles.copy} ${styles.egg}`} aria-hidden="true">
          &gt; sequencing complete<span className={styles.caret}>▌</span>
        </p>
      </div>
    </footer>
  );
}
