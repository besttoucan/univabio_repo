import { whoPoints } from "../content/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Who.module.css";

export function Who({ index = "02" }: { index?: string }) {
  return (
    <section className="section" id="who" aria-labelledby="who-title">
      <div className="page">
        <SectionHead
          index={index}
          id="who-title"
          title="Who it is for"
          lede="576 students had registered by 19 September 2026."
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
