import { CONTACT_EMAIL, DEVPOST_URL } from "../content/content";
import { Blob } from "../illustrations/Blob";
import { CellCharacter } from "../illustrations/CellCharacter";
import { IconMail } from "../illustrations/icons";
import styles from "./Footer.module.css";

export function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <Blob className={styles.blob} id="cta-blob" colorA="#ffe3ba" colorB="#ffc9d6" rotate={8} />
      <CellCharacter className={styles.critter} color="var(--color-mint)" expression="wink" />
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.finalHeading}>Ready to build something that matters?</h2>
        <a className="btn" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
          Register on Devpost
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <span className={styles.brand}>
          <CellCharacter className={styles.footerMark} color="var(--color-coral)" />
          UnivaBio
        </span>
        <span className={styles.credit}>Hosted by BioCataalysis, in partnership with UnivaDev.</span>

        <div className={styles.links}>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            <IconMail className={styles.mailIcon} /> {CONTACT_EMAIL}
          </a>
          <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
            Devpost page
          </a>
        </div>

        <p className={styles.copyright}>© {year} UnivaBio. All prizes non-cash.</p>
      </div>
    </footer>
  );
}
