# UnivaBio

Website for **UnivaBio**, a global online student hackathon on artificial intelligence for human
health, hosted by BioCataalysis with UnivaDev. The site explains the event and sends people to the
Devpost listing, which is where registration, submission and judging actually happen.

Live content source: <https://univabio.devpost.com/>

## Running it

```bash
npm install
npm run dev      # dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the built site
npm run lint
npm run og       # regenerate public/og.png from tools/og-card.html
python tools/prepare-logos.py   # normalize anything new in public/sponsors
```

## Pages

Six real HTML entry points, not a single-page app with client routing. Three of
them are in the nav; the rest are reachable from the footer or from a bad URL.

| Path        | In the nav | Answers                                              |
| ----------- | ---------- | ---------------------------------------------------- |
| `/`         | wordmark   | What is this, who is it for, why enter                |
| `/compete/` | yes        | What to hand in, by when, and how it is scored        |
| `/prizes/`  | yes        | What you win, and who is putting it up                |
| `/rules/`   | yes        | Am I eligible, can I use AI, do I need a team         |
| `/privacy/` | footer     | What this site collects (nothing)                     |
| `/404.html` | —          | Where to go instead                                   |

Each page owns one question. Nothing appears on two of them, which is why the
section headings do not repeat the page titles.

## Before deploying

1. **Set the domain.** `SITE_ORIGIN` at the top of `vite.config.ts` is currently
   `https://univabio.org`. Every canonical URL, Open Graph tag, the sitemap and the structured data
   derive from it, so changing that one line moves the whole site.
2. **Point the host's 404 at `/404.html`.** Netlify and Vercel do this automatically; on Nginx use
   `error_page 404 /404.html;`.
3. `robots.txt` and `sitemap.xml` are generated into `dist/` at build time. There is nothing to edit
   by hand.

## Sponsor logos

The nine logos in `public/sponsors` are the assets the organizers uploaded to
the Devpost listing, downloaded and self-hosted so no sponsor is told who is
looking at this page. They arrive in incompatible forms: some are dark marks on
transparency, some are light marks baked onto an opaque plate, one is artwork on
a patterned background. `tools/prepare-logos.py` keys out flat backgrounds,
trims the margins and caps the height; the ticker then renders every one of them
as a single white silhouette, which is the only way nine mixed assets read as one
row. Drop a replacement PNG into `public/sponsors`, re-run the script, and point
the entry in `content.ts` at it.

## Look and feel

- **Palette** (`src/styles/base.css`): a deep plum base with three accents, each with exactly one
  job. Lilac is structure: rules, section numbers, the drawing. Magenta is live state: the current
  schedule phase and the base pairs on the drawing. Lava orange is money and urgency: prize figures,
  the deadline count, the primary button. Nothing else gets a color.
- **Type**: Fraunces for display with its `SOFT` and `WONK` axes turned up, so headlines have some
  character at size; Archivo for body; Spline Sans Mono for data and labels.
- **The lamp** (`src/components/LavaLamp.tsx`): six circles inside a gooey SVG filter that blurs
  them and then snaps the alpha back to hard edges, so neighbouring blobs bulge toward each other
  and merge the way wax does. It is fixed behind the page and sits still under
  `prefers-reduced-motion`.

## Motion

Everything is one-shot and triggered by `IntersectionObserver`; nothing runs on a scroll handler.

- **Counters** (`useCountUp`): figures count from zero on first sight, ease-out cubic, staggered
  across a row. Digits are tabular so nothing reflows mid-count, and the accessible text is always
  the final number.
- **Reveals** (`Reveal`): `rise` lifts and fades, `wipe` uncovers a heading from its baseline,
  `draw` grows a rule out of its left edge. `wipe` and `draw` put their effect on an inner element
  on purpose: both collapse the box to zero painted area, and an element with no area never counts
  as intersecting, so on the observed node they would stop themselves from ever triggering.
- **The drawing** (`HelixBand`): the strands draw left to right, each base pair lands as the drawing
  head passes it, and the chip arrives last.
- Under `prefers-reduced-motion` all of it resolves to the finished state immediately.

## How it is put together

- **Content lives in `src/content/content.ts`.** Every fact there comes from the Devpost listing.
  Anything the listing does not state is left out or linked rather than guessed, which is why there
  are no invented judges, testimonials or entry fees. Update that file when Devpost changes.
- **The head is generated.** `vite.config.ts` holds a table of page metadata and writes titles,
  descriptions, canonical links, social cards, and the `Event` and `FAQPage` structured data into
  each HTML file at build time. The FAQ schema is generated from the same `faqGroups` array the
  rules page renders, so the two cannot drift apart.
- **The drawing computes its own geometry.** `HelixBand` solves for the points of maximum strand
  separation so the base pairs land exactly on them as the helix decays into a single circuit trace.
- **The schedule is live.** `useScheduleStatus` derives the current phase and the day count from the
  clock, so the "now" marker and the deadline countdown stay correct with no edits.
