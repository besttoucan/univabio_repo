/**
 * Renders one link-preview card per page into public/og/, from the same
 * template as everything in brand/ (tools/brand-card.html).
 *
 *   npm run og
 *
 * These are the images Slack, Discord, iMessage, WhatsApp, LinkedIn and X show
 * when someone pastes a link. 1200x630 is the size every one of them expects.
 * The page table in vite.config.ts decides which card each page points at.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const card = resolve(here, "brand-card.html");
const outDir = resolve(here, "..", "public", "og");

const WIDTH = 1200;
const HEIGHT = 630;

/** One per page that is worth sharing on its own. */
const cards = [
  {
    name: "home",
    title: "Artificial intelligence <em>for human health.</em>",
    facts: "Online worldwide &nbsp;/&nbsp; Students 13+ &nbsp;/&nbsp; Closes Oct 6, 2026",
  },
  {
    name: "compete",
    title: "How to enter.",
    facts: "Four files &nbsp;/&nbsp; Scored out of 25 &nbsp;/&nbsp; Closes Oct 6, 2026",
  },
  {
    name: "prizes",
    title: "<em>$40,000</em> on the table.",
    facts: "104 winners &nbsp;/&nbsp; Five categories &nbsp;/&nbsp; None of it cash",
  },
  {
    name: "rules",
    title: "Rules &amp; answers.",
    facts: "Students 13+ &nbsp;/&nbsp; Solo or team &nbsp;/&nbsp; AI assistants welcome",
  },
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

for (const entry of cards) {
  const out = resolve(outDir, `${entry.name}.png`);
  const query = new URLSearchParams({ v: "og", title: entry.title, facts: entry.facts });

  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--virtual-time-budget=4000",
    `--window-size=${WIDTH},${HEIGHT}`,
    `--screenshot=${out}`,
    `file://${card.replaceAll("\\", "/")}?${query}`,
  ]);

  console.log(`og/${entry.name}.png  ${WIDTH}x${HEIGHT}`);
}

console.log(`\nWrote ${cards.length} cards to ${outDir}`);
