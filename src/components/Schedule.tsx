import { scheduleEvents } from "../content/content";
import { useScheduleStatus } from "../hooks/useScheduleStatus";
import styles from "./Schedule.module.css";

export function Schedule() {
  const { states, message } = useScheduleStatus(scheduleEvents);

  return (
    <section className={styles.section} id="schedule">
      <div className="container">
        <h2 className={styles.heading}>Schedule</h2>
        <p className={styles.status}>{message}</p>

        <div className={styles.list}>
          {scheduleEvents.map((event) => (
            <div className={`${styles.step} ${styles[states[event.id]]}`} key={event.id}>
              <span className={`label ${styles.date}`}>{event.dateLabel}</span>
              <span className={styles.title}>{event.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
