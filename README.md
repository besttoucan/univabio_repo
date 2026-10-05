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
npm run og       # regenerate the link-preview cards in public/og/
npm run check:preview   # verify every page's preview tags (run after build)
npm run brand    # regenerate the banner and logo files in brand/
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

## Deploying

The site publishes to GitHub Pages at <https://univabio.org> via
`.github/workflows/deploy.yml`, which runs on every push to `main`. The workflow
builds, runs `check:preview`, and fails the deploy rather than shipping a page
with broken preview tags.

`SITE_ORIGIN` in `vite.config.ts` drives everything downstream: canonical URLs,
Open Graph tags, the sitemap, the structured data, and the `CNAME` file that
keeps the custom domain bound to the site. Change that one value (or set a
`SITE_ORIGIN` environment variable at build time) and the whole site follows.

`robots.txt`, `sitemap.xml`, `site.webmanifest`, `CNAME` and `.nojekyll` are all
generated into `dist/` at build time. None of them are edited by hand.

### One-time setup

- **Repo settings → Pages → Source: GitHub Actions.**
- **DNS for univabio.org** — four `A` records at the apex pointing to
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
  and a `CNAME` for `www` pointing to `<user>.github.io`. Then tick **Enforce
  HTTPS** in repo settings once the certificate is issued.

## Search

Titles and descriptions target what people actually search for, checked against
Semrush keyword data rather than guessed. The findings that shaped them:
`healthcare hackathon` (KD 33) and `virtual hackathon` (KD 36) are winnable for
a new domain, `ai hackathon` (590/mo, KD 51) is a stretch worth making, and
`hackathon for high school students` has **zero** search volume despite being
the most natural way to describe the event. `ai in healthcare` is 110k/mo at
KD 87, which is Mayo Clinic territory and not worth chasing.

The build also emits a sitemap with `lastmod`, a `robots.txt`, and a web app
manifest, and every page carries `Event` or `FAQPage` structured data. Rerun
`npm run check:preview` after any change to the page table.

## Link previews

The card that appears when someone pastes a link into Slack, Discord, iMessage,
WhatsApp, LinkedIn or X comes from Open Graph tags in the page head. They are
written by the head-meta plugin in `vite.config.ts` from the same page table as
everything else, so a page cannot ship with a preview that disagrees with it.

Each page has its own 1200x630 card under `public/og/`, rendered by
`npm run og` from the same template as the brand files. `npm run check:preview`
verifies, against the built output, that every page has the full tag set, that
`og:image` is an absolute URL, and that the file it points at actually exists.

**Previews stay broken until `SITE_ORIGIN` is the real domain.** Scrapers fetch
`og:image` as an absolute URL, so while it reads `https://univabio.org` the card
resolves to nothing. Set the origin, deploy, then test a real URL at
<https://www.opengraph.xyz> or Discord's paste box.

## Brand files

`brand/` holds the banner, share card and logo files, all rendered from
`tools/brand-card.html` by `npm run brand` so they use the real typeface and the
real palette rather than an approximation of them. There is a banner for the
Devpost header, a 16:9 card for sharing, and the lockup and glyph on
transparency in both a light-background and a dark-background version. See
`brand/README.md` for which file is which.

The edition tag (`v1`) is a parameter, not baked into the artwork: pass
`?edition=v2` to the template, or change the value in `tools/make-brand.mjs`,
and the whole set rebuilds for the next run of the event.

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
- **Type**: Clash Display for headings, Satoshi for body, Spline Sans Mono for data. All three are
  self-hosted from `public/fonts`, so the page makes no third-party request for type and the fonts
  cannot change underneath us. None of them is a default any AI tool reaches for — Inter, the one
  that is, is deliberately absent. Hack the North runs Satoshi for the same reason.
- **The background** (`src/components/VitalsTrace.tsx`): a vitals monitor, fixed behind the page.
  The waveform is a real PQRST complex — the small P bump, the sharp QRS spike, the broader T wave
  — tiled across the width, with a band of it sweeping left to right the way a monitor redraws
  itself and a brighter head riding at the front. It holds still under `prefers-reduced-motion`.

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
