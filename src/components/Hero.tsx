import { DEVPOST_URL, heroFacts } from "../content/content";
import { ParticleField } from "../illustrations/ParticleField";
import { buildReachMotif } from "../illustrations/reachMotif";
import { ReachMark } from "../illustrations/ReachMark";
import { Scrim } from "./Scrim";
import styles from "./Hero.module.css";

const reach = buildReachMotif();

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <ParticleField
        style={{ top: "auto", bottom: 0, height: "56%", minHeight: 260 }}
        sourceOrganic={reach.organic}
        sourceCircuit={reach.circuit}
        edgeMode="sides"
        spark={reach.gap}
        density={1}
        focalFraction={0}
        entrance
        entranceDurationMs={3200}
        seed={5}
      />
      <Scrim className={styles.grid}>
        <div>
          <p className={`label ${styles.eyebrow}`}>BioCataalysis × UnivaDev</p>
          <div className={styles.headlineRow}>
            <ReachMark className={styles.mark} />
            <h1 className={styles.headline}>UnivaBio</h1>
          </div>
          <p className={styles.themeLine}>Artificial Intelligence for Human Health</p>
          <p className={styles.tagline}>
            Biology needs builders. UnivaBio brings students worldwide together to build tools that
            make healthcare smarter, earlier, and more accessible.
          </p>
          <div className={styles.ctas}>
            <a className="btn glow" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
              Register on Devpost
            </a>
            <a className="btn btn-quiet" href="#schedule">
              View schedule →
            </a>
          </div>
        </div>

        <div className={styles.side}>
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
      </Scrim>
    </section>
  );
}
