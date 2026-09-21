import { relative, resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import {
  BIOCATAALYSIS_URL,
  DEVPOST_URL,
  faqGroups,
  scheduleEvents,
  TAGLINE,
} from "./src/content/content";

/**
 * The public origin the site is served from. Canonical URLs, Open Graph tags,
 * the sitemap, and the structured data all derive from this one value, so
 * moving the site to its real domain is a single edit here.
 */
const SITE_ORIGIN = "https://univabio.org";

interface PageMeta {
  /** Public path, used for canonical and og:url. */
  path: string;
  title: string;
  description: string;
  /** The page carrying the FAQ, which is where the FAQPage schema belongs. */
  faq?: boolean;
  /** Link-preview card under public/og. Defaults to the home card. */
  image?: string;
  /** Sentence describing that card, for anyone reading the preview aloud. */
  imageAlt?: string;
  /** Keeps the 404 out of the index. */
  noindex?: boolean;
}

const pages: Record<string, PageMeta> = {
  "index.html": {
    path: "/",
    image: "/og/home.png",
    imageAlt: "UnivaBio: artificial intelligence for human health. Online worldwide, students 13 and up, closes October 6, 2026.",
    title: "UnivaBio · A global student hackathon on AI for human health",
    description:
      "UnivaBio is an online hackathon for students aged 13 and up, hosted by BioCataalysis with UnivaDev. Build an AI project for human health by October 6, 2026. $40,000 in non-cash sponsor prizes.",
  },
  "compete/index.html": {
    path: "/compete/",
    image: "/og/compete.png",
    imageAlt: "How to enter UnivaBio: four files, scored out of 25, closes October 6, 2026.",
    title: "How to enter · UnivaBio",
    description:
      "The four files every UnivaBio entry needs, the dates from submissions opening to winners, and the five criteria judges score each project against.",
  },
  "prizes/index.html": {
    path: "/prizes/",
    image: "/og/prizes.png",
    imageAlt: "UnivaBio prizes: $40,000 on the table, 104 winners, five categories, none of it cash.",
    title: "Prizes · UnivaBio",
    description:
      "Roughly $40,000 in non-cash sponsor prizes across five categories, awarded to 104 entrants, and the companies putting them up.",
  },
  "rules/index.html": {
    path: "/rules/",
    faq: true,
    image: "/og/rules.png",
    imageAlt: "UnivaBio rules and answers: students 13 and up, solo or team, AI assistants welcome.",
    title: "Rules & FAQ · UnivaBio",
    description:
      "Who can enter UnivaBio, what counts as a submission, how entries are scored out of 25, whether AI assistants are allowed, and how the non-cash prizes work.",
  },
  "privacy/index.html": {
    path: "/privacy/",
    title: "Privacy · UnivaBio",
    description:
      "What this site collects, which is nothing: no cookies, no analytics, no tracking. What the host logs, and which third parties are involved.",
  },
  "404.html": {
    path: "/404.html",
    title: "Page not found · UnivaBio",
    description: "That page is not here. Links to the hackathon details, dates, prizes and rules.",
    noindex: true,
  },
};

const submissionsOpen = scheduleEvents.find((event) => event.id === "open");
const submissionsClose = scheduleEvents.find((event) => event.id === "close");

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function jsonLd(data: unknown): string {
  // Forward slashes are escaped so a stray "</script>" inside content cannot
  // close the tag early.
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

function eventSchema(): string {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Event",
    name: "UnivaBio",
    description: TAGLINE,
    url: `${SITE_ORIGIN}/`,
    image: `${SITE_ORIGIN}/og/home.png`,
    startDate: submissionsOpen?.start,
    endDate: submissionsClose?.start,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: DEVPOST_URL },
    organizer: [
      { "@type": "Organization", name: "BioCataalysis", url: BIOCATAALYSIS_URL },
      { "@type": "Organization", name: "UnivaDev" },
    ],
    audience: { "@type": "Audience", audienceType: "Students aged 13 and over" },
  });
}

function faqSchema(): string {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  });
}

/**
 * Writes the head of every page from the table above, so titles, descriptions,
 * canonical URLs, social cards and structured data all come from one place and
 * cannot drift apart across four HTML files.
 */
function headMeta(root: string): Plugin {
  return {
    name: "univabio-head-meta",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const key = relative(root, ctx.filename).split("\\").join("/");
        const meta = pages[key];
        if (!meta) return html;

        const url = `${SITE_ORIGIN}${meta.path}`;
        const image = `${SITE_ORIGIN}${meta.image ?? "/og/home.png"}`;
        const imageAlt = meta.imageAlt ?? "The UnivaBio wordmark on a dark plum field.";
        const tags = [
          `<title>${escapeHtml(meta.title)}</title>`,
          `<meta name="description" content="${escapeHtml(meta.description)}" />`,
          `<link rel="canonical" href="${url}" />`,
          meta.noindex ? `<meta name="robots" content="noindex" />` : "",
          `<meta property="og:type" content="website" />`,
          `<meta property="og:site_name" content="UnivaBio" />`,
          `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
          `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta property="og:locale" content="en_US" />`,
          `<meta property="og:image" content="${image}" />`,
          `<meta property="og:image:type" content="image/png" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
          `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
          `<meta name="twitter:image" content="${image}" />`,
          `<meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />`,
          key === "index.html" ? eventSchema() : "",
          meta.faq ? faqSchema() : "",
        ].filter(Boolean);

        return html.replace("<!--%META%-->", tags.join("\n    "));
      },
    },

    /** robots.txt and the sitemap come from the same page table as the meta tags. */
    generateBundle() {
      const indexable = Object.values(pages).filter((page) => !page.noindex);
      const urls = indexable
        .map((page) => `  <url>\n    <loc>${SITE_ORIGIN}${page.path}</loc>\n  </url>`)
        .join("\n");

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });

      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`,
      });
    },
  };
}

const root = resolve(import.meta.dirname);

export default defineConfig({
  plugins: [react(), headMeta(root)],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        compete: resolve(root, "compete/index.html"),
        prizes: resolve(root, "prizes/index.html"),
        rules: resolve(root, "rules/index.html"),
        privacy: resolve(root, "privacy/index.html"),
        notFound: resolve(root, "404.html"),
      },
    },
  },
  // Four real HTML entry points, so dev and preview resolve /rules/ and
  // /privacy/ the same way a static host will.
  appType: "mpa",
});
