import { DEVPOST_URL, prizes } from "../content/content";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Prizes.module.css";

const [first, ...rest] = prizes;

export function Prizes({ index = "01" }: { index?: string }) {
  return (
    <section className="section" id="prizes" aria-labelledby="prizes-title">
      <div className="page">
        <SectionHead
          index={index}
          id="prizes-title"
          label="Prizes"
          title={<>The <em>tiers.</em></>}
          lede="First place takes the largest single share. The Tin Computer credit is the widest, reaching 100 entrants."
        />

        <Reveal className={styles.feature}>
          <div className={styles.featureHead}>
            <span className={`mono ${styles.tag}`}>{first.winners}</span>
            <h3 className={styles.featureRank}>{first.rank}</h3>
          </div>

          <Counter className={styles.featureValue} to={first.value} prefix="$" />

          <ul className={styles.featureItems}>
            {first.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <ol className={styles.rest}>
          {rest.map((prize, i) => (
            <Reveal as="li" className={styles.tier} key={prize.rank} delay={i * 90}>
              <Counter className={styles.tierValue} to={prize.value} prefix="$" delay={i * 90} />
              <h3 className={styles.tierRank}>{prize.rank}</h3>
              <p className={`mono ${styles.tierWinners}`}>{prize.winners}</p>
              <ul className={styles.tierItems}>
                {prize.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <p className={`fine ${styles.note}`}>
          Values as published by each sponsor on the{" "}
          <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
            Devpost listing
          </a>
          .
        </p>
      </div>
    </section>
  );
}
