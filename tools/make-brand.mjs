/**
 * Renders tools/brand-card.html into brand/*.png with headless Edge or Chrome.
 *
 *   npm run brand
 *
 * The banner and card carry the dark lamp background. The logo and mark render
 * on transparency (--default-background-color=00000000), so they can be dropped
 * onto anything.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const card = resolve(here, "brand-card.html");
const outDir = resolve(here, "..", "brand");

/** Devpost-style header, share card, and the two transparent lockups. */
const variants = [
  { name: "univabio-banner", v: "banner", width: 2400, height: 420, transparent: false },
  { name: "univabio-banner-plain", v: "banner", width: 2400, height: 420, transparent: false, edition: "" },
  { name: "univabio-card", v: "card", width: 1600, height: 900, transparent: false },
  { name: "univabio-logo", v: "logo", width: 1400, height: 320, transparent: true },
  { name: "univabio-logo-ink", v: "logo", width: 1400, height: 320, transparent: true, ink: true },
  // Without the edition tag, for anything that outlives this year's event.
  { name: "univabio-wordmark", v: "logo", width: 1200, height: 320, transparent: true, edition: "" },
  { name: "univabio-wordmark-ink", v: "logo", width: 1200, height: 320, transparent: true, edition: "", ink: true },
  { name: "univabio-mark", v: "mark", width: 512, height: 512, transparent: true },
  { name: "univabio-mark-ink", v: "mark", width: 512, height: 512, transparent: true, ink: true },
];

const candidates = [
  process.env.BROWSER,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
  console.error("No Chrome or Edge binary found. Set BROWSER to one and re-run.");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

for (const variant of variants) {
  const out = resolve(outDir, `${variant.name}.png`);
  const query = new URLSearchParams({ v: variant.v });
  if (variant.edition !== undefined) query.set("edition", variant.edition);
  if (variant.ink) query.set("ink", "1");

  const args = [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--virtual-time-budget=4000",
    `--window-size=${variant.width},${variant.height}`,
    `--screenshot=${out}`,
  ];

  if (variant.transparent) args.push("--default-background-color=00000000");

  args.push(`file://${card.replaceAll("\\", "/")}?${query}`);

  execFileSync(browser, args);
  console.log(`${variant.name}.png  ${variant.width}x${variant.height}`);
}

console.log(`\nWrote ${variants.length} files to ${outDir}`);
