# Build Prompt: UnivaBio Hackathon Website (v5 — mycelium / root-network theme)

Paste this whole file to your coding agent (Claude Code, Cursor, etc.) as the spec for the site. This version keeps the white-dominant, f.inc-inspired editorial base from v3, and sharpens the generative motion layer from v4 into **one specific, unifying visual metaphor: a mycelium / root network** — branching, connective growth that reads simultaneously as biological (roots, fungal networks, vasculature) and computational (a neural net, a sensor mesh, a graph of connected nodes). This is the single visual idea the whole site hangs off of — don't dilute it by mixing in unrelated motifs (cells, ASCII EKG lines, dithered petri dishes, etc. from the earlier draft) unless they're clearly in service of the same root/network idea.

## 0. Read this first: avoid the generic "AI-generated landing page" look

Avoid: gradient pill buttons; the dark-navy+mint+lavender palette; emoji-as-icon; the badge-pill-centered-hero-with-stat-pills formula; every section resolving to N identical cards in a row; generic filler line-art sitting in empty space with no purpose. This applies equally to the motion/generative elements below — a particle system or branching animation is just as generic as a gradient button if it's a stock effect with no relationship to the content. The mycelium motif needs to look specifically drawn/grown for this site, not like a default "neural network" stock illustration with dots and straight connecting lines.

## 1. Project summary

Single-page site for **UnivaBio**, a global online student hackathon (ages 13+) hosted by **BioCataalysis** × **UnivaDev**, theme **"Artificial Intelligence for Human Health."** Primary goal: get visitors to understand the event and click through to register on Devpost (`https://univabio.devpost.com/`).

**Structural inspiration (section order only):** Cal Hacks (calhacks.io) — hero → stats → why-this-event → about/theme → schedule → prizes → judging criteria → sponsors → FAQ → footer. Do not copy Cal Hacks' visual style.

**Visual base:** f.inc-inspired — white/off-white background, near-black ink text, one restrained accent color, serif display headlines, hairline rules instead of cards. See Section 4a. This version's job is to make that base feel alive via a single generative motif — a mycelium/root network — tied specifically to the AI×biology intersection (Section 4b), not to abandon the editorial restraint.

## 2. Section-by-section structure (content order — see v3 for full section list; unchanged)

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

Same verified facts as the prior version — dates, prizes, sponsors, judging criteria, eligibility, requirements. Re-paste from your last working copy of this spec, or re-fetch `https://univabio.devpost.com/`, `/details/dates`, and `/rules` live rather than guessing. (Not re-listing here to keep this version focused on the visual layer — merge with your existing content section.)

## 4a. Base aesthetic (unchanged from v3, quick recap)

- White/off-white background (`#fafaf8`–`#fcfcfa`), near-black ink text, one restrained accent color used sparingly — no gradients.
- Serif display headline face paired with a plain, legible body face.
- Hairline 1px rules instead of bordered/shadowed cards.
- Text-led, asymmetric layout with generous margins; vary layout rhythm per section instead of repeating card grids.
- No emoji icons, no gradient buttons.

## 4b. The generative / motion layer — mycelium / root network

The site currently reads as bland because it's static and generic. Fix this with **one recurring generative system**: a branching, organic network — visually a root system or mycelial (fungal) network, but functionally identical to a neural network or sensor mesh diagram. That double reading *is the point*: it's the one image that's simultaneously biological and computational, which is exactly what "AI for Human Health" is about. Render it in the same restrained monochrome/ink palette as the rest of the site (no new colors introduced for this layer) so it reads as belonging to the page, not a bolted-on demo.

### Why this motif specifically
- A mycelial/root network is **organic branching**, not a rigid dot-and-straight-line "neural net" clip-art diagram — it should grow with slightly irregular angles, varying line weight (thicker near the "root," tapering toward the tips), and occasional forking, the way real roots or hyphae actually branch. This is what will keep it from reading as generic — a stock neural-network graphic is itself a cliché to avoid.
- It scales naturally to every density you need: a dense, page-wide branching structure for the hero; a single thin root-line as a section divider; a sparse two-or-three-branch sprig as a quiet margin motif next to a stat or a section label. One system, many densities — you don't need to invent a second, unrelated motif for variety (see v4's cell/dither/ASCII grab-bag — skip that; converge on this one idea instead).
- It gives you a natural, non-cheesy way to reference "growth" and "connection" — both apt for a hackathon (ideas growing, people connecting) and for the health theme (biological networks, signal propagation) — without needing literal cell/bacteria iconography, which risks looking like clip-art microbiology.

### Where and how to use it
- **Hero:** the most prominent instance. A branching root/mycelium structure grows slowly from one edge or corner of the hero (e.g. from beneath the headline, or from one side of the frame) — animate it as genuine growth (branches extending and forking over a few seconds on load, then settling into a very slow ambient sway/pulse) rather than a looping particle drift. Keep it low-contrast/thin-lined enough that it never competes with headline legibility — confine it to a defined zone (e.g. lower third, or one side of an asymmetric hero layout) rather than running directly behind body text.
- **Section dividers:** between major sections, a thin single root-line or small branch cluster (rendered as a simple SVG or lightweight canvas line, not full animation) acts as the section break instead of a plain hairline rule — same line weight and style as the hero system so it reads as one continuous organism running through the page, not a decoration repeated per section.
- **Data-heavy sections (stats, schedule, prizes, FAQ):** stay close to static here, per the f.inc restraint — a single quiet sprig or a faint branch fragment in the margin at most. Hairline rules and typography should carry these sections; the network motif should recede rather than fight with numbers/dates people need to read.
- **Optional interactive touch (only if it stays subtle):** branches could very slightly respond to cursor proximity (a gentle bend/attraction, not a snap-to or particle burst) — nice-to-have, not required, and should degrade gracefully to the ambient animation on touch devices.

### Explicit boundaries — keep it restrained
- **Monochrome only** — ink-colored lines on the white/off-white background (or your one accent color used very sparingly, e.g. at branch tips or growth points only). No gradients along the branches, no glow/bloom, no neon.
- **Organic irregularity is the whole point** — avoid perfectly symmetric, evenly-spaced, or grid-snapped branching; real roots/mycelium are irregular. If it looks like a clean fractal tree or a textbook neural-net diagram, it's too regular — add jitter to angles and branch lengths.
- **Motion should be slow and considered** — growth on load, then near-stillness with very subtle ambient movement (like something breathing, not something looping a demo reel). Respect `prefers-reduced-motion`: fall back to a static "already grown" frame of the network.
- **Never let dense branching sit directly behind body text at full contrast.** Keep it to defined zones (hero art area, dividers, margins).
- **Performance:** pause canvas/SVG animation when its section is off-screen (IntersectionObserver), keep frame rate modest (24–30fps is enough for organic growth/sway), and verify it doesn't jank scroll on a mid-range phone.
- **Hand-tune it.** If you generate the branching via an algorithm (e.g. recursive L-system or randomized branching walk), tune the parameters (branch angle variance, taper rate, forking probability) until it looks specifically like this site's mark — not a default generative-art tutorial output.

## 5. Tech stack

- **TypeScript**, Vite + React + TypeScript (or Next.js + TypeScript — pick one, stay consistent).
- Branching network rendering: implement as an **SVG path generator** (for section-divider/margin instances — crisp lines, easy to animate stroke-dasharray for a "growing" effect, easy to keep monochrome) plus a **Canvas 2D** version for the hero if you want continuous ambient sway/cursor response that would be too expensive to re-render as SVG every frame. Build the branch generation as a typed, seedable algorithm — e.g. a recursive/L-system-style branch walker (`generateBranch(node, depth, angleJitter, tremorSeed): BranchNode[]`) — so the same generator can produce a dense hero instance and a sparse divider instance from different `density`/`depth` params, keeping one visual system instead of separate assets per section.
- Typed props for the network component (e.g. `origin`, `depth`, `branchProbability`, `angleJitter`, `strokeWeight`, `growthDurationMs`, `reducedMotion`) so hero/divider/margin instances are all the same component at different settings, not three different implementations.
- Growth animation: animate SVG stroke (`stroke-dasharray`/`stroke-dashoffset`) for the "extending branch" effect on load; a subtle post-growth idle animation (slight sway via small rotation/translate on sub-branches) for the ambient-alive feel.
- Respect `prefers-reduced-motion`: render the fully-grown static network with no animation.
- Strong typing for content as before: `Prize`, `ScheduleEvent`, `FAQItem`, `Sponsor` interfaces, populated from a typed data file separate from component logic.
- No backend needed. All CTAs link to `https://univabio.devpost.com/`.

## 6. Deliverable

A polished, deployable single-page TypeScript site that keeps the restrained white/ink editorial feel from v3 but reads as alive and specifically built for an AI × biology hackathon — via a single recurring branching root/mycelium network motif (dense and animated in the hero, quiet and static-leaning through the rest of the page) rather than a stock particle effect, generic cell/dither/ASCII grab-bag, or decorative filler graphic.
