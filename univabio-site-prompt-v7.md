# Build Prompt: UnivaBio Hackathon Website (v7 — one continuous descent, body → bloodstream → cell → DNA/AI)

Paste this whole file to your coding agent (Claude Code, Cursor, etc.) as the spec for the site. This version keeps the white-dominant, f.inc-inspired editorial base and the branching-network linework from v5/v6, but gives the continuous-scroll idea an actual **narrative**: scrolling down the page is a journey descending in scale — from a person, into the bloodstream, into a single cell, down to the molecular/DNA level, where the biological imagery resolves into a circuit/network pattern. It's the same "one continuous composition running the length of the page" trick Cal Hacks uses (their scene runs sky → clouds → mountains → grass → ocean as you scroll), but themed specifically around this hackathon's subject instead of a generic landscape.

## 0. Read this first: avoid the generic "AI-generated landing page" look

Avoid: gradient pill buttons; the dark-navy+mint+lavender palette; emoji-as-icon; the badge-pill-centered-hero-with-stat-pills formula; every section resolving to N identical cards in a row; generic filler line-art sitting in empty space with no purpose. A "zoom into a cell" concept is itself common in health/biotech marketing — the way to keep this from feeling stock is specificity and restraint (Section 4b): hand-drawn-feeling line art, irregular/organic forms, monochrome, and content that stays legible and undecorated where it needs to be, not a glossy 3D cell-interior render.

## 1. Project summary

Single-page site for **UnivaBio**, a global online student hackathon (ages 13+) hosted by **BioCataalysis** × **UnivaDev**, theme **"Artificial Intelligence for Human Health."** Primary goal: get visitors to understand the event and click through to register on Devpost (`https://univabio.devpost.com/`).

**Structural inspiration (section order + continuous-scroll technique):** Cal Hacks (calhacks.io) — both its section order (hero → stats → why-this-event → about/theme → schedule → prizes → judging criteria → sponsors → FAQ → footer) and its core visual trick: one continuous illustrated scene running behind every section rather than a new graphic per section. Do not copy Cal Hacks' actual illustration style, colors, or content — build your own continuous scene themed around a descent into the human body (Section 4b).

**Visual base:** f.inc-inspired — white/off-white background, near-black ink text, one restrained accent color, serif display headlines, hairline rules instead of cards (Section 4a) — carrying that restraint into the illustrated scene itself, which should read as line-art/etching, not a rendered illustration.

## 2. Section-by-section structure (content order, unchanged)

1. Nav — wordmark, anchor links, Register action.
2. Hero — event name, theme line, tagline, key facts, primary CTA to Devpost.
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

Same verified facts as prior versions — dates, prizes, sponsors, judging criteria, eligibility, requirements. Re-fetch `https://univabio.devpost.com/`, `/details/dates`, and `/rules` live rather than guessing if you don't already have your working content file from the previous version.

## 4a. Base aesthetic (unchanged from v3, quick recap)

- White/off-white background (`#fafaf8`–`#fcfcfa`), near-black ink text, one restrained accent color used sparingly — no gradients.
- Serif display headline face paired with a plain, legible body face.
- Hairline 1px rules instead of bordered/shadowed cards.
- Text-led, asymmetric layout with generous margins; vary layout rhythm per section instead of repeating card grids.
- No emoji icons, no gradient buttons.

## 4b. The continuous scroll journey — descending from body to cell to code

**The core idea:** the whole page is one long illustrated column that a visitor scrolls *through*, the way Cal Hacks scrolls through one continuous sky-to-ocean landscape. Here, instead of a landscape, the scene is a **journey inward** — starting at human scale and descending, section by section, into smaller and smaller biological structures, until the imagery resolves into something that reads as computational/networked. That final merge is the visual punchline for "AI for Human Health": the journey ends where biology and computation become the same picture.

### The descent, mapped to page sections
Treat this as a loose creative brief, not a rigid spec — the agent should design actual illustrated transitions, but the *sequence and idea* should hold:

1. **Hero (surface / the person):** A simple line-art human figure or silhouette — quiet, not literal/anatomical-diagram — establishes the "entry point." This is where the journey begins. Headline and key facts sit clearly over/beside it, not fighting it for attention.
2. **Why this event / stats band (bloodstream):** The scene descends beneath the surface — thin branching vessel/capillary lines (this is exactly where the mycelium/root branching system from v5/v6 belongs: it *is* the circulatory or neural network here, giving your earlier branching-network work a concrete narrative home rather than being an abstract motif on its own).
3. **About the challenge (crossing into a cell):** A threshold moment — a membrane boundary the reader visually "passes through" as they scroll (e.g. a large circular/curved line crossing the width of the page, like crossing a horizon line). This is a good place for a stronger, slower scroll-linked animation since it's a single narrative beat rather than a data section.
4. **Requirements / Schedule (inside the cell):** Quiet organelle-suggestive shapes (simple outlined forms — nothing literal or textbook-diagram-like) recede into the margins here. This is a data-dense stretch (submission requirements, dates) — per Section 4a, the scene must stay unobtrusive and the content must stay the visual priority.
5. **Prizes / Judging criteria (nucleus / chromatin):** Branching intensifies again, now reading more like chromatin/DNA strands than blood vessels — same line system as step 2, just relabeled by context, so it still feels like one continuous organism rather than a new asset.
6. **Sponsors (molecular / the turn toward computation):** DNA-strand-like forms begin to pick up a more regular, node-and-edge rhythm — rungs of a helix start to double as connection points, nudging the reading from "biological" toward "networked" without a jarring style switch.
7. **FAQ / Footer (the merge — cell/DNA imagery resolves into circuit/graph imagery):** The journey's destination: the line-art now reads unambiguously as both at once — a molecular structure and a small network/graph — closing the metaphor. This can be the most "designed" single image on the page since it's the payoff; still monochrome, still line-art, not a color shift.

This doesn't need to be eight different hand-built illustrations — build it as **one continuous parametrized scene** (see Section 5) where a small number of visual variables (branch density, curvature, "threshold line" position, node regularity) change gradually as a function of scroll position, so the transitions feel like one organism gradually changing rather than eight separate graphics stitched together.

### Explicit boundaries — keep it restrained and legible
- **Monochrome, line-art/etching feel throughout** — no 3D-rendered organic shapes, no glossy cell-membrane gradients, no biotech-marketing stock-photo microscopy look. Should feel like it belongs on the same page as serif headlines and hairline rules, not like a separate animated explainer video.
- **The journey recedes behind data-heavy content.** Steps 4 (requirements/schedule), 8/9 (prizes/judging), and 12 (FAQ) all involve information people need to actually read — keep the scene quiet, low-contrast, and marginal there. Reserve the more prominent/animated moments for the narrative beats (hero, the membrane-crossing transition, the final merge) where there's less competing content.
- **Motion should be scroll-linked and considered, not autoplaying and looping.** The scene should progress as the user scrolls (scroll-driven, not a timer-driven animation loop) — pausing when the user stops scrolling feels right for this concept; a continuously looping animation would undercut the "journey" framing.
- **Respect `prefers-reduced-motion`:** render the full scene as a static illustrated column (no scroll-linked transform/reveal), so the journey is still visible on load without motion.
- **Performance is the real risk here** — a naive "one giant SVG/canvas the height of the whole page, redrawn every scroll frame" will jank. See Section 5 for the approach (segmenting, IntersectionObserver, scroll-timeline where supported) — test on a mid-range phone before considering this done.
- **Hand-tune the parametrization.** If branch density/curvature/node-regularity are driven by a formula across scroll position, tune it by eye until each section's "zone" of the scene actually looks intentional for that section, not just linearly interpolated and generic.

## 5. Tech stack

- **TypeScript**, Vite + React + TypeScript (or Next.js + TypeScript — pick one, stay consistent).
- **Structure the scene as one long SVG (or a few stacked SVG segments, one per major section) positioned in a fixed background layer, with a shared coordinate system**, rather than a single canvas redrawn every frame — SVG lets you keep line art crisp at any zoom, and lets you drive most of the "descent" transition with cheap, GPU-accelerated CSS (`transform`, `opacity`, `stroke-dashoffset`) rather than per-frame JS redraws.
- **Scroll-linking:** prefer native **CSS `animation-timeline: scroll()` / `view()`** (scroll-driven animations) where browser support is acceptable for your audience; otherwise a lightweight `IntersectionObserver` + `requestAnimationFrame`-throttled scroll listener updating CSS custom properties (e.g. `--descent-progress`) that your SVG's transforms/stroke properties read from. Avoid a naive `onScroll` handler doing heavy DOM work every event — throttle via rAF.
- **Segment and lazy-mount:** split the continuous scene into per-section SVG segments that mount/animate only when their section is near the viewport (`IntersectionObserver`), rather than rendering and animating the full page-height scene at all times — this is what keeps a page-length illustrated scroll performant.
- **Shared branch generator carried over from v5/v6:** keep the typed, seedable branching-line generator (`generateBranch(origin, depth, angleJitter, ...)`) as the underlying system for the vasculature/chromatin/DNA imagery in steps 2, 5, and 6 above — same generator, different params per zone, so it reads as one organism rather than reinvented art per section.
- Typed scene config: a `SceneZone` type (`{ id, scrollRange: [number, number], branchDensity, curvature, nodeRegularity, ... }`) per section so the "how the scene should look in this zone" data is explicit and tunable, not buried in animation code.
- Strong typing for content as before: `Prize`, `ScheduleEvent`, `FAQItem`, `Sponsor` interfaces, populated from a typed data file separate from component/scene logic.
- No backend needed. All CTAs link to `https://univabio.devpost.com/`.

## 6. Deliverable

A polished, deployable single-page TypeScript site that keeps the restrained white/ink editorial feel from v3, but scrolling through it feels like one continuous, scroll-driven journey — from a person, beneath the surface into the bloodstream, through a cell membrane, past organelles, into chromatin/DNA, and finally into imagery that reads as both molecular and computational at once — rather than a static page with a decorative motif repeated per section.
