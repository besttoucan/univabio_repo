import { Faq } from "../components/Faq";
import { PageHeader } from "../components/PageHeader";
import { PageShell } from "../components/PageShell";
import { Prose } from "../components/Prose";
import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { DEVPOST_RULES_URL, DEVPOST_URL, judgingCriteria, scheduleEvents } from "../content/content";
import styles from "./RulesPage.module.css";

/**
 * A plain-language summary of the official Devpost rules, with the questions
 * people actually ask underneath it. Anything the listing does not state is
 * named as uncovered rather than invented.
 */
export function RulesPage() {
  return (
    <PageShell current="/rules/">
      <PageHeader
        kicker="The binding version lives on Devpost"
        title="Rules & FAQ"
        lede={
          <>
            This page restates the{" "}
            <a href={DEVPOST_RULES_URL} target="_blank" rel="noopener noreferrer">
              official rules
            </a>{" "}
            in plain language. Where the two disagree, Devpost wins.
          </>
        }
      />

      <section className="section" aria-labelledby="rules-title">
        <div className="page">
          <SectionHead
            index="01"
            id="rules-title"
            label="Rules"
            title={<>The <em>rules.</em></>}
            lede="Who can enter, what counts as an entry, and what the listing keeps to itself."
          />

          <div className={styles.layout}>
            <Reveal>
              <Prose>
                <h3>Who can enter</h3>
                <ul>
                  <li>Students aged 13 and over.</li>
                  <li>
                    Any country or territory, except those covered by the standard export-control
                    exceptions listed on Devpost.
                  </li>
                  <li>Solo entrants and teams are both allowed.</li>
                  <li>Companies and professional organizations cannot enter.</li>
                </ul>

                <h3>What counts as an entry</h3>
                <p>
                  A working technical project on the theme of artificial intelligence for human
                  health, plus three supporting files. All four are uploaded to Devpost.
                </p>
                <ul>
                  <li>
                    A website, app, or coding prototype with real user interaction. A design mockup
                    on its own does not qualify.
                  </li>
                  <li>A demo video explaining the purpose, the features, and how a person uses it.</li>
                  <li>A one-page PDF describing the purpose and key features.</li>
                  <li>A GitHub repository, or a PDF containing all of the code written for it.</li>
                </ul>

                <h3>Using AI assistants</h3>
                <p>
                  Building with AI assistants is explicitly encouraged. The organizers want the
                  technical barrier low enough that a beginner with an ambitious idea can ship
                  something real. The condition attached is understanding: you should be able to
                  walk a judge through your own code and explain why it works the way it does.
                </p>

                <h3>How entries are scored</h3>
                <p>
                  Five criteria, five points each, {judgingCriteria.length * 5} points in total. No
                  criterion is weighted above the others.
                </p>
                <ul>
                  {judgingCriteria.map((criterion) => (
                    <li key={criterion.title}>
                      <strong>{criterion.title}.</strong> {criterion.description}
                    </li>
                  ))}
                </ul>

                <h3>Prizes</h3>
                <p>
                  Every prize is non-cash: sponsor product credits, subscriptions, software
                  licenses, domains, and similar benefits. None of it can be exchanged or redeemed
                  for cash. 104 entrants receive something, because the Tin Computer growth credit
                  alone is awarded to 100 of them.
                </p>

                <h3>Dates</h3>
                <ul>
                  {scheduleEvents.map((event) => (
                    <li key={event.id}>
                      <strong>{event.title}:</strong> {event.dateLabel}. {event.detail}
                    </li>
                  ))}
                </ul>

                <h3>What this page does not cover</h3>
                <p>
                  Some terms are set by the official listing and are deliberately not paraphrased
                  here, because a summary that drifts out of date is worse than no summary. Read
                  these on Devpost before you enter:
                </p>
                <ul>
                  <li>Maximum team size.</li>
                  <li>Intellectual property and ownership of submitted work.</li>
                  <li>Any entry fee, disqualification, and dispute terms.</li>
                  <li>How and when prizes are delivered to winners.</li>
                </ul>
              </Prose>
            </Reveal>

            <Reveal className={styles.rail} delay={120}>
              <p className={styles.railTitle}>At a glance</p>
              <p className={styles.railFact}>
                <span>Deadline</span>
                <span className={styles.railValue}>Oct 6, 2026</span>
              </p>
              <p className={styles.railFact}>
                <span>Eligibility</span>
                <span className={styles.railValue}>Students 13+</span>
              </p>
              <p className={styles.railFact}>
                <span>Format</span>
                <span className={styles.railValue}>Online</span>
              </p>
              <p className={styles.railFact}>
                <span>Scoring</span>
                <span className={styles.railValue}>25 points</span>
              </p>
              <a
                className={`btn ${styles.railCta}`}
                href={DEVPOST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full rules
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <Faq index="02" />
    </PageShell>
  );
}
