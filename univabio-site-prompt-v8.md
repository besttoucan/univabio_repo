# Build Prompt: UnivaBio Hackathon Website (v8 — fix tone/color, make AI×Bio unmistakable, TreeHacks-style scroll choreography)

Paste this whole file to your coding agent (Claude Code, Cursor, etc.) as the spec for the site. This version keeps the body→bloodstream→cell→DNA descent narrative from v7, but fixes three concrete problems with the last build: **it read as childish, the colors didn't work together, and it was hard to tell this is an AI×biology hackathon until you'd scrolled a long way down.** Read Section 0 first — it's the most important part of this revision.

## 0. Read this first — what's actually wrong with the current build, and the fix

**Problem 1: it looks childish.** This is almost always caused by one or more of: (a) raster "sticker" illustrations — flat cute PNG/SVG assets (rounded planets, smiling icons, bouncy shapes) pasted onto the page like clip art, rather than a consistent hand-drawn line system; (b) rounded, bouncy proportions on shapes/icons; (c) too many colors at similar saturation with no hierarchy. **Fix:** every illustrated element on this site should be built from the *same* vector line system at a consistent stroke weight (the branch/vessel/DNA generator from earlier versions) — not a mix of custom "cute" icon assets. Crisp, precise, slightly clinical line-art reads as credible and scientific; rounded cartoon shapes read as childish. When in doubt, make it more precise and less bouncy.

**Problem 2: the colors don't work together.** Fix by constraining the entire site to **exactly three colors, used in fixed roles, everywhere:**
- **Paper** — the background. A single off-white, e.g. `#f6f5f0`.
- **Ink** — all text and most line-art. A single near-black, e.g. `#15140f` (not pure `#000`).
- **One accent** — used only for: the accent mark/logo, hover states, links, and the "merge" moments in the illustrated journey where biology becomes circuitry. Pick ONE of these (don't blend or gradient between them):
  - A deep clinical blue (`#1d3557`-ish) — reads as trustworthy/medical.
  - A lab amber (`#c98a2c`-ish) — reads as warm, warning-label/specimen-tag adjacent.
  - A bioluminescent green (`#2f6b4f`-ish, kept dark/muted, not neon) — reads as literally biological.
  
  Whichever you pick, it must never appear as a gradient, never pair with a second competing accent, and should cover well under 10% of any given viewport — it's a highlight color, not a fill color. This single constraint (3 colors, fixed roles, one accent used sparingly) will do more to fix "colors don't work together" than any other single change.

**Problem 3: hard to tell this is AI×biology.** In the v7 draft, the "biology becomes circuitry" merge only paid off at the very bottom of the page (FAQ/footer) — so a visitor has to scroll almost the whole site before the theme is legible. **Fix:** the AI×biology fusion needs to be visible **immediately, in the hero**, not just as a final reveal. Build one small, unambiguous "fusion" motif and use it as a recurring mark throughout the site (not just the climactic ending):
- Examples of a legible fusion motif (pick one, refine it, reuse it — logo mark, hero centerpiece, section-divider glyph, favicon): a DNA double helix where the connecting rungs are drawn as circuit traces/nodes instead of plain bars; a cell with a nucleus rendered as a small chip/die pattern; a pulse/EKG line that resolves into a waveform-meets-signal-graph. Whatever you pick, it should be identifiable as "biology + computation" in under two seconds, at small size (e.g. as a favicon or nav mark), not just as a large detailed illustration.
- Place a (small, restrained — not a childish badge-pill per Section 0's older rule) version of this mark in the **nav/wordmark and the hero**, so the theme reads instantly, before the visitor has scrolled at all. The full descent narrative (Section 4b, from v7) is still the payoff for scrolling — but the visitor shouldn't need to reach the payoff to know what the hackathon is about.

Also still true from earlier versions — don't reintroduce these: gradient pill buttons, emoji-as-icon, the badge-pill-centered-hero-with-stat-pills formula, every section resolving to N identical cards in a row.

## 1. Project summary

Single-page site for **UnivaBio**, a global online student hackathon (ages 13+) hosted by **BioCataalysis** × **UnivaDev**, theme **"Artificial Intelligence for Human Health."** Primary goal: get visitors to understand the event and click through to register on Devpost (`https://univabio.devpost.com/`).

**Structural inspiration:** Cal Hacks (calhacks.io) for section order and the continuous-background-scene idea; **TreeHacks (treehacks.com)** as an additional reference specifically for scroll *choreography* — see Section 4c. Do not copy either site's actual illustration assets, palette, or copy; TreeHacks in particular leans playful/cute (rounded planets, bouncy rockets, "made with 💕") — borrow only its technique (staged, parallax-timed illustrated elements tied to specific content beats as you scroll), not its tone, which would reintroduce Problem 1 above.

**Visual base:** three-color paper/ink/accent system (Section 0), serif display headlines, hairline rules instead of cards, and the recurring DNA-circuit fusion mark, present from the hero onward and continuing through the full descent narrative.

## 2. Section-by-section structure (content order, unchanged)

1. Nav — wordmark (incorporating the fusion mark), anchor links, Register action.
2. Hero — event name, theme line, tagline, key facts, primary CTA to Devpost. Fusion mark visible here.
3. Why this event / who it's for.
4. Stats band.
5. About the challenge / theme.
6. Requirements / what to submit.
7. Schedule.
8. Prizes (all non-cash — label clearly).
9. Judging criteria.
10. Sponsors.
11. Judges (optional teaser).
12. FAQ (real accordion).
13. Footer.

## 3. Verified content

Same verified facts as prior versions — dates, prizes, sponsors, judging criteria, eligibility, requirements. Re-fetch `https://univabio.devpost.com/`, `/details/dates`, and `/rules` live rather than guessing if you don't already have your working content file.

## 4a. Base aesthetic

- **Exactly three colors** (Section 0): paper background, ink text/line-art, one accent used sparingly.
- Serif display headline face paired with a plain, legible body face — should read credible/editorial, not playful.
- Hairline 1px rules instead of bordered/shadowed cards.
- Text-led, asymmetric layout with generous margins; vary layout rhythm per section instead of repeating card grids.
- No emoji icons, no gradient buttons, no rounded "sticker" illustration assets — every illustrated element comes from the same precise vector line system.

## 4b. The continuous descent narrative (carried over from v7, unchanged in substance)

Scrolling is a journey descending in scale: hero (person, surface) → why/stats (beneath the skin, into the bloodstream — branching vessel lines) → about (crossing a cell membrane) → requirements/schedule (inside the cell, quiet organelle shapes in the margins) → prizes/judging (chromatin/DNA, branching intensifies) → sponsors (DNA rungs start reading as circuit nodes) → FAQ/footer (full fusion: unambiguously both molecular and networked at once). Full detail in v7 Section 4b — carry it forward as-is, with two changes per Section 0: (1) the fusion motif must also appear early (hero/nav), not only at the end, and (2) constrain every stage to the three-color system.

## 4c. Scroll choreography — what to borrow from TreeHacks specifically

TreeHacks' page is built from **distinct illustrated elements positioned throughout the scroll, each one timed to reveal, move, or settle into place as its related content scrolls into view** — a rocket near the date announcement, planets around the stats, a laptop near a video, tree/foliage framing the edges. Each section has its own small cast of 1–3 illustrated elements that are clearly *about* that section's content, rather than one abstract background running underneath everything uniformly. Borrow that structure, not its cute-sticker execution:

- For each of the 13 sections, define **1–3 small illustrated elements** (drawn from the same line-art vessel/DNA/circuit system, not new assets) that are specific to that section's content and that reveal/parallax into position as the section scrolls into view — e.g. near the Schedule section, a small branching timeline-as-vessel graphic that grows left-to-right as you scroll through the dates; near Prizes, three small chromatin/node clusters positioned near the 1st/2nd/3rd cards; near Sponsors, the DNA-to-circuit transition rendered small next to the logo list.
- Use **staged reveals** (elements fade/slide/grow into place once, as the section enters the viewport, then hold still) rather than continuous looping motion — this matches TreeHacks' "things arrive as you scroll to them" feeling without needing constant animation, which keeps performance and legibility (Section 0, Problem 2/3) intact.
- Keep the **overall throughline** (the body→cell→DNA descent, Section 4b) as the connective tissue between these staged moments — think of it as one continuous vessel/branch system that runs down the page, with each section's specific illustrated elements branching off of it at the relevant point, similar to how TreeHacks' discrete illustrated moments still sit within one continuous dark background "space" the whole way down.
- Still respect `prefers-reduced-motion`: render each section's elements in their final settled position with no reveal animation.

## 5. Tech stack

- **TypeScript**, Vite + React + TypeScript (or Next.js + TypeScript — pick one, stay consistent).
- Continuous background scene as segmented SVG zones (per v7 Section 5), plus **per-section illustrated elements** as their own small typed components (e.g. `ScheduleVessel.tsx`, `PrizeNodeCluster.tsx`, `SponsorFusionMark.tsx`) that all consume the same shared branch/DNA generator utility rather than being hand-built one-offs — this is what keeps 13 sections' worth of illustration feeling like one system instead of a grab-bag (directly addresses Problem 1).
- Scroll-linking: `IntersectionObserver` to trigger each section's staged reveal once (not repeatedly) as it enters the viewport; CSS `animation-timeline: scroll()`/`view()` where supported for the smooth continuous parts of the descent (Section 4b); throttle any JS scroll listeners via `requestAnimationFrame`.
- Centralize the three-color system as design tokens (`--color-paper`, `--color-ink`, `--color-accent`) at the top of your theme file — no component should introduce a color outside these three.
- Typed content models as before: `Prize`, `ScheduleEvent`, `FAQItem`, `Sponsor`.
- No backend needed. All CTAs link to `https://univabio.devpost.com/`.

## 6. Deliverable

A polished, deployable single-page TypeScript site where the AI×biology theme is legible from the first screen (via a small recurring DNA-circuit fusion mark in the nav/hero), the palette is disciplined to three colors in fixed roles so nothing clashes, every illustrated element comes from one consistent precise line-art system (not rounded "sticker" assets, which is what was reading as childish), and scrolling feels like a choreographed, TreeHacks-style journey — discrete illustrated moments tied to each section's content, strung together along the continuous body→cell→DNA descent from v7 — rather than a static page or a single undifferentiated background animation.
