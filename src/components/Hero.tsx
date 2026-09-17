import { DEVPOST_URL, heroFacts } from "../content/content";
import { FusionMark } from "../illustrations/FusionMark";
import { HeroCenterpiece } from "../illustrations/HeroCenterpiece";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={`label ${styles.eyebrow}`}>BioCataalysis × UnivaDev</p>
          <div className={styles.headlineRow}>
            <FusionMark className={styles.mark} variant="full" />
            <h1 className={styles.headline}>UnivaBio</h1>
          </div>
          <p className={styles.themeLine}>Artificial Intelligence for Human Health</p>
          <p className={styles.tagline}>
            Biology needs builders. UnivaBio brings students worldwide together to build tools that
            make healthcare smarter, earlier, and more accessible.
          </p>
          <div className={styles.ctas}>
            <a className="btn" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
              Register on Devpost
            </a>
            <a className="btn btn-quiet" href="#schedule">
              View schedule →
            </a>
          </div>
        </div>

        <div className={styles.side}>
          <HeroCenterpiece className={styles.centerpiece} />
          <div className={styles.facts}>
            {heroFacts.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <span className={`label ${styles.factLabel}`}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </div>
            ))}
            <p className={styles.footnote}>Non-cash prizes — sponsor credits, subscriptions & licenses.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
