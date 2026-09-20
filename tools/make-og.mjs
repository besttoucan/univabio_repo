/**
 * Renders tools/og-card.html to public/og.png (1200x630) with headless Edge or
 * Chrome. Run after changing the card: `npm run og`.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const card = resolve(here, "og-card.html");
const out = resolve(here, "..", "public", "og.png");

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

execFileSync(browser, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--virtual-time-budget=3000",
  "--window-size=1200,630",
  `--screenshot=${out}`,
  `file://${card.replaceAll("\\", "/")}`,
]);

console.log(`Wrote ${out}`);
