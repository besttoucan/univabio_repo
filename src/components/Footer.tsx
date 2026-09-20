import {
  BIOCATAALYSIS_URL,
  CONTACT_EMAIL,
  DEVPOST_RULES_URL,
  DEVPOST_URL,
  navLinks,
  scheduleEvents,
} from "../content/content";
import { useScheduleStatus } from "../hooks/useScheduleStatus";
import { HelixMark } from "../marks/HelixMark";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import styles from "./Footer.module.css";

export function Footer() {
  const { daysToDeadline } = useScheduleStatus(scheduleEvents);

  return (
    <footer className={styles.footer}>
      <div className={`page ${styles.closing}`}>
        {daysToDeadline !== null ? (
          <Reveal className={styles.clock}>
            <Counter className={styles.clockValue} to={daysToDeadline} />
            <span className={styles.clockLabel}>days to the deadline</span>
          </Reveal>
        ) : null}

        <Reveal variant="wipe" as="h2" className={styles.title} delay={80}>
          Build something that makes health easier to reach.
        </Reveal>

        <Reveal className={styles.cta} delay={200}>
          <a className="btn" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
            Register on Devpost
          </a>
          <span className={styles.ctaNote}>Students 13+, anywhere in the world.</span>
        </Reveal>
      </div>

      <div className={`page ${styles.meta}`}>
        <div className={styles.brand}>
          <span className={styles.wordmark}>
            <HelixMark className={styles.mark} />
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
            {navLinks.map((link) => (
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
        <p className={`mono ${styles.copy}`}>Details follow Devpost. Checked 19 September 2026.</p>
      </div>
    </footer>
  );
}
