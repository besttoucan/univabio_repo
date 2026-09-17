# Build Prompt: UnivaBio Hackathon Website (v3 — white, f.inc-inspired)

Paste this whole file to your coding agent (Claude Code, Cursor, etc.) as the spec for the site.

## 0. Read this first: avoid the generic "AI-generated landing page" look

A first pass at this site came back visually generic — the kind of layout you'd get from typing "hackathon landing page" into any AI tool with zero art direction. Specifically avoid these tells:

- **The gradient pill button.** Teal-to-blue/purple gradient rounded-pill CTA buttons are the single most obvious "AI made this" signal right now. Do not use a gradient button anywhere on this site. Pick one flat accent color and use it consistently, or use an outlined/underline button style instead.
- **Dark navy background + single mint/teal accent + lavender secondary accent.** This exact palette (near-black navy `#0a0e17`-ish, mint `#5eead4`-ish, soft purple `#a78bfa`-ish) is the default output of most AI design tools right now. Choose a palette that doesn't map onto this — see Section 4 for direction.
- **Emoji as section icons** (🌱🤝🌍🎓 etc. sitting above card titles). Don't use emoji as UI icons. Either commission/describe real custom iconography (simple 1-2px stroke line icons in a single consistent style) or drop icons entirely and let typography and layout carry the section.
- **The "badge pill above a giant centered heading, centered subhead, row of stat pills" hero formula.** This is a template, not a design decision. Break the symmetry: off-center hero, asymmetric grid, a real image/photo/texture, or a headline that isn't dead-center.
- **Four (or three) identical rounded-corner cards in a row with a one-line title + one paragraph**, repeated for every content section (belonging section, judging criteria, etc.). If multiple sections all resolve to "N equal boxes in a row," the page reads as templated. Vary the layout section to section: alternate a full-bleed statement, an asymmetric two-column, a list, a table, a horizontal scroller — don't let every section be a card grid.
- **Generic decorative line-art** (a wireframe DNA double-helix made of two sine curves and horizontal rungs, or an abstract squiggle used as a section divider) used purely as filler in empty space. If you use an illustration, it should be specific and considered, not a placeholder shape filling negative space. It's fine to have no illustration at all — negative space is not a problem to solve.
- **Overly neat, evenly-spaced everything.** Real designed sites have intentional variation in rhythm — bigger jumps in section spacing, some sections denser than others, type sizes that aren't just "heading / subheading / body" on a rigid scale.

Concretely, before you start building, pick 2-3 real reference sites (award-winning small-studio/product sites, not other hackathon templates) and describe in one paragraph what specific typography, color, and layout choices you're borrowing and why they fit a biology + AI + health hackathon. Do this description as a short design-rationale comment at the top of the stylesheet/theme file so the choices are traceable, not just vibes.

## 1. Project summary

Build a single-page marketing/landing site for **UnivaBio**, a global online student hackathon (ages 13+) hosted by **BioCataalysis** in partnership with **UnivaDev**, on the theme **"Artificial Intelligence for Human Health."** Students design and build technical products (apps, websites, simulations, models) that help people detect illness earlier, understand it better, or live with it more easily.

The site is the primary recruiting/info page driving students to register on Devpost (`https://univabio.devpost.com/`). Devpost handles registration, submissions, and judging logistics — this site's only real conversion action is getting someone to click through to Devpost and register.

**Structural inspiration (information architecture only):** Cal Hacks (calhacks.io) — a long-scroll, single-page hackathon site with a hero, a stats band, a "why this event" section, a timeline/schedule, a venue/format section, a sponsors grid, an FAQ accordion, and a team/footer close. Borrow the section rhythm and content order only. Do not reuse Cal Hacks' illustration style, colors, copy, or branding — and per Section 0, don't replace it with a different but equally generic AI-template look either. This needs its own considered visual identity.

## 2. Section-by-section structure (content order — layout treatment should vary, per Section 0)

1. **Nav** — wordmark, in-page anchor links (About, Theme, Prizes, Schedule, Sponsors, FAQ), a "Register" action.
2. **Hero** — event name, theme line, tagline, key facts (dates, format, prize pool, eligibility), primary action linking to Devpost registration, secondary action to jump to schedule.
3. **Why this event / who it's for** — beginners welcome, AI coding assistants encouraged (with the "understand and be able to explain your own code" norm), global/online, ages 13+. Original wording — don't mimic Cal Hacks' "you belong here" phrasing.
4. **Stats band** — a handful of real numbers (see Section 3). Mark the participant count as a point-in-time figure with a date, since it changes.
5. **About the challenge / theme** — what the theme means, the kinds of projects that fit (AI EdTech, imaging classification, novel medical decision-support tools, accessibility tools), and the AI-assistant-use norm.
6. **Requirements / what to submit** — the four submission requirements.
7. **Schedule** — submissions open → submissions close → judging window → winners announced, with real dates.
8. **Prizes** — 1st/2nd/3rd place, the Momen no-code special prize, and the 100-winner Tin Computer credit, all clearly labeled non-cash.
9. **Judging criteria** — Idea & Innovation, Implementation, Health Impact & Rigor, Design & Usability, Presentation.
10. **Sponsors** — logo list linking out to each sponsor.
11. **Judges** (optional teaser, not the full list — keep the page from getting bloated).
12. **FAQ** — real accordion, grouped (General / Eligibility & Registration / Submission). Cover: who can participate, team size and cost (pull live from `/rules` — not fabricated here), online vs in-person, do you need a team, can you use AI tools, what do you submit, cash vs non-cash prizes.
13. **Footer** — host credit (BioCataalysis × UnivaDev), contact email, link to Devpost, copyright.

## 3. Verified content (from the live Devpost page — don't invent beyond this; re-check `/rules` and `/details/dates` live before writing copy you're unsure of)

- **Event name:** UnivaBio
- **Prize pool headline:** $40,000 in prizes — **all non-cash** (sponsor credits, subscriptions, licenses)
- **Tagline:** "Biology needs builders. UnivaBio brings students worldwide together to build tools that make healthcare smarter, earlier, and more accessible."
- **Theme:** Artificial Intelligence for Human Health
- **Hosts:** BioCataalysis and UnivaDev
- **Eligibility:** Ages 13+, students only, individuals or teams, companies/professional orgs excluded, open to all countries/territories except standard export-control exceptions
- **Format:** Online, public hackathon
- **Participants (point-in-time, as of Sep 17, 2026):** 555 — treat as live/approximate, not a hardcoded constant
- **Schedule:**
  - Submissions open: August 7 @ 12:00am EDT
  - Submissions close: October 6 @ 11:45pm EDT
  - Judging: October 7 @ 9:00am EDT – October 14 @ 11:45pm EDT
  - Winners announced: October 15 @ 9:00am EDT
- **Submission requirements:**
  1. Project — website, app, or coding prototype with user interaction
  2. Demo video — purpose, features, how users interact with it
  3. One-page project description (PDF)
  4. GitHub repo or code PDF
- **Prizes:**
  - 1st (1 winner): Momen Credits ($2,000), CodeCrafters 2-yr membership ($720), InterviewBuddy Credits ($70), Protoflow Credits ($300), Adaption Labs Credits ($800)
  - 2nd (1 winner): CodeCrafters 1-yr membership ($360), InterviewBuddy Credits ($45), Protoflow Credits ($150), Adaption Labs Credits ($800)
  - 3rd (1 winner): CodeCrafters 6-month membership ($180), InterviewBuddy Credits ($45), Protoflow Credits ($75), Adaption Labs Credits ($800)
  - Special Prize — Best No-code AI App built with Momen (1 winner): Momen Credits ($2,000)
  - Tin Computer Growth Credit (100 winners): $299 each ($29,900 total)
  - All non-cash — state this plainly, matching Devpost's disclosure.
- **Judging criteria:** Idea & Innovation; Implementation; Health Impact & Rigor; Design & Usability; Presentation.
- **Sponsors:** InterviewBuddy, Momen, CodeCrafters, Tin Computer, .xyz, DevSwarm, Protoflow, MeDo, Adaption Labs
- **Contact:** biocataalysis@gmail.com
- **Register link:** https://univabio.devpost.com/register (or link generally to https://univabio.devpost.com/)

Team size cap and any entry cost were not confirmed from the pages already fetched — pull live from `https://univabio.devpost.com/rules` before writing that FAQ copy.

## 4. Design direction — white-dominant, Founders Inc (f.inc) inspired

Target aesthetic: **f.inc** (foundersinc.com/f.inc) — confident, editorial, white-dominant, almost no chrome. Study it before building: it's mostly white/off-white space, tight black serif typography doing most of the work, thin hairline rules instead of boxes/cards, restrained (near-monochrome) color, and content laid out with generous margins rather than boxed into panels.

Concretely:

- **Background: white or a very slightly warm off-white** (not `#ffffff` flat if you want it to feel less clinical — something like `#fafaf8`–`#fcfcfa`). Text: near-black ink, not pure `#000`. One accent color used sparingly (a single deep blue or a single saturated color for links/small highlights only) — not a two-color gradient anywhere.
- **Typography carries the page.** Pair a serif display face for headlines (something with real character — a Founders-Grotesk-adjacent sans could work for labels/nav instead, but headlines should feel editorial, not like a SaaS product page) with a plain, high-legibility body serif or sans. Large, confident headline sizes; tight line-height; generous line-length control on body copy (don't let paragraphs run full-width on desktop).
- **Hairlines, not cards.** Prefer thin 1px borders/rules and whitespace to separate sections and list items over rounded-corner boxes with drop shadows or fills. If you need to group content, a thin top-rule + label is more in line with this aesthetic than a bordered card.
- **Layout: text-led, asymmetric, generous margins.** Avoid the centered-hero-with-stat-pills formula entirely here — look at how f.inc treats its hero (large left- or top-aligned headline, minimal supporting copy, no badge pill, no button gradient). Content blocks can be left-aligned with a lot of surrounding whitespace rather than centered on the page.
- **No emoji-as-icon, no gradient buttons, no filler line-art/decorative squiggles.** Buttons should be simple: black or ink-colored text/border, inverts on hover, no rounded-pill-gradient treatment.
- **Vary layout rhythm section-to-section** per Section 0 — not every section should resolve to a symmetric N-card grid; use lists, tables, a simple two-column text split, a horizontal rule-separated stack, etc.
- **Sponsor logos:** grayscale/monochrome wordmark-style treatment in a simple row or list rather than a boxed logo grid, consistent with the restrained palette — color only on hover if at all.
- **FAQ:** real accordion, styled with hairline dividers rather than bordered card rows.
- Mobile-responsive; on small screens, generous whitespace can compress but keep the text-led, uncluttered feel rather than defaulting to stacked cards.

## 5. Tech stack

- **TypeScript**, not plain JS. Use **Vite + React + TypeScript** for a static-hosted single-page site (or **Next.js + TypeScript** if the agent's environment/deployment target expects an app-router project — pick one and be consistent, don't mix).
- Component-driven: break the page into real components (`Hero.tsx`, `StatsBand.tsx`, `Schedule.tsx`, `Prizes.tsx`, `FAQ.tsx`, etc.) rather than one monolithic file.
- Styling: CSS Modules, Tailwind, or vanilla-extract are all fine — pick one and use it consistently. If Tailwind, still write custom design tokens (colors/type scale) rather than shipping default Tailwind grays/blues, since default Tailwind palettes are themselves a common "looks AI-made" tell.
- Strong typing for content: define a typed content model (e.g. `Prize`, `ScheduleEvent`, `FAQItem`, `Sponsor` interfaces) and populate it from a typed data file, so copy changes don't touch component logic.
- No backend needed — this is static/informational. All CTAs link out to `https://univabio.devpost.com/`.
- Don't fabricate image URLs for sponsor logos, judge photos, etc. — use typed placeholders (e.g. an explicit `logoUrl?: string` with a fallback wordmark treatment) until real assets are supplied.

## 6. Deliverable

A polished, deployable single-page TypeScript site that a first-time visitor could use to understand the hackathon and get to Devpost registration within under a minute — and that doesn't read as an AI-template output on first glance.
