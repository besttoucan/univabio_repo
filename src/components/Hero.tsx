import { DEVPOST_URL, heroFacts } from "../content/content";
import { Blob } from "../illustrations/Blob";
import { CellCharacter } from "../illustrations/CellCharacter";
import { IconBadge } from "../illustrations/IconBadge";
import { IconDna, IconGlobe, IconGradCap, IconPulse, IconSparkle } from "../illustrations/icons";
import styles from "./Hero.module.css";

const factIcons = [IconPulse, IconGlobe, IconSparkle, IconGradCap];
const factColors = ["var(--color-coral)", "var(--color-blue)", "var(--color-mint)", "var(--color-violet)"];

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.scene} aria-hidden="true">
        <Blob className={styles.blobA} id="hero-blob-a" colorA="#fff3d6" colorB="#ffe3ba" rotate={-12} />
        <Blob className={styles.blobB} id="hero-blob-b" colorA="#dff6ff" colorB="#c7ecff" rotate={22} />
        <CellCharacter className={styles.critterA} color="var(--color-mint)" />
        <CellCharacter className={styles.critterB} color="var(--color-coral)" flip expression="wink" />
        <IconDna className={styles.dna} />
      </div>

      <div className={`container ${styles.grid}`}>
        <div>
          <p className={`label ${styles.eyebrow}`}>BioCataalysis × UnivaDev</p>
          <h1 className={styles.headline}>UnivaBio</h1>
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

        <div className={styles.facts}>
          {heroFacts.map((fact, i) => (
            <div className={styles.fact} key={fact.label}>
              <IconBadge icon={factIcons[i]} color={factColors[i]} size="sm" />
              <div>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </div>
            </div>
          ))}
          <p className={styles.footnote}>Non-cash prizes — sponsor credits, subscriptions & licenses.</p>
        </div>
      </div>
    </section>
  );
}
