import { whoPoints } from "../content/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Who.module.css";

export function Who({ index = "02" }: { index?: string }) {
  return (
    <section className="section" id="about" aria-labelledby="who-title">
      <div className="page">
        <SectionHead
          index={index}
          id="who-title"
          label="What is UnivaBio"
          title={<>Who it is <em>for.</em></>}
          lede="935 students registered on Devpost."
        />

        <ul className={styles.grid}>
          {whoPoints.map((point, i) => (
            <Reveal as="li" className={styles.item} key={point.title} delay={i * 90}>
              <h3 className={styles.title}>{point.title}</h3>
              <p className={styles.body}>{point.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
