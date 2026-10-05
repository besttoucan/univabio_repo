# Self-hosted typefaces

Served from this site rather than a font CDN, so the pages make no third-party
request for type and the fonts cannot change underneath us.

| Files | Family | Source | License |
| --- | --- | --- | --- |
| `clash-*.woff2` | Clash Display | [Fontshare](https://www.fontshare.com/fonts/clash-display) | ITF Free Font License |
| `satoshi-*.woff2` | Satoshi | [Fontshare](https://www.fontshare.com/fonts/satoshi) | ITF Free Font License |
| `mono-*.woff2` | Spline Sans Mono | [Google Fonts](https://fonts.google.com/specimen/Spline+Sans+Mono) | SIL Open Font License 1.1 |

All three permit free commercial use and redistribution as part of a website.
Only the latin subset is included; 190 KB for the set.

Declared in `src/styles/base.css`. The two used above the fold
(`clash-700`, `satoshi-400`) are preloaded from each page head.
