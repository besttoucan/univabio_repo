import { themeExamples } from "../content/content";
import { useScrollReveal } from "../illustrations/useScrollReveal";
import { NucleusPlanet } from "../illustrations/objects/NucleusPlanet";
import { ProbeShip } from "../illustrations/objects/ProbeShip";
import { ParchmentPanel } from "./ParchmentPanel";
import { Scrim } from "./Scrim";
import styles from "./ThemeSection.module.css";

const exampleColors = [
  "var(--color-bio)",
  "var(--color-circuit)",
  "var(--color-vascular)",
  "var(--color-fusion)",
];

function ExampleItem({ example, color, delay }: { example: string; color: string; delay: number }) {
  const { ref, revealed } = useScrollReveal<HTMLLIElement>(0.2);
  return (
    <li ref={ref} className={`${styles.exampleItem} ${revealed ? styles.revealed : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <span className={styles.dot} style={{ background: color }} />
      {example}
    </li>
  );
}

export function ThemeSection() {
  return (
    <section className={styles.section} id="theme">
      <NucleusPlanet className={`${styles.nucleusPlanet} drift-a`} />
      <ProbeShip className={`${styles.ship} drift-c`} heading={-8} />
      <Scrim className={styles.grid}>
        <ParchmentPanel>
          <h2 className={styles.heading}>The challenge</h2>
          <p className={styles.intro}>
            Design and build a technical product that helps people detect illness earlier,
            understand it better, or live with it more easily. There's no single right shape for a
            submission — apps, websites, simulations, and systems all fit.
          </p>
          <p className={styles.note}>
            <strong>Using AI coding assistants is encouraged.</strong> Build with Claude, ChatGPT,
            Copilot, Cursor, or whatever helps you move fast. The one norm: you need to understand
            and be able to explain your own code to the judges.
          </p>
        </ParchmentPanel>

        <div>
          <span className={`label ${styles.examplesLabel}`}>What a project can look like</span>
          <ul className={styles.examples}>
            {themeExamples.map((example, i) => (
              <ExampleItem
                key={example}
                example={example}
                color={exampleColors[i % exampleColors.length]}
                delay={i * 90}
              />
            ))}
          </ul>
        </div>
      </Scrim>
    </section>
  );
}
