import { sponsors } from "../content/content";
import styles from "./Sponsors.module.css";

const tileColors = [
  "var(--band-sky)",
  "var(--band-mint)",
  "var(--band-peach)",
  "var(--band-lavender)",
  "var(--band-sun)",
];

export function Sponsors() {
  return (
    <section className={styles.section} id="sponsors">
      <div className="container">
        <h2 className={styles.heading}>Sponsors</h2>
        <p className={styles.intro}>The prizes above are made possible by these partners.</p>

        <div className={styles.grid}>
          {sponsors.map((sponsor, i) => {
            const style = { background: tileColors[i % tileColors.length] };
            return sponsor.href ? (
              <a
                key={sponsor.name}
                className={styles.item}
                style={style}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sponsor.name}
              </a>
            ) : (
              <span key={sponsor.name} className={styles.item} style={style}>
                {sponsor.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
