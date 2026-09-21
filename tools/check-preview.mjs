/**
 * Verifies the link-preview tags in dist/ after a build.
 *
 *   npm run check:preview
 *
 * A broken preview is invisible until someone pastes the link somewhere public,
 * and the usual causes are boring: a card renamed without re-rendering, an
 * og:image left as a relative path (scrapers require absolute URLs), or a
 * description long enough that it gets cut mid-sentence. This catches all three
 * before it ships.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");

const pages = [
  "index.html",
  "compete/index.html",
  "prizes/index.html",
  "rules/index.html",
  "privacy/index.html",
  "404.html",
];

const required = [
  "og:title",
  "og:description",
  "og:url",
  "og:image",
  "og:image:alt",
  "og:type",
  "og:site_name",
  "twitter:card",
  "twitter:image",
];

/** Roughly where each surface truncates a description. */
const DESCRIPTION_LIMIT = 200;

function tags(html) {
  const found = new Map();
  const re = /<meta\s+(?:property|name)="([^"]+)"\s+content="([^"]*)"/g;
  let match;
  while ((match = re.exec(html))) found.set(match[1], match[2]);
  return found;
}

let failures = 0;
const note = (page, message) => {
  console.error(`  x ${page}: ${message}`);
  failures += 1;
};

if (!existsSync(dist)) {
  console.error("No dist/. Run `npm run build` first.");
  process.exit(1);
}

for (const page of pages) {
  const file = resolve(dist, page);
  if (!existsSync(file)) {
    note(page, "missing from dist");
    continue;
  }

  const html = readFileSync(file, "utf8");
  const meta = tags(html);
  const before = failures;

  for (const key of required) {
    if (!meta.get(key)) note(page, `no ${key}`);
  }

  const image = meta.get("og:image");
  if (image) {
    if (!/^https?:\/\//.test(image)) {
      note(page, `og:image must be absolute, got "${image}"`);
    } else {
      // The file has to exist in dist, or the card renders as a grey box.
      const path = resolve(dist, new URL(image).pathname.replace(/^\//, ""));
      if (!existsSync(path)) note(page, `og:image points at a file dist/ does not have: ${image}`);
    }
  }

  if (meta.get("og:image") !== meta.get("twitter:image")) {
    note(page, "og:image and twitter:image disagree");
  }

  const description = meta.get("og:description") ?? "";
  if (description.length > DESCRIPTION_LIMIT) {
    note(page, `description is ${description.length} chars, will be cut near ${DESCRIPTION_LIMIT}`);
  }

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!title) note(page, "no <title>");

  if (failures === before) console.log(`  ok ${page.padEnd(20)} ${title}`);
}

if (failures) {
  console.error(`\n${failures} problem${failures === 1 ? "" : "s"} found.`);
  process.exit(1);
}

console.log("\nEvery page has a complete preview card.");
