import { EVENT_PHASE, navLinks, phaseCta } from "../content/content";
import { ChipMark } from "../marks/ChipMark";
import styles from "./Nav.module.css";

interface NavProps {
  /** Path of the page being rendered, so its nav item can mark itself current. */
  current?: string;
}

export function Nav({ current = "/" }: NavProps) {
  return (
    <header className={styles.bar}>
      <div className={`page ${styles.inner}`}>
        <a className={styles.wordmark} href="/" aria-label="UnivaBio home">
          <ChipMark className={styles.mark} />
          <span>UnivaBio</span>
        </a>

        <nav className={styles.links} aria-label="Main">
          {navLinks.map((link) => {
            const isCurrent = link.href === current;
            return (
              <a
                key={link.href}
                href={link.href}
                className={isCurrent ? styles.current : undefined}
                aria-current={isCurrent ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          className={`btn btn--small ${styles.cta}`}
          href={phaseCta[EVENT_PHASE].href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {phaseCta[EVENT_PHASE].label}
        </a>
      </div>
    </header>
  );
}
