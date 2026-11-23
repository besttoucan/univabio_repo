import { useEffect, useState } from "react";
import { EVENT_PHASE, navLinks, phaseCta } from "../content/content";
import { ChipMark } from "../marks/ChipMark";
import styles from "./Nav.module.css";

interface NavProps {
  /** Path of the page being rendered, so its nav item can mark itself current. */
  current?: string;
}

/** A desktop menubar: brand, links, the call to action. Collapses to a sheet on phones. */
export function Nav({ current = "/" }: NavProps) {
  const [open, setOpen] = useState(false);
  const cta = phaseCta[EVENT_PHASE];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  const links = navLinks.map((link) => {
    const isCurrent = link.href === current;
    return (
      <a
        key={link.href}
        href={link.href}
        className={isCurrent ? styles.current : undefined}
        aria-current={isCurrent ? "page" : undefined}
        onClick={() => setOpen(false)}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href="/" aria-label="UnivaBio home">
          <ChipMark className={styles.mark} />
          <span>UnivaBio</span>
        </a>

        <nav className={styles.links} aria-label="Main">
          {links}
        </nav>

        <div className={styles.right}>
          <span className={styles.live} aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <a className={`btn btn--small ${styles.cta}`} href={cta.href} target="_blank" rel="noopener noreferrer">
            {cta.label} ↗
          </a>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className={styles.sheet} aria-label="Main mobile" hidden={!open}>
        {links}
        <a className="btn" href={cta.href} target="_blank" rel="noopener noreferrer">
          {cta.label} ↗
        </a>
      </nav>
    </header>
  );
}
