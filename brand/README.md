# UnivaBio brand files

Everything here is generated from `tools/brand-card.html` by `npm run brand`.
Edit the template, re-run, and the whole set is rebuilt at once.

## Banners

| File | Size | Use it for |
| --- | --- | --- |
| `univabio-banner.png` | 2400x420 | Devpost header, event page banners |
| `univabio-banner-plain.png` | 2400x420 | Same banner without the `v1` tag |
| `univabio-card.png` | 1600x900 | Sharing a link, slides, a post |

## Square icons

| File | Size | Use it for |
| --- | --- | --- |
| `univabio-icon.png` | 1024x1024 | Profile pictures, Devpost thumbnail, app icon |
| `univabio-icon-512.png` | 512x512 | Anywhere smaller |

## Logos on a filled background

Use these anywhere a transparent PNG would vanish or get boxed out — Devpost,
Discord, Google Docs, slides, anything that puts its own background behind an
image.

| File | Size | Use it for |
| --- | --- | --- |
| `univabio-logo-filled.png` | 1600x500 | Lockup with `v1` on the brand background |
| `univabio-logo-filled-light.png` | 1600x500 | Same lockup on a light background |
| `univabio-wordmark-filled.png` | 1600x500 | Filled, without the `v1` tag |

## Logos on transparency

Only use these when you control what sits behind them.

| File | Size | Use it for |
| --- | --- | --- |
| `univabio-logo.png` | 1400x320 | Lockup with `v1`, for dark backgrounds |
| `univabio-logo-ink.png` | 1400x320 | Same lockup for light backgrounds |
| `univabio-wordmark.png` | 1200x320 | Lockup without `v1`, dark backgrounds |
| `univabio-wordmark-ink.png` | 1200x320 | Same for light backgrounds |
| `univabio-mark.png` | 512x512 | The glyph alone, dark backgrounds |
| `univabio-mark-ink.png` | 512x512 | The glyph alone, light backgrounds |

The `-ink` files are for light backgrounds. Everything else is drawn in cream
and lilac and needs something dark behind it.

## Notes

The mark is a chip with a wave running through it: square by construction, so
it holds up as an avatar, an app icon and a 32px favicon. The same glyph is the
site's favicon, its nav mark, and the icon on every link-preview card.

The same run also writes the site's own icons into `public/`
(`apple-touch-icon.png`, `icon-192.png`, `icon-512.png`); those are referenced
by the page heads and the web manifest, so do not delete them.

Next year, change the `edition` values in `tools/make-brand.mjs` (or pass
`?edition=v2` to the template) and re-run to get the whole set tagged v2.
