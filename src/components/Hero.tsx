import { EVENT_PHASE, metaStrip, phaseChip, phaseCta, scheduleEvents, stats } from "../content/content";
import { BioSticker } from "../marks/BioSticker";
import { Reveal } from "./Reveal";
import styles from "./Hero.module.css";

// The console reads from the same content as the rest of the page, so it cannot drift.
const lines: { kind: "cmd" | "ok" | "live"; text: string }[] = [
  { kind: "cmd", text: "univabio status --all" },
  ...stats.map((s) => ({ kind: "ok" as const, text: `${s.prefix ?? ""}${s.value.toLocaleString("en-US")} ${s.label.toLowerCase()}` })),
  ...scheduleEvents.slice(1).map((e) => ({
    kind: e.id === "winners" ? ("live" as const) : ("ok" as const),
    text: `${e.title.toLowerCase()} · ${e.dateLabel.replace("From ", "")}`,
  })),
];

/** The mascot: a cartoon microbe with cilia, drawn in the page's ink-and-pastel style. */
function Microbe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" stroke="#17131f" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <path d="M18 60 8 66M20 46 8 42M34 24 28 12M58 16V4M82 22 90 10M100 40l12-4M102 58l12 4" />
      <path
        d="M60 18c22 0 42 12 42 36 0 22-18 36-42 36S16 78 18 54c2-22 20-36 42-36Z"
        fill="#c9f2dc"
      />
      <circle cx="40" cy="64" r="7" fill="#ffd3e4" stroke="none" />
      <circle cx="84" cy="64" r="7" fill="#ffd3e4" stroke="none" />
      <circle cx="48" cy="50" r="5" fill="#17131f" stroke="none" />
      <circle cx="74" cy="50" r="5" fill="#17131f" stroke="none" />
      <circle cx="50" cy="48" r="1.6" fill="#fff" stroke="none" />
      <circle cx="76" cy="48" r="1.6" fill="#fff" stroke="none" />
      <path d="M54 64q7 7 14 0" />
      <circle cx="78" cy="30" r="4" fill="#e2d8ff" strokeWidth="2" />
    </svg>
  );
}

/** Text left, a lab console window right. The Organism breathes behind both. */
export function Hero() {
  const cta = phaseCta[EVENT_PHASE];

  return (
    <section className={styles.hero} id="top">
      <div className={`page ${styles.inner}`}>
        <div className={styles.copy}>
          <Reveal className={`pill ${styles.kicker}`}>
            <span className={styles.dot} aria-hidden="true" />
            BioCataalysis &times; UnivaDev
          </Reveal>

          <Reveal variant="wipe" as="h1" className={styles.title} delay={80}>
            Intelligence, <em>alive.</em>
          </Reveal>

          <Reveal delay={200}>
            <p className={styles.sub}>
              UnivaBio is an online hackathon where students worldwide build artificial intelligence
              for human health.
            </p>
          </Reveal>

          <Reveal as="ul" className={`metaStrip ${styles.strip}`} delay={260}>
            {metaStrip.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </Reveal>

          <Reveal className={styles.actions} delay={320}>
            <div className={styles.buttons}>
              <a className="btn" href={cta.href} target="_blank" rel="noopener noreferrer">
                {cta.label} ↗
              </a>
              <a className="btn btn--line" href="/#results">
                {{ open: "How to enter", judging: "Submissions", results: "Results" }[EVENT_PHASE]}
              </a>
            </div>
            <p className={`mono ${styles.chip}`}>{phaseChip[EVENT_PHASE]}</p>
          </Reveal>
        </div>

        <Reveal className={styles.consoleWrap} delay={380}>
          <Microbe className={styles.microbe} />
          <BioSticker kind="dna" className={styles.dna} />
          <BioSticker kind="virus" className={styles.virus} />
          <div className={styles.console}>
            <div className={styles.bar} aria-hidden="true">
              <i />
              <i />
              <i />
              <span>specimen-console — zsh</span>
            </div>
            <ol className={styles.screen} aria-label="Event status">
              {lines.map((l, i) => (
                <li key={l.text} className={styles[l.kind]} style={{ animationDelay: `${600 + i * 160}ms` }}>
                  {l.text}
                </li>
              ))}
              <li className={styles.cmd} style={{ animationDelay: `${600 + lines.length * 160}ms` }}>
                <span className={styles.cursor} aria-hidden="true" />
              </li>
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
