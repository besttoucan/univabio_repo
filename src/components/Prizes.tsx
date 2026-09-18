import { prizes } from "../content/content";
import { Satellite } from "../illustrations/objects/Satellite";
import { satelliteFor } from "../illustrations/objects/satellitePalette";
import { colorHighlight } from "../illustrations/theme";
import { useScrollReveal } from "../illustrations/useScrollReveal";
import { Scrim } from "./Scrim";
import styles from "./Prizes.module.css";

function rankSize(rank: string): "sm" | "md" | "lg" {
  if (rank === "1st place") return "lg";
  if (rank === "2nd place" || rank === "3rd place") return "md";
  return "sm";
}

interface PrizeRowProps {
  prize: (typeof prizes)[number];
  variant: ReturnType<typeof satelliteFor>["variant"];
  color: string;
  delay: number;
}

function PrizeRow({ prize, variant, color, delay }: PrizeRowProps) {
  const isFirst = prize.rank === "1st place";
  const { ref, revealed } = useScrollReveal<HTMLTableRowElement>(0.15);
  return (
    <tr ref={ref} className={`${styles.row} ${revealed ? styles.revealed : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <td>
        <div className={styles.rankRow}>
          <Satellite
            variant={variant}
            color={isFirst ? colorHighlight : color}
            size={rankSize(prize.rank)}
            glow={isFirst}
            className={styles.badge}
          />
          <div>
            <span className={styles.rank}>{prize.rank}</span>
            <span className={styles.winners}>{prize.winners}</span>
          </div>
        </div>
      </td>
      <td>
        <ul className={styles.items}>
          {prize.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export function Prizes() {
  return (
    <section className={styles.section} id="prizes">
      <Scrim>
        <h2 className={styles.heading}>Prizes</h2>
        <p className={styles.intro}>
          <strong>All prizes are non-cash</strong> — sponsor product credits, subscriptions, and
          licenses, matching Devpost's official prize disclosures.
        </p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Included</th>
            </tr>
          </thead>
          <tbody>
            {prizes.map((prize, i) => {
              const { variant, color } = satelliteFor("prizes", i);
              return <PrizeRow key={prize.rank} prize={prize} variant={variant} color={color} delay={i * 90} />;
            })}
          </tbody>
        </table>
      </Scrim>
    </section>
  );
}
