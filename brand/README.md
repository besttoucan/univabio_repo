# UnivaBio brand files

Generated from `tools/brand-card.html` by `npm run brand`. Edit the template,
re-run, and everything here is rebuilt at once.

| File | Size | Use it for |
| --- | --- | --- |
| `univabio-banner.png` | 2400x420 | Devpost header, event page banners |
| `univabio-banner-plain.png` | 2400x420 | Same banner without the `v1` tag |
| `univabio-card.png` | 1600x900 | Sharing a link, slides, a post |
| `univabio-logo.png` | 1400x320 | Lockup with `v1`, transparent, for dark backgrounds |
| `univabio-logo-ink.png` | 1400x320 | Same lockup for light backgrounds |
| `univabio-wordmark.png` | 1200x320 | Lockup without `v1`, transparent, dark backgrounds |
| `univabio-wordmark-ink.png` | 1200x320 | Same for light backgrounds |
| `univabio-mark.png` | 512x512 | The glyph alone, transparent, dark backgrounds |
| `univabio-mark-ink.png` | 512x512 | The glyph alone, light backgrounds |

The `-ink` files are the versions for light backgrounds. Everything else is
drawn in cream and lilac and needs something dark behind it.

Next year, run `npm run brand` after changing the `edition` values in
`tools/make-brand.mjs` (or pass `?edition=v2` to the template) and the whole set
comes back with the new tag.
