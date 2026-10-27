# Bioluminescence redesign log

Branch: `redesign/bioluminescence`. Not pushed, merged or deployed.

## Open questions
- **Winners list.** `EVENT_PHASE = 'results'`, but neither the repo nor Devpost (403 to automated fetches) gave me winner names. `winners` in `src/content/content.ts` is empty, so Results links to the Devpost gallery. Fill the array and the winners grid renders, with 1st/2nd/3rd highlighted in `--glow-3`.
- **Workshops (06) and People (08).** The repo has no workshops, speakers, judges or organizer data, so these sections are left out rather than invented. Send the data and they slot in between Timeline and FAQ.
- **"Free" in the hero sub-line.** I didn't claim it: the rules page says entry fee terms live on Devpost.
- **OG images** still show the pre-redesign cards. They are still truthful (dates, prizes), so I didn't regenerate them.
- **Stay updated** links to biocataalysis.org. There's no Discord, Instagram or newsletter in the repo.

## Decisions
- 2026-10-27: `EVENT_PHASE = 'results'`, because today is past the Oct 15 announcement date in `scheduleEvents`.
- Typography: the site has no serif; the headline face is **Clash Display**, which is kept. The lit phrase uses the browser's synthesized italic plus a `--glow-1` text-shadow. Mono stays **Spline Sans Mono** and body stays **Satoshi** (already self-hosted, so no new font requests).
- Palette: the existing colours are now named `--abyss / --abyss-2 / --ink / --muted / --line / --glow-1 (lilac) / --glow-2 (magenta) / --glow-3 (lava)`; older names alias them.
- Kept the multi-page site and its SEO plugin. The home page is the long scroll; `/compete/`, `/prizes/`, `/rules/` still exist, share the shell (and the organism), and are linked from the footer.
- Component mapping, reusing what existed: SectionHeader → `SectionHead` (new `label` prop, `<em>` lit phrase); GlassPanel → `.section > .page` / `.glass`; Timeline → `Schedule` (filament + cell nodes); StatBand → `Stats`; PhaseChip is inline in `Hero`.
- Organism growth follows whole-page scroll progress (0 → 6) rather than per-section anchors, so it works on every page. On home, the stages land on the spec's sections.
- Theme section keeps its four example briefs as a numbered list; I didn't add new glyph art.
- Sponsor logos stay white silhouettes, because several are dark-on-transparent and vanish in full colour on plum. On hover/focus they light with a glow halo instead.
- The 404 page still uses the old HelixBand drawing.

## Loops
### [Phase 1–3] Foundations, living systems, sections: loop 1
- Changed: tokens, phase config, nav, hero, Results, section heads, footer, PlanktonField, Organism.
- Checklist: typecheck, lint and build clean. 390px has no horizontal scroll (scrollWidth 390). CELLS readout matches stage: 1 at hero, 64 at Results, 10⁶ at Sponsors, ∞ at footer.
- Critique: the readout overlapped the footer copyright line, and the fully lit network made the footer CTA note hard to read.
- Fix: footer bottom padding clears the readout; the lit network alpha is lowered; the CTA note colour is raised to `--muted`.

## Handoff
- Not run: Lighthouse, a real-device fps check, cursor-wake verification (headless can't move a pointer).
- Preview: `npm run build && npm run preview`, then open http://localhost:4173. Move the mouse to stir the plankton and click for ripples.
- Screenshots (gitignored): `.redesign-shots/rm-1440-*.png`, `.redesign-shots/rm-390-*.png`
