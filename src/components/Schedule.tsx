import { scheduleEvents } from "../content/content";
import { useScheduleStatus } from "../hooks/useScheduleStatus";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Schedule.module.css";

const stateLabel: Record<string, string> = {
  done: "Done",
  active: "Now",
  upcoming: "Next",
};

export function Schedule({ index = "02" }: { index?: string }) {
  const { states } = useScheduleStatus(scheduleEvents);

  return (
    <section className="section" id="timeline" aria-labelledby="schedule-title">
      <div className="page">
        <SectionHead
          index={index}
          id="schedule-title"
          label="Timeline"
          title={<>The <em>dates.</em></>}
          lede="All times Eastern. The marker below reads your clock, so it is always the current phase."
        />

        <ol className={styles.track}>
          {scheduleEvents.map((event, i) => {
            const state = states[event.id] ?? "upcoming";
            return (
              <Reveal
                as="li"
                className={`${styles.step} ${styles[state]}`}
                key={event.id}
                delay={i * 110}
              >
                <span className={styles.rail} aria-hidden="true">
                  <span className={styles.node} />
                </span>
                <span className={`mono ${styles.state}`}>{stateLabel[state]}</span>
                <h3 className={styles.title}>{event.title}</h3>
                <p className={`mono ${styles.date}`}>{event.dateLabel}</p>
                <p className={styles.detail}>{event.detail}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
