import { BIOCATAALYSIS_URL, CONTACT_EMAIL, DEVPOST_RULES_URL, DEVPOST_URL, pageLinks } from "../content/content";
import { BioSticker } from "../marks/BioSticker";
import { ChipMark } from "../marks/ChipMark";
import { Reveal } from "./Reveal";
import styles from "./Footer.module.css";

// A cell-membrane edge: one wave per 60px across a 1440 grid, cropped (not squashed) on narrow screens.
const WAVE = `M0 26 Q30 6 60 26 ${Array.from({ length: 23 }, (_, i) => `T${120 + i * 60} 26`).join(" ")} V48 H0Z`;

export function Footer() {
  return (
    <footer className={styles.footer}>
      {/* v2 teaser: the last thing before the footer proper */}
      <div className="page" id="next">
        <Reveal className={styles.v2}>
          <div className={styles.bar} aria-hidden="true">
            <i />
            <i />
            <i />
            <span>incubator — univabio-v2</span>
          </div>
          <div className={styles.v2Body}>
            <div>
              <p className={`pill ${styles.soon}`}>
                <span className={styles.dot} aria-hidden="true" />
                v2 · coming soon
              </p>
              <h2 className={styles.title}>UnivaBio v2 is incubating.</h2>
              <p className={styles.v2Note}>
                A second edition is growing in the lab. Follow BioCataalysis to hear first when
                registration opens.
              </p>
              <div className={styles.cta}>
                <a className="btn" href={BIOCATAALYSIS_URL} target="_blank" rel="noopener noreferrer">
                  Follow for updates ↗
                </a>
                <a className="btn btn--line" href={`mailto:${CONTACT_EMAIL}?subject=UnivaBio%20v2`}>
                  Sponsor or judge v2
                </a>
              </div>
            </div>

            <div className={styles.dish} aria-hidden="true">
              <BioSticker kind="petri" className={styles.dishArt} />
              <BioSticker kind="cell" className={styles.dishCell} />
              <div className={styles.culture}>
                <span className={styles.cultureLabel}>culturing v2…</span>
                <span className={styles.track}>
                  <span className={styles.fill} />
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className={styles.base}>
        <div className={styles.shore} aria-hidden="true">
          <svg className={styles.wave} viewBox="0 0 1440 48" preserveAspectRatio="xMidYMax slice">
            <path d={WAVE} />
          </svg>
          <BioSticker kind="virus" className={`${styles.critter} ${styles.c1}`} />
          <BioSticker kind="dna" className={`${styles.critter} ${styles.c2}`} />
          <BioSticker kind="mito" className={`${styles.critter} ${styles.c3}`} />
          <BioSticker kind="phage" className={`${styles.critter} ${styles.c4}`} />
          <BioSticker kind="molecule" className={`${styles.critter} ${styles.c5}`} />
        </div>

        <div className={styles.dark}>
          <div className={`page ${styles.meta}`}>
            <div className={styles.brand}>
              <span className={styles.wordmark}>
                <ChipMark className={styles.mark} />
                UnivaBio
              </span>
              <p className={styles.brandNote}>
                A student hackathon from BioCataalysis and UnivaDev on artificial intelligence for
                human health.
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
                    Devpost listing ↗
                  </a>
                </li>
                <li>
                  <a href={DEVPOST_RULES_URL} target="_blank" rel="noopener noreferrer">
                    Full rules ↗
                  </a>
                </li>
                <li>
                  <a href={BIOCATAALYSIS_URL} target="_blank" rel="noopener noreferrer">
                    BioCataalysis ↗
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
            <p className={`mono ${styles.copy}`}>Event details follow the Devpost listing.</p>
            <p className={`mono ${styles.copy} ${styles.egg}`} aria-hidden="true">
              &gt; sequencing complete<span className={styles.caret}>▌</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
