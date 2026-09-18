import { scheduleEvents } from "../content/content";
import { Satellite } from "../illustrations/objects/Satellite";
import { satelliteFor } from "../illustrations/objects/satellitePalette";
import { NucleusPlanet } from "../illustrations/objects/NucleusPlanet";
import { useScheduleStatus } from "../hooks/useScheduleStatus";
import { Reveal } from "./Reveal";
import { Scrim } from "./Scrim";
import styles from "./Schedule.module.css";

export function Schedule() {
  const { states, message } = useScheduleStatus(scheduleEvents);

  return (
    <section className={styles.section} id="schedule">
      <NucleusPlanet className={`${styles.planet} drift-a`} />
      <Scrim>
        <div className={styles.headingRow}>
          <h2 className={styles.heading}>Schedule</h2>
        </div>
        <p className={styles.status}>{message}</p>

        <div className={styles.list}>
          {scheduleEvents.map((event, i) => {
            const { variant, color } = satelliteFor("schedule", i);
            return (
              <Reveal className={`${styles.step} ${styles[states[event.id]]}`} key={event.id} delay={i * 90}>
                <Satellite variant={variant} color={color} size="sm" className={styles.milestone} />
                <span className={`label ${styles.date}`}>{event.dateLabel}</span>
                <span className={styles.title}>{event.title}</span>
              </Reveal>
            );
          })}
        </div>
      </Scrim>
    </section>
  );
}
