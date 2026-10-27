import { DEVPOST_URL, prizes } from "../content/content";
import type { Prize } from "../content/types";
import { PrizeMark } from "../marks/PrizeMark";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Prizes.module.css";

const placed = prizes.filter((prize) => ["first", "second", "third"].includes(prize.award));
const special = prizes.filter((prize) => !placed.includes(prize));

function Award({ prize, delay }: { prize: Prize; delay: number }) {
  return (
    <Reveal as="li" className={`${styles.award} ${styles[prize.award]}`} delay={delay}>
      <div className={styles.head}>
        <PrizeMark award={prize.award} className={styles.mark} />
        <p className={`mono ${styles.winners}`}>{prize.winners}</p>
      </div>
      <h3 className={styles.rank}>{prize.rank}</h3>
      <Counter className={styles.value} to={prize.value} prefix="$" delay={delay} />
      <ul className={styles.items}>
        {prize.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Reveal>
  );
}

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

        <ol className={styles.podium}>
          {placed.map((prize, i) => (
            <Award prize={prize} delay={i * 90} key={prize.rank} />
          ))}
        </ol>

        <h3 className={`eyebrow ${styles.specialTitle}`}>Special awards</h3>
        <ul className={styles.special}>
          {special.map((prize, i) => (
            <Award prize={prize} delay={i * 90} key={prize.rank} />
          ))}
        </ul>

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
