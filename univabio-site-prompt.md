# Build Prompt: UnivaBio Hackathon Website

Paste this whole file to your coding agent (Claude Code, Cursor, etc.) as the spec for the site.

## 1. Project summary

Build a single-page marketing/landing site for **UnivaBio**, an online, global student hackathon (ages 13+) hosted by **BioCataalysis** in partnership with **UnivaDev**, on the theme **"Artificial Intelligence for Human Health."** Students design and build technical products (apps, websites, simulations, models) that help people detect illness earlier, understand it better, or live with it more easily.

The site is the primary recruiting/info page that drives students to register on Devpost (`https://univabio.devpost.com/`). Devpost handles registration, submissions, and judging logistics — this site's only real CTA is "Register on Devpost" / "Join the hackathon," linking out.

**Structural inspiration:** Cal Hacks (calhacks.io) — a long-scroll, single-page hackathon site with a punchy hero, a stats band, a "why you belong here" section, a timeline/schedule strip, a venue/format section, a sponsors grid, an FAQ accordion, and a team/footer close. Borrow the *section rhythm and information architecture*, not the illustration style, copy, colors, or any Cal Hacks/UC Berkeley branding, imagery, or text. Do not reuse Cal Hacks' whimsical cloud/sky illustration motif or its exact wording — treat it only as a wireframe for what sections exist and in what order.

## 2. Section-by-section structure (in order)

1. **Nav bar** — logo/wordmark "UnivaBio," in-page links (About, Theme, Prizes, Schedule, Sponsors, FAQ), a persistent "Register" button linking to Devpost.
2. **Hero** — event name, one-line theme statement, key facts as a compact row (dates, format, prize pool, who can join), primary CTA button ("Register on Devpost") and secondary CTA ("View schedule").
3. **"Why UnivaBio" / belonging section** — short paragraph(s) on who this is for: beginners welcome, AI assistants encouraged, all skill levels, global/online, ages 13+. Keep it welcoming and low-barrier in tone, similar spirit to Cal Hacks' "You belong here" block but original wording.
4. **Stats band** — a row of 3–5 punchy numbers (e.g., prize pool, participant count, countries represented, online/global format, submission deadline). Only use verified numbers (see Section 3); don't invent counts.
5. **About the challenge** — theme explanation, what a project can look like (app, website, simulation, system, algorithm; e.g. AI EdTech, imaging classification model, novel medical concept), and the norm that using AI coding assistants is encouraged but hackers must understand and be able to explain their own code.
6. **Requirements / what to submit** — the four submission requirements as a clean checklist or card grid.
7. **Schedule/timeline strip** — Submissions open → Submissions close → Judging window → Winners announced, as a horizontal timeline or stepper (mirrors Cal Hacks' application-timeline graphic, but for this hackathon's actual dates).
8. **Prizes** — tiered cards: 1st, 2nd, 3rd place, the Momen no-code special prize, and the Tin Computer Growth Credit (100 winners). Clearly label all of these as non-cash prizes (sponsor credits/subscriptions), matching Devpost's disclosure.
9. **Judging criteria** — Idea & Innovation, Implementation, Health Impact & Rigor, Design & Usability, Presentation — as a 5-item grid with a one-line description each.
10. **Sponsors** — logo grid/wall, linking out to each sponsor's site.
11. **Judges** (optional, can be a "meet a few of our judges" teaser rather than the full ~28-person list, to avoid an overlong page) — photo, name, title.
12. **FAQ accordion** — grouped like Cal Hacks (e.g., General / Eligibility & Registration / Submission), covering: who can participate, team size (check Devpost rules page — not scraped here, so mark as TBD/pull from `/rules`), is it online or in-person (online), do I need a team, can I use AI tools, what do I submit, is there a cost, cash vs non-cash prizes.
13. **Footer** — UnivaBio/BioCataalysis + UnivaDev credit, contact email (`biocataalysis@gmail.com`), link back to the Devpost page, social links if available, copyright line.

## 3. Verified content to use (pulled from the live Devpost page — do not fabricate beyond this)

- **Event name:** UnivaBio
- **Prize pool headline:** $40,000 in prizes (all non-cash — sponsor credits, subscriptions, licenses)
- **Tagline:** "Biology needs builders. UnivaBio brings students worldwide together to build tools that make healthcare smarter, earlier, and more accessible."
- **Theme:** Artificial Intelligence for Human Health
- **Host organizations:** BioCataalysis and UnivaDev
- **Eligibility:** Ages 13+, students only, individuals or teams, companies/professional orgs excluded, open to all countries/territories except standard export-control exceptions
- **Format:** Online, public hackathon
- **Participants at time of writing:** 555 (this number will keep climbing — treat as a live stat, not a hardcoded constant, or clearly mark it as approximate/"as of [date]")
- **Schedule (2026):**
  - Submissions open: August 7, 2026 @ 12:00am EDT
  - Submissions close: October 6, 2026 @ 11:45pm EDT
  - Judging: October 7, 2026 @ 9:00am EDT – October 14, 2026 @ 11:45pm EDT
  - Winners announced: October 15, 2026 @ 9:00am EDT
- **Submission requirements:**
  1. Project — website, app, or other coding prototype with user interaction
  2. Demo video — explains purpose, shows features, shows how users interact with it
  3. One-page project description (PDF) — purpose + key features
  4. GitHub repo or code PDF — shows all code developed for the project
- **Prizes:**
  - 1st place (1 winner): Momen Credits ($2,000), CodeCrafters 2-yr membership ($720), InterviewBuddy Credits ($70), Protoflow Credits ($300), Adaption Labs Credits ($800)
  - 2nd place (1 winner): CodeCrafters 1-yr membership ($360), InterviewBuddy Credits ($45), Protoflow Credits ($150), Adaption Labs Credits ($800)
  - 3rd place (1 winner): CodeCrafters 6-month membership ($180), InterviewBuddy Credits ($45), Protoflow Credits ($75), Adaption Labs Credits ($800)
  - Special Prize — Best No-code AI App built with Momen (1 winner): Momen Credits ($2,000)
  - Tin Computer Growth Credit (100 winners): $299 Tin Computer Growth Credit each ($29,900 total)
  - All prizes are explicitly non-cash (sponsor product credits/subscriptions/licenses); state this clearly near the prize section, matching Devpost's disclaimer.
- **Judging criteria:** Idea & Innovation, Implementation, Health Impact & Rigor, Design & Usability, Presentation (descriptions in Section 2, item 9 above)
- **Sponsors:** InterviewBuddy, Momen, CodeCrafters, Tin Computer, .xyz, DevSwarm, Protoflow, MeDo, Adaption Labs
- **Contact:** biocataalysis@gmail.com
- **Register link:** https://univabio.devpost.com/ (Devpost's own "Join Hackathon" button handles registration once a user lands there — don't fabricate a `/register` subpath unless you confirm it resolves)

Anything not listed here (exact team-size cap, whether there's a cost to enter, full judge bios, full rules) — pull live from `https://univabio.devpost.com/rules` and `/details/dates` before writing copy, rather than guessing.

## 4. Design direction

- Single-page, long-scroll layout with anchor-linked nav, similar rhythm to calhacks.io (hero → belonging blurb → stats → about → timeline → prizes → sponsors → FAQ → footer).
- Original visual identity — do not copy Cal Hacks' sky/cloud illustration theme, color palette, fonts, or character art. Pick a palette and motif that fits a biology + AI + health hackathon (e.g., a clean scientific/clinical-modern look — could lean into DNA helix / cell / pulse-line motifs, or a more minimal medical-tech aesthetic). Pick one direction and stay consistent.
- Mobile-responsive; the timeline/schedule section and prize cards should degrade gracefully to a stacked layout on small screens.
- FAQ as a real accordion (click to expand/collapse), grouped by category as in Cal Hacks' example.
- Sponsor logos in a clean grid, each linking out in a new tab.
- Keep copy honest and non-cash prizes clearly labeled as such — don't imply a cash prize pool.

## 5. Tech constraints

- Build as a single self-contained HTML/CSS/JS page (or React if the agent's environment supports it) — no backend needed, this is a static informational site.
- All sponsor/judge logos and photos should be treated as placeholders/linked images unless real assets are provided — don't fabricate image URLs.
- Every stat or date used must trace back to Section 3 above or a live fetch from the Devpost pages; flag anything uncertain instead of inventing it.
- Primary and repeated CTA should link to `https://univabio.devpost.com/` (or the specific register URL).
- The schedule/timeline and any countdown should be date-aware, not a static "X days left": compute against the visitor's current date so the site degrades gracefully (e.g. show "Submissions closed — judging in progress" or "Winners announced" states) if it's viewed after a phase has passed, rather than displaying stale numbers.

## 6. Deliverable

A polished, deployable single-page site (plus any supporting assets) that a first-time visitor could use to understand the hackathon and register within under a minute.
