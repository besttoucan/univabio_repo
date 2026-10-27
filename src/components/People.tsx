import { judges } from "../content/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./People.module.css";

export function People({ index = "08" }: { index?: string }) {
  return (
    <section className="section" id="people" aria-labelledby="people-title">
      <div className="page">
        <SectionHead
          index={index}
          id="people-title"
          label="People"
          title={<>The <em>judges.</em></>}
          lede={`${judges.length} engineers, researchers, founders and product leaders score every entry.`}
        />

        <Reveal as="ul" className={styles.grid}>
          {judges.map((judge) => (
            <li className={styles.judge} key={judge.name}>
              <h3 className={styles.name}>{judge.name}</h3>
              <p className={styles.role}>{judge.role}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
