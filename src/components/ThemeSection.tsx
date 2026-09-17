import { themeExamples } from "../content/content";
import { Blob } from "../illustrations/Blob";
import styles from "./ThemeSection.module.css";

const exampleColors = ["var(--color-coral)", "var(--color-blue)", "var(--color-mint)", "var(--color-violet)"];

export function ThemeSection() {
  return (
    <section className={styles.section} id="theme">
      <Blob className={styles.blob} id="theme-blob" colorA="#f2ecff" colorB="#e5d9ff" rotate={35} />
      <div className={`container ${styles.grid}`}>
        <div>
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
        </div>

        <div>
          <span className={`label ${styles.examplesLabel}`}>What a project can look like</span>
          <ul className={styles.examples}>
            {themeExamples.map((example, i) => (
              <li key={example}>
                <span
                  className={styles.dot}
                  style={{ background: exampleColors[i % exampleColors.length] }}
                />
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
