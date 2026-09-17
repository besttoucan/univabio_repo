import { CONTACT_EMAIL, DEVPOST_URL } from "../content/content";
import { DnaCircuitMerge } from "../illustrations/DnaCircuitMerge";
import { ProbeShip } from "../illustrations/objects/ProbeShip";
import { ReachMark } from "../illustrations/ReachMark";
import { Scrim } from "./Scrim";
import styles from "./Footer.module.css";

export function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <ProbeShip className={styles.arrivedShip} heading={0} trail={false} />
      <Scrim>
        <h2 className={styles.finalHeading}>Ready to build something that matters?</h2>
        <a className="btn glow" href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
          Register on Devpost
        </a>
        <DnaCircuitMerge className={styles.merge} />
      </Scrim>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <span className={styles.brand}>
          <ReachMark className={styles.brandMark} resolved />
          UnivaBio
        </span>
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
