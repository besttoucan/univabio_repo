# Build Prompt: UnivaBio Hackathon Website (v9 — colorful, illustrated, TreeHacks-energy)

Paste this whole file to your coding agent as the spec for the site. **This version replaces v8's color approach.** v8 overcorrected — in trying to fix "childish," it ended up gray, sparse, and lifeless (thin gray branch lines on off-white with almost no color or imagery). The actual problem was never "has color" — TreeHacks is colorful, illustrated, and full of distinct graphics, and it doesn't read as childish; it reads as fun and crafted. What made earlier UnivaBio drafts childish was **generic, low-effort, mismatched elements** (emoji, gradient pill buttons, a single vague squiggle), not color itself. This version brings back real color and real per-section illustration — just built with the specificity and craft that were missing before.

## 0. What actually went wrong, twice — and the actual fix

- **First mistake (v1–v7):** too many small template tells (gradient buttons, emoji icons, generic squiggle line-art, badge-pill hero) — read as generic/childish.
- **Second mistake (v8):** overcorrected by stripping out color and imagery almost entirely — read as empty/unfinished, not "clean."
- **The actual fix:** go colorful and illustration-rich like TreeHacks, but make every graphic **specifically about AI×biology** and drawn in **one consistent illustration style** (see Section 4b) so it reads as one crafted system, not a grab-bag of stock icons. Specificity + consistency is what makes a colorful, busy page feel designed instead of childish — not the absence of color.

Still avoid: emoji-as-icon, gradient pill buttons with no other design behind them, a bare centered-badge hero, and reusing literal TreeHacks assets (rockets/planets/palm trees) or CalHacks assets — build your own cast of graphics themed to biology and AI (Section 4b).

## 1. Project summary

Single-page site for **UnivaBio**, a global online student hackathon (ages 13+) hosted by **BioCataalysis** × **UnivaDev**, theme **"Artificial Intelligence for Human Health."** Goal: visitors understand the event fast and click through to register on Devpost (`https://univabio.devpost.com/`).

**References:**
- **Cal Hacks (calhacks.io)** — section order, and the idea of one continuous scene running behind the whole page.
- **TreeHacks (treehacks.com)** — the *amount* and *style* of visual richness to aim for: real color, a distinct illustrated graphic near almost every content beat (their rocket near the date, planets near stats, icon per track, artwork per FAQ item), not a mostly-bare page with one thin recurring line motif.

Build UnivaBio's own cast of graphics in Section 4b's palette/style — don't reuse either site's actual assets.

## 2. Section-by-section structure (unchanged)

1. Nav — wordmark with a small colored fusion-mark icon (DNA helix with circuit-node rungs), anchor links, Register button.
2. Hero — event name, theme line, tagline, key facts, primary CTA. A real illustrated centerpiece graphic here (Section 4b), not a single gray line.
3. Why this event / who it's for — each point gets a small themed icon/graphic, not just text.
4. Stats band — numbers can carry color (each stat in a different accent from the palette, or one consistent accent — either works, just make a call and be consistent).
5. About the challenge / theme — a larger illustrated centerpiece (e.g. a colored cell-cross-section or DNA-to-circuit graphic) alongside the copy.
6. Requirements / what to submit — four items, each with its own small distinct icon (a folder/project icon, a play-button/video icon, a document icon, a code-bracket icon — rendered in the site's illustration style, not generic stock icon-font glyphs).
7. Schedule — a colored horizontal timeline/graphic, not just a bare stepper.
8. Prizes — each tier gets its own small graphic treatment (e.g. color-coded by rank).
9. Judging criteria — five criteria, each with a small themed icon.
10. Sponsors — logos can stay simple/monochrome here (sponsors' own branding takes priority) but the section framing can still use the illustration system.
11. Judges (optional teaser).
12. FAQ — a small themed graphic per question or per group, echoing TreeHacks' per-question artwork, in this site's own style.
13. Footer — a closing illustrated moment (a "signal fading out" or "cell dividing into the credits" type visual).

## 3. Verified content

Same verified facts as prior versions — dates, prizes, sponsors, judging criteria, eligibility, requirements. Re-fetch `https://univabio.devpost.com/`, `/details/dates`, and `/rules` live if you don't already have a working content file.

## 4a. Color system — real color, still cohesive

Replace v8's near-monochrome 3-color rule with a proper illustration palette, built the way a designed infographic/illustration system is built (think Stripe's or Notion's illustration palettes — vivid but curated, never random):

- **One base:** either a warm paper/off-white (`#f6f5f0`-ish) for a light site, or a deep ink navy (`#12152b`-ish) for a dark one — pick one direction and commit, don't mix light and dark sections arbitrarily.
- **A curated accent set of 4–5 colors**, chosen to feel like they belong to one biotech/AI illustration system, not a random rainbow — for example: an electric blue (AI/circuit imagery), a coral or warm red (blood/vascular imagery), a teal or green (cellular/biological imagery), a violet (the "fusion"/DNA-as-signal moments), and a amber/gold used sparingly for highlights or CTA emphasis. Assign colors *semantically* — the same color should mean the same thing everywhere it appears (e.g. teal = biological structures, blue = circuit/data structures, violet = the moments where the two merge) so the palette reinforces the theme instead of just decorating the page.
- Neutral ink/charcoal for body text regardless of section background, for legibility.
- Gradients are fine here **within** a single illustration (e.g. a cell shaded teal-to-green, a circuit trace shaded blue-to-violet) — what to still avoid is the specific "gradient pill button" cliché (Section 0) and a gradient spanning unrelated colors with no relationship to the imagery.

## 4b. Illustration system — colorful, specific, consistent

**One consistent illustration style, applied to many distinct graphics.** Define the style once (e.g.: flat vector shapes with a single consistent stroke weight, soft consistent shading/gradient rule, consistent corner treatment) and then draw a real cast of distinct graphics in that style — the opposite of both earlier mistakes (not generic clip-art-mixed-styles, and not "just one thin line reused everywhere").

Concrete cast of graphics to design, all in the semantic color system above (Section 4a) and all recognizably biology+AI, not generic:
- **DNA-circuit fusion mark** — the recurring logo/nav icon (helix with circuit-trace rungs), used small and consistently.
- **Hero centerpiece** — a larger, real illustration: e.g. a cross-section of a cell where the internal structures are rendered partly as organelles and partly as circuit/chip patterns, in full color per the palette. This should be the single most detailed graphic on the page — it's the first thing people see and needs to sell the theme immediately.
- **Section-specific icons** — requirements (4 icons), judging criteria (5 icons), "why this event" (3–4 icons) — small, distinct, same style, same color logic.
- **Schedule graphic** — a colored branching/vascular timeline (carries over the branch-generator idea from earlier versions, now rendered in color instead of gray) marking submissions-open → close → judging → winners.
- **Prize tier graphics** — small distinct marks per tier (e.g. a molecule cluster that gets denser/more colorful for 1st place).
- **Section transition motifs** — as the page moves through "About" (cell), "Prizes/Judging" (chromatin/DNA), "Sponsors" (DNA-to-circuit), keep the body→cell→DNA descent idea from v7 as the throughline connecting these distinct graphics, but render it in full color now, not as a thin gray line.
- **FAQ artwork** — one small themed graphic per question group (General / Eligibility / Submission), echoing TreeHacks' per-question illustration without copying its content.

Boundaries so this stays crafted rather than busy:
- One graphic system, applied everywhere — if a new graphic doesn't look like it was drawn by the same hand as the others, revise it rather than shipping a mismatched style.
- Let graphics carry color; keep the surrounding page chrome (nav, body text, hairline rules) simpler so illustrations read as the "featured" content, not just more visual noise competing with everything else.
- Still no emoji, no default icon-font glyphs standing in for real icons, no gradient pill buttons.
- Mobile: illustrations should scale/simplify gracefully, not just shrink — plan simplified versions of the busier graphics (hero centerpiece, schedule graphic) for small screens.

## 5. Tech stack

- **TypeScript**, Vite + React + TypeScript (or Next.js + TypeScript).
- Illustrations as **typed SVG components** sharing common primitives (a shape/path library, a shared color-token set) so the whole cast stays visually consistent — e.g. a `theme.ts` exporting the 4–5 accent colors as named semantic tokens (`colorBio`, `colorCircuit`, `colorFusion`, `colorHighlight`) that every illustration component imports, rather than hardcoding hex values per component.
- Carry over the seedable branch/vessel generator from earlier versions for the schedule graphic and any organic connective lines — now stroked/filled in the color tokens instead of gray.
- `IntersectionObserver`-triggered reveal per section's graphics (fade/scale in once, on first scroll into view) for a sense of the TreeHacks-style "things arrive as you scroll to them" — respecting `prefers-reduced-motion` with a no-animation fallback.
- Typed content models as before: `Prize`, `ScheduleEvent`, `FAQItem`, `Sponsor`.
- No backend needed. All CTAs link to `https://univabio.devpost.com/`.

## 6. Deliverable

A polished, deployable single-page TypeScript site that's genuinely colorful and illustration-rich — a real cast of distinct, biology×AI-specific graphics (hero centerpiece, per-section icons, schedule/prize/FAQ artwork) drawn in one consistent style and a curated 4–5-color semantic palette — closer in visual density and energy to TreeHacks than to a bare monochrome page, while staying legible, on-theme, and free of the generic template tells from Section 0.
