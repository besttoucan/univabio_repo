import { CONTACT_EMAIL, DEVPOST_URL } from "../content/content";
import { DnaCircuitMerge } from "../illustrations/DnaCircuitMerge";
import styles from "./Footer.module.css";

export function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className="container">
        <h2 className={styles.finalHeading}>Ready to build something that matters?</h2>
        <a className="btn" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
          Register on Devpost
        </a>
        <DnaCircuitMerge className={styles.merge} />
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <span className={styles.brand}>UnivaBio</span>
        <span className={styles.credit}>Hosted by BioCataalysis, in partnership with UnivaDev.</span>

        <div className={styles.links}>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
            Devpost page
          </a>
        </div>

        <p className={styles.copyright}>© {year} UnivaBio. All prizes non-cash.</p>
      </div>
    </footer>
  );
}
