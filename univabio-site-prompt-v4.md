# Build Prompt: UnivaBio Hackathon Website (v4 — generative bio/AI motion layer)

Paste this whole file to your coding agent (Claude Code, Cursor, etc.) as the spec for the site. This version keeps the white-dominant, f.inc-inspired editorial base from v3 but adds a generative, subject-specific motion layer so the page doesn't read as flat/static. Read Section 0 (from v3, repeated below) and the new Section 4b carefully — the goal is "alive and specific to AI×Biology," not "generic particle-effect template."

## 0. Read this first: avoid the generic "AI-generated landing page" look

Avoid: gradient pill buttons; the dark-navy+mint+lavender palette; emoji-as-icon; the badge-pill-centered-hero-with-stat-pills formula; every section resolving to N identical cards in a row; generic filler line-art (double-helix squiggles) sitting in empty space with no purpose. This applies equally to the new motion/generative elements below — a particle system is just as generic as a gradient button if it's a stock effect with no relationship to the content. Everything added in this version needs a specific reason to be shaped like a cell, a bacterium, or a dithered microscopy image — not "particles because hackathon sites have particles."

## 1. Project summary

Single-page site for **UnivaBio**, a global online student hackathon (ages 13+) hosted by **BioCataalysis** × **UnivaDev**, theme **"Artificial Intelligence for Human Health."** Primary goal: get visitors to understand the event and click through to register on Devpost (`https://univabio.devpost.com/`).

**Structural inspiration (section order only):** Cal Hacks (calhacks.io) — hero → stats → why-this-event → about/theme → schedule → prizes → judging criteria → sponsors → FAQ → footer. Do not copy Cal Hacks' visual style.

**Visual base:** f.inc-inspired — white/off-white background, near-black ink text, one restrained accent color, serif display headlines, hairline rules instead of cards. See Section 4a. This version's job is to make that base feel alive via a generative layer tied specifically to the AI×biology theme (Section 4b), not to abandon the editorial restraint.

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

## 4b. The generative / motion layer — specific to AI × Biology

The site currently reads as bland because it's static and generic. Fix this by adding **one cohesive generative visual system**, rendered in the same restrained monochrome/ink palette as the rest of the site (do not introduce new colors for this layer — it should look like it belongs to the same publication, not like a separate demo bolted on). Treat it as a recurring visual motif that shows up in different forms across sections, not a single hero gimmick.

### Core visual concept
Cells, microbes, and signal/network structures rendered as **line-art / dot-matrix / dithered forms** — the intersection of "biological" and "computational" imagery, since that's literally the hackathon's theme (AI for human health). Concretely, pick from and combine:

- **Drifting cell/microbe field** — small circular or rod-shaped forms (loosely modeled on cells, bacteria, or a simplified microorganism silhouette with a flagellum) drifting slowly across a canvas, rendered as outlined shapes or dot-clusters in ink-on-white (or white-on-ink if a section flips to a dark band). Motion should be slow, ambient, and continuous — not chaotic. Consider gentle Brownian-motion-style drift rather than directional flow, since it should read as "alive under a microscope," not "loading spinner."
- **Dithered microscopy texture** — take the concept of real microscopy/petri-dish imagery and render it (or a stand-in generative pattern) through a **1-bit or ordered dither** (Bayer matrix or Floyd–Steinberg) so it reads as halftone dot texture in pure black/white — this ties the "digital/computational" side of the theme to the "biological" imagery, and dithered halftone textures read as intentional/editorial rather than a stock gradient blur.
- **ASCII/character-based rendering** — render a motif (a cell dividing, a simple molecule, a pulse/EKG-like line, or the word/wordmark itself) using monospace characters as the "pixels," animated so characters shift density as if cells are dividing or signal is propagating. This should use the same restrained ink-on-white palette and a monospace face consistent with any mono/grotesk you're already using for labels/nav (see v3 typography note) — don't introduce a new neon-green "hacker terminal" cliché; keep it typographically consistent with the rest of the page.
- **Signal/network lines** — thin connecting lines between drifting nodes (suggesting neurons, a sensor network, or cell-to-cell signaling) that fade in/out as nodes pass near each other. Useful as a subtler background texture behind text-heavy sections rather than the primary hero effect.

Pick 2–3 of the above (not all four) and use them consistently and specifically:
- **Hero:** the most prominent treatment — e.g. the drifting cell/microbe field as a full-bleed, low-contrast background behind the headline (motion should never compete with text legibility — keep opacity/contrast low, or confine it to a defined zone rather than directly behind body copy).
- **Section dividers / transitions between major sections:** a smaller, quieter instance of the same system (e.g. a thin strip of the dithered texture, or a single drifting cell motif near a section label) rather than a completely different effect each time — cohesion matters more than variety here.
- **Data-heavy sections (stats, schedule, prizes):** keep these mostly static/clean per the f.inc-style restraint — this is where hairline rules and typography should carry the section, with at most a very quiet motif in the margin, so the generative layer doesn't fight with information the visitor actually needs to read (dates, numbers, requirements).

### Explicit boundaries — keep it restrained
- **Monochrome only** for the generative layer (ink + white/off-white, matching the base palette) — no rainbow gradients, no neon glow, no bloom/blur effects. This is the single biggest thing that will keep it from reading as generic "AI demo."
- **Motion should be slow and ambient**, not fast/flashy. Respect `prefers-reduced-motion` — provide a static fallback (e.g. a single frame of the dithered texture) when reduced motion is requested.
- **Never let the generative layer sit behind body text at full contrast.** Confine dense motion to hero/divider zones; keep content-heavy zones (schedule, prizes, FAQ) close to static.
- **Performance:** pause/stop canvas animation when the relevant section is off-screen (IntersectionObserver), cap frame rate if needed (canvas doesn't need 60fps for slow ambient drift — 24–30fps is plenty and cheaper), and make sure it doesn't jank scroll on mobile. Test on a mid-range phone, not just desktop.
- **It should look intentional and hand-tuned, not like a plugged-in `tsParticles`/`particles.js` default config.** If you use a particle library, heavily customize shape, palette, and motion so it doesn't read as the default demo preset (this is one of the most recognizable "AI/template site" tells alongside gradient buttons).

## 5. Tech stack

- **TypeScript**, Vite + React + TypeScript (or Next.js + TypeScript — pick one, stay consistent).
- Canvas rendering for the generative layer: plain **Canvas 2D API** wrapped in a typed React component is enough for this (drifting shapes, dither pattern, ASCII grid) — no need for WebGL/three.js unless you want a genuinely 3D effect, which isn't necessary for this aesthetic. Keep the implementation in a dedicated `GenerativeField.tsx`-style component with typed props (density, palette, motion speed, reduced-motion flag) so it can be reused with different configs across the hero vs. section dividers.
- If you do want a library instead of hand-rolled canvas: `ogl` or vanilla `<canvas>` are both lighter and easier to keep monochrome/custom than `tsparticles`. Avoid defaulting to `tsparticles`'s stock look.
- Dither implementation: a small typed utility function applying an ordered (Bayer 4x4/8x8) or Floyd–Steinberg dither to either a generated noise field or an actual (royalty-free, properly licensed) microscopy-style image — don't fabricate image URLs; if no real source image is supplied, generate the texture proceduraly (e.g. Perlin/simplex noise thresholded through the dither matrix) so nothing is a broken link.
- ASCII rendering: a typed grid renderer mapping a density/field value per cell to a character ramp (e.g. ` .:-=+*#%@` light→dark), rendered in a `<pre>`/monospace canvas layer.
- Strong typing for content as before: `Prize`, `ScheduleEvent`, `FAQItem`, `Sponsor` interfaces, populated from a typed data file separate from component logic.
- No backend needed. All CTAs link to `https://univabio.devpost.com/`.

## 6. Deliverable

A polished, deployable single-page TypeScript site that keeps the restrained white/ink editorial feel from v3 but reads as alive and specifically built for an AI × biology hackathon — via one cohesive, monochrome, slow-motion generative system (drifting cells/microbes, dithered microscopy texture, and/or ASCII-rendered bio motifs) rather than a stock particle effect or decorative filler graphic.
