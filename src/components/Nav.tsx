import { useState } from "react";
import { DEVPOST_URL, navLinks } from "../content/content";
import { CellCharacter } from "../illustrations/CellCharacter";
import styles from "./Nav.module.css";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top">
          <CellCharacter className={styles.brandMark} color="var(--color-mint)" />
          UnivaBio
        </a>

        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className={`btn ${styles.navCta}`} href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
          Register
        </a>

        <button
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobile} ${open ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className={`btn ${styles.cta}`} href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
          Register on Devpost
        </a>
      </div>
    </header>
  );
}
