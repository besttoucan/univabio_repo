import type {
  FaqGroup,
  JudgingCriterion,
  KeyFact,
  NavLink,
  Prize,
  RequirementItem,
  ScheduleEvent,
  Sponsor,
  WhyPoint,
} from "./types";

export const DEVPOST_URL = "https://univabio.devpost.com/";
export const CONTACT_EMAIL = "biocataalysis@gmail.com";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Theme", href: "#theme" },
  { label: "Prizes", href: "#prizes" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export const heroFacts: KeyFact[] = [
  { label: "Submissions close", value: "Oct 6, 2026" },
  { label: "Format", value: "Online, worldwide" },
  { label: "Prize pool", value: "$40,000 — non-cash" },
  { label: "Who can join", value: "Students, ages 13+" },
];

export const whyPoints: WhyPoint[] = [
  {
    title: "No experience required",
    description:
      "First hackathon or fiftieth — we care about the idea and the willingness to learn, not a resume.",
  },
  {
    title: "AI assistants are expected",
    description:
      "Build with Claude, ChatGPT, Copilot, or whatever helps you move. The only norm: understand your own code well enough to explain it.",
  },
  {
    title: "Global by default",
    description:
      "Entirely online. There is no venue to reach and no single time zone to match — build on your own schedule.",
  },
  {
    title: "Ages 13 and up",
    description:
      "Middle school through college, solo or in a team, everyone works under the same theme and the same judging bar.",
  },
];

export const themeExamples: string[] = [
  "An AI-powered EdTech tool that helps a patient or student understand a condition",
  "An imaging classification model that flags something earlier than manual review would",
  "A novel medical decision-support concept, built as working software",
  "An accessibility tool that makes health information easier to reach and use",
];

export const requirements: RequirementItem[] = [
  {
    index: "01",
    title: "Project",
    description:
      "A website, app, or other coding prototype with real user interaction — not a mockup.",
  },
  {
    index: "02",
    title: "Demo video",
    description:
      "Explains the project's purpose, shows its features, and shows how a person actually uses it.",
  },
  {
    index: "03",
    title: "One-page description",
    description: "A PDF covering the project's purpose and key features, in plain language.",
  },
  {
    index: "04",
    title: "GitHub repo or code PDF",
    description: "All the code developed for the project, so judges can see how it was built.",
  },
];

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: "open",
    title: "Submissions open",
    dateLabel: "Aug 7, 2026 · 12:00am EDT",
    start: "2026-08-07T00:00:00-04:00",
    end: "2026-10-06T23:45:00-04:00",
  },
  {
    id: "close",
    title: "Submissions close",
    dateLabel: "Oct 6, 2026 · 11:45pm EDT",
    start: "2026-10-06T23:45:00-04:00",
    end: "2026-10-07T09:00:00-04:00",
  },
  {
    id: "judging",
    title: "Judging window",
    dateLabel: "Oct 7 – Oct 14, 2026",
    start: "2026-10-07T09:00:00-04:00",
    end: "2026-10-14T23:45:00-04:00",
  },
  {
    id: "winners",
    title: "Winners announced",
    dateLabel: "Oct 15, 2026 · 9:00am EDT",
    start: "2026-10-15T09:00:00-04:00",
  },
];

export const prizes: Prize[] = [
  {
    rank: "1st place",
    winners: "1 winner",
    items: [
      "Momen Credits — $2,000",
      "CodeCrafters 2-yr membership — $720",
      "InterviewBuddy Credits — $70",
      "Protoflow Credits — $300",
      "Adaption Labs Credits — $800",
    ],
  },
  {
    rank: "2nd place",
    winners: "1 winner",
    items: [
      "CodeCrafters 1-yr membership — $360",
      "InterviewBuddy Credits — $45",
      "Protoflow Credits — $150",
      "Adaption Labs Credits — $800",
    ],
  },
  {
    rank: "3rd place",
    winners: "1 winner",
    items: [
      "CodeCrafters 6-mo membership — $180",
      "InterviewBuddy Credits — $45",
      "Protoflow Credits — $75",
      "Adaption Labs Credits — $800",
    ],
  },
  {
    rank: "Best No-Code AI App",
    winners: "Built with Momen · 1 winner",
    items: ["Momen Credits — $2,000"],
  },
  {
    rank: "Tin Computer Growth Credit",
    winners: "100 winners",
    items: ["$299 Tin Computer Growth Credit each — $29,900 total"],
  },
];

export const judgingCriteria: JudgingCriterion[] = [
  { title: "Idea & Innovation", description: "How original and well-considered is the core idea?" },
  { title: "Implementation", description: "How functional and technically sound is the build?" },
  {
    title: "Health Impact & Rigor",
    description: "How meaningfully — and how credibly — does it address a real health problem?",
  },
  { title: "Design & Usability", description: "How clear and usable is the experience for a real person?" },
  {
    title: "Presentation",
    description: "How clearly does the team communicate what they built and why it matters?",
  },
];

// No verified sponsor URLs or logo assets were supplied — hrefs and logoUrls are
// left undefined intentionally rather than guessed, per the site's own no-fabrication rule.
export const sponsors: Sponsor[] = [
  { name: "InterviewBuddy" },
  { name: "Momen" },
  { name: "CodeCrafters" },
  { name: "Tin Computer" },
  { name: ".xyz" },
  { name: "DevSwarm" },
  { name: "Protoflow" },
  { name: "MeDo" },
  { name: "Adaption Labs" },
];

export const faqGroups: FaqGroup[] = [
  {
    title: "General",
    items: [
      {
        question: "Is UnivaBio online or in person?",
        answer: "Fully online and public. You can take part from anywhere in the world.",
      },
      {
        question: "Is there a cost to enter?",
        answer:
          "Check the official rules page for the current entry cost — it isn't restated here to avoid giving stale information.",
      },
      {
        question: "Are prizes cash or non-cash?",
        answer:
          "All prizes are non-cash — sponsor product credits, subscriptions, and licenses. See the Prizes section for the full breakdown.",
      },
    ],
  },
  {
    title: "Eligibility & registration",
    items: [
      {
        question: "Who can participate?",
        answer:
          "Students ages 13 and up, from any country or territory, subject to standard export-control exceptions. Companies and professional organizations can't enter.",
      },
      {
        question: "Do I need a team, or can I work solo?",
        answer:
          "Either. You can build individually or as a team — check the rules page for the exact team-size cap.",
      },
      {
        question: "How do I register?",
        answer: 'Go to univabio.devpost.com and click "Join Hackathon." Registration and submission both happen on Devpost.',
      },
    ],
  },
  {
    title: "Submission",
    items: [
      {
        question: "Can I use AI coding tools?",
        answer:
          "Yes — using assistants like Claude, ChatGPT, or Copilot is encouraged. You should still understand your own code well enough to explain it to the judges.",
      },
      {
        question: "What exactly do I submit?",
        answer:
          "A working project, a demo video, a one-page project description (PDF), and a GitHub repo or code PDF. See the requirements section for details.",
      },
      {
        question: "When is the submission deadline?",
        answer: "October 6, 2026 at 11:45pm EDT. See the full schedule above.",
      },
    ],
  },
];
