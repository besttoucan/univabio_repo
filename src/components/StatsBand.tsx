import { DEVPOST_URL } from "../content/content";
import { BloodstreamBelt } from "../illustrations/objects/BloodstreamBelt";
import { DnaComet } from "../illustrations/objects/DnaComet";
import { ProbeShip } from "../illustrations/objects/ProbeShip";
import { Satellite } from "../illustrations/objects/Satellite";
import { satelliteFor } from "../illustrations/objects/satellitePalette";
import { Reveal } from "./Reveal";
import { Scrim } from "./Scrim";
import styles from "./StatsBand.module.css";

const stats = [
  { value: "$40,000", label: "In prizes, non-cash", color: "var(--color-highlight)", glow: true },
  { value: "555+", label: "Hackers registered", asOf: "as of Sep 17, 2026", color: "var(--color-vascular)" },
  { value: "100%", label: "Online & global", color: "var(--color-circuit)" },
  { value: "13+", label: "Minimum age to join", color: "var(--color-bio)" },
];

export function StatsBand() {
  return (
    <section className={styles.band} aria-label="Event stats">
      <BloodstreamBelt className={`${styles.belt} drift-b`} />
      <DnaComet className={`${styles.comet} drift-c`} />
      <ProbeShip className={`${styles.statsShip} drift-a`} heading={4} trail={false} />
      <Scrim>
        <div className={styles.row}>
          {stats.map((stat, i) => {
            const { variant, color } = satelliteFor("stats", i);
            return (
              <Reveal className={styles.stat} key={stat.label} delay={i * 90}>
                <Satellite variant={variant} color={color} size="sm" className={styles.icon} />
                <span
                  className={`${styles.value} ${stat.glow ? "glow-text" : ""}`}
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                <span className={`label ${styles.label}`}>
                  {stat.label}
                  {stat.asOf && <span className={styles.asOf}>{stat.asOf}</span>}
                </span>
              </Reveal>
            );
          })}
        </div>
        <p className={styles.footnote}>
          Participant count is a point-in-time figure. See the{" "}
          <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
            live Devpost page
          </a>{" "}
          for the current total.
        </p>
      </Scrim>
    </section>
  );
}
