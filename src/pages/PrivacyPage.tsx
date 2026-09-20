import { PageHeader } from "../components/PageHeader";
import { PageShell } from "../components/PageShell";
import { Prose } from "../components/Prose";
import { Reveal } from "../components/Reveal";
import { CONTACT_EMAIL, DEVPOST_URL } from "../content/content";
import styles from "./PrivacyPage.module.css";

export function PrivacyPage() {
  return (
    <PageShell current="/privacy/">
      <PageHeader
        kicker="Last updated 19 September 2026"
        title="Privacy"
        lede="No accounts, no forms, no database. This site is built to collect as little as technically possible."
      />

      <section className={`section ${styles.section}`}>
        <div className="page">
          <Reveal>
            <Prose>
              <h3>What this site collects</h3>
              <p>
                Nothing that identifies you. There are no cookies, no analytics, no advertising
                tags, and no tracking pixels on any page here. Nothing you do on this site is stored
                or sent anywhere by us.
              </p>

              <h3>What the host sees</h3>
              <p>
                Like any website, the server delivering these pages records ordinary request logs:
                IP address, time, the page requested, and browser user agent. Those logs exist for
                security and reliability, are kept by the hosting provider under its own retention
                policy, and are not used to profile visitors.
              </p>

              <h3>Third parties</h3>
              <p>
                The site loads its typefaces from Google Fonts, so your browser makes a request to
                Google when a page loads and Google receives your IP address and user agent as part
                of it. Sponsor logos are served from this site rather than from the sponsors, so
                viewing them tells those companies nothing. No other third-party service is embedded
                in these pages.
              </p>
              <p>
                Links out to{" "}
                <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
                  Devpost
                </a>
                , to sponsor sites, and to BioCataalysis take you onto services with their own
                privacy policies. Registration, submission and judging all happen on Devpost, so the
                data involved in entering the hackathon is governed by Devpost&rsquo;s policy rather
                than this one.
              </p>

              <h3>Email</h3>
              <p>
                If you write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, the
                organizers receive and keep that email in order to reply to you. It is not added to
                a mailing list and is not shared with sponsors.
              </p>

              <h3>Children</h3>
              <p>
                The hackathon is open to entrants aged 13 and over, and part of the audience for
                this site are minors. That is one of the reasons it collects nothing: there is no
                profile, no account, and no behavioral record to hold about anyone, whatever their
                age.
              </p>

              <h3>Changes</h3>
              <p>
                If this site ever starts using analytics or any other third-party service, this page
                will be updated before that goes live, and the date at the top will change with it.
              </p>

              <h3>Contact</h3>
              <p>
                Questions about this policy go to{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </Prose>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
