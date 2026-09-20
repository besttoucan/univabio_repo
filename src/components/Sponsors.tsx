import { sponsors } from "../content/content";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { SectionHead } from "./SectionHead";
import styles from "./Sponsors.module.css";

export function Sponsors({ index = "02" }: { index?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  // Two copies make the loop seamless: the track slides exactly half its width.
  const run = reducedMotion ? sponsors : [...sponsors, ...sponsors];

  return (
    <section className="section" id="sponsors" aria-labelledby="sponsors-title">
      <div className="page">
        <SectionHead
          index={index}
          id="sponsors-title"
          title="Who put it up"
          lede="Every prize on this page is credit, tooling, or membership put up by one of these companies."
        />
      </div>

      <div className={`${styles.ticker} ${reducedMotion ? styles.tickerStill : ""}`}>
        <ul className={styles.track} aria-label="Sponsors">
          {run.map((sponsor, i) => {
            const duplicate = i >= sponsors.length;
            return (
              <li className={styles.item} key={`${sponsor.name}-${i}`} aria-hidden={duplicate || undefined}>
                <a
                  className={styles.link}
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={duplicate ? -1 : undefined}
                >
                  {sponsor.logo ? (
                    <img
                      className={styles.logo}
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className={styles.wordmark}>{sponsor.name}</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
