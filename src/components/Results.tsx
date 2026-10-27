import { DEVPOST_GALLERY_URL, EVENT_PHASE, scheduleEvents, winners } from "../content/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import styles from "./Results.module.css";

const announced = scheduleEvents.find((event) => event.id === "winners");

/** What came out of the event. Empty while submissions are still open. */
export function Results({ index = "03" }: { index?: string }) {
  if (EVENT_PHASE === "open") return null;
  const results = EVENT_PHASE === "results";

  return (
    <section className="section" id="results" aria-labelledby="results-title">
      <div className="page">
        <SectionHead
          index={index}
          id="results-title"
          label={results ? "Results" : "Submissions"}
          title={results ? <>What students <em>grew.</em></> : <>Submissions are <em>in.</em></>}
          lede={
            results
              ? `Winners were announced on ${announced?.dateLabel}, on the Devpost listing.`
              : `Judging is under way. Winners are announced on ${announced?.dateLabel}.`
          }
        />

        {results && winners.length ? (
          <ol className={styles.winners}>
            {winners.map((winner, i) => (
              <Reveal
                as="li"
                key={winner.project}
                className={`${styles.winner} ${winner.place ? styles.placed : ""}`}
                delay={i * 80}
              >
                <p className={`mono ${styles.prize}`}>{winner.prize}</p>
                <h3 className={styles.project}>
                  <a href={winner.href} target="_blank" rel="noopener noreferrer">
                    {winner.project} ↗
                  </a>
                </h3>
                <p className={styles.team}>
                  {winner.team}
                  {winner.track ? ` · ${winner.track}` : ""}
                </p>
              </Reveal>
            ))}
          </ol>
        ) : (
          <Reveal className={styles.gallery}>
            <p>
              {results
                ? "Every winning project, with its demo video and code, is on the Devpost gallery."
                : "Every submitted project is on the Devpost gallery while the judges score them."}
            </p>
            <a className="btn" href={DEVPOST_GALLERY_URL} target="_blank" rel="noopener noreferrer">
              {results ? "See the winners ↗" : "Browse submissions ↗"}
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
