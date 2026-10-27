import type {
  EventPhase,
  FaqGroup,
  Person,
  JudgingCriterion,
  NavLink,
  Prize,
  RequirementItem,
  ScheduleEvent,
  Sponsor,
  Stat,
  WhoPoint,
  Winner,
} from "./types";

/*
  Every fact below comes from the official Devpost listing (overview, dates,
  and rules tabs). Anything the listing does not state is left out, or points
  back to Devpost, rather than being filled in with a plausible guess.
*/

export const DEVPOST_URL = "https://univabio.devpost.com/";
export const DEVPOST_RULES_URL = "https://univabio.devpost.com/rules";
export const DEVPOST_DATES_URL = "https://univabio.devpost.com/details/dates";
export const DEVPOST_GALLERY_URL = "https://univabio.devpost.com/project-gallery";
export const BIOCATAALYSIS_URL = "https://biocataalysis.org";
export const CONTACT_EMAIL = "biocataalysis@gmail.com";

export const TAGLINE =
  "Biology needs builders. UnivaBio brings students worldwide together to build tools that make healthcare smarter, earlier, and more accessible.";

/**
 * Where the event stands. Copy and calls to action across the site switch on
 * this one value. Devpost, checked Oct 27, 2026: the hackathon has ended and
 * winners are "announced soon", dated Nov 7, 2026.
 */
export const EVENT_PHASE: EventPhase = "judging";

export const phaseCta: Record<EventPhase, NavLink> = {
  open: { label: "Register", href: DEVPOST_URL },
  judging: { label: "See submissions", href: DEVPOST_GALLERY_URL },
  results: { label: "See winners", href: DEVPOST_GALLERY_URL },
};

export const phaseChip: Record<EventPhase, string> = {
  open: "Submissions open · Closes Oct 6",
  judging: "Submissions closed Oct 6 · Judging in progress",
  results: "Submissions closed Oct 6 · Winners announced Nov 7",
};

/** The home page reads top to bottom in this order. */
export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Theme", href: "/#theme" },
  { label: "Results", href: "/#results" },
  { label: "Prizes", href: "/#prizes" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "People", href: "/#people" },
  { label: "FAQ", href: "/#faq" },
];

/** The standalone pages, linked from the footer. */
export const pageLinks: NavLink[] = [
  { label: "Compete", href: "/compete/" },
  { label: "Prizes", href: "/prizes/" },
  { label: "Rules & FAQ", href: "/rules/" },
];

export const metaStrip = ["Online", "Worldwide", "Students 13+", "$40,000 in prizes"];

export const stats: Stat[] = [
  { value: 40000, prefix: "$", label: "In sponsor prizes" },
  { value: 104, label: "Entrants win something" },
  { value: 60, label: "Days to build it" },
  { value: 25, label: "Points on the scorecard" },
];

export const challengeExamples: string[] = [
  "A tool that explains a diagnosis in language a patient can use.",
  "A model trained on imaging data that flags what a manual pass misses.",
  "Decision support for a clinician, built as working software.",
  "An accessibility project for people locked out of health information.",
];

export const whoPoints: WhoPoint[] = [
  {
    title: "First-timers",
    description: "The bar is set so a beginner can ship something real.",
  },
  {
    title: "AI assistants",
    description: "Build with Claude, ChatGPT, Copilot. Just know your own code.",
  },
  {
    title: "Any time zone",
    description: "No venue, no shared clock, two months of runway.",
  },
  {
    title: "Ages 13 up",
    description: "Middle school through university. No companies.",
  },
];

export const requirements: RequirementItem[] = [
  {
    index: "01",
    title: "The project",
    description: "Something a person can actually use. Not a mockup.",
  },
  {
    index: "02",
    title: "A demo video",
    description: "What it does, and someone using it.",
  },
  {
    index: "03",
    title: "A one-page PDF",
    description: "The purpose and the key features.",
  },
  {
    index: "04",
    title: "Your code",
    description: "A GitHub repo, or a PDF of the source.",
  },
];

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: "open",
    title: "Submissions open",
    dateLabel: "Aug 7, 2026",
    detail: "12:00am EDT. Register any time while the window is open.",
    start: "2026-08-07T00:00:00-04:00",
    end: "2026-10-06T23:45:00-04:00",
  },
  {
    id: "close",
    title: "Submissions close",
    dateLabel: "Oct 6, 2026",
    detail: "11:45pm EDT. All four files uploaded by then.",
    start: "2026-10-06T23:45:00-04:00",
    end: "2026-10-07T09:00:00-04:00",
  },
  {
    id: "judging",
    title: "Judging",
    dateLabel: "From Oct 7, 2026",
    detail: "Every entry scored out of 25 points by a panel of 41 judges.",
    start: "2026-10-07T09:00:00-04:00",
    end: "2026-11-07T00:00:00-05:00",
  },
  {
    id: "winners",
    title: "Winners announced",
    dateLabel: "Nov 7, 2026",
    detail: "On the Devpost listing.",
    start: "2026-11-07T00:00:00-05:00",
  },
];

export const prizes: Prize[] = [
  {
    rank: "First place",
    winners: "1 winner",
    value: 3890,
    lead: true,
    items: [
      "Momen credits, $2,000",
      "CodeCrafters two-year membership, $720",
      "Adaption Labs credits, $800",
      "Protoflow credits, $300",
      "InterviewBuddy credits, $70",
    ],
  },
  {
    rank: "Second place",
    winners: "1 winner",
    value: 1355,
    items: [
      "CodeCrafters one-year membership, $360",
      "Adaption Labs credits, $800",
      "Protoflow credits, $150",
      "InterviewBuddy credits, $45",
    ],
  },
  {
    rank: "Third place",
    winners: "1 winner",
    value: 1100,
    items: [
      "CodeCrafters six-month membership, $180",
      "Adaption Labs credits, $800",
      "Protoflow credits, $75",
      "InterviewBuddy credits, $45",
    ],
  },
  {
    rank: "Best no-code AI app",
    winners: "1 winner, built with Momen",
    value: 2000,
    items: ["Momen credits, $2,000"],
  },
  {
    rank: "Tin Computer growth credit",
    winners: "100 winners",
    value: 29900,
    items: ["A $299 credit for each of 100 entrants"],
  },
];

export const judgingCriteria: JudgingCriterion[] = [
  {
    title: "Idea and innovation",
    points: 5,
    description: "Does it address a real problem, and is it different from what exists?",
  },
  {
    title: "Implementation",
    points: 5,
    description: "Does it work, and how hard was it to build?",
  },
  {
    title: "Health impact and rigor",
    points: 5,
    description: "Who is it for, would it actually help them, and is there real potential?",
  },
  {
    title: "Design and usability",
    points: 5,
    description: "Is it thought through for the person using it?",
  },
  {
    title: "Presentation",
    points: 5,
    description: "Clear problem, working demo, honest about what is unfinished.",
  },
];

// Logos and links are the ones the organizers uploaded to the Devpost listing,
// self-hosted under public/sponsors and normalized by tools/prepare-logos.py.
export const sponsors: Sponsor[] = [
  { name: "Momen", href: "https://momen.app/", logo: "/sponsors/momen.png" },
  { name: "CodeCrafters", href: "https://codecrafters.io/", logo: "/sponsors/codecrafters.png" },
  { name: "Tin Computer", href: "https://tin.computer/", logo: "/sponsors/tin-computer.png" },
  { name: "Adaption Labs", href: "https://adaptionlabs.ai/", logo: "/sponsors/adaption-labs.png" },
  { name: "Protoflow", href: "https://www.protoflow.ai/", logo: "/sponsors/protoflow.png" },
  { name: "InterviewBuddy", href: "https://interviewbuddy.net/", logo: "/sponsors/interviewbuddy.png" },
  { name: "DevSwarm", href: "https://devswarm.ai", logo: "/sponsors/devswarm.png" },
  { name: "MeDo", href: "https://medo.dev/home", logo: "/sponsors/medo.png" },
  { name: ".xyz", href: "https://gen.xyz/", logo: "/sponsors/xyz.png" },
];

// TODO: Ryan review. The winning projects are not in this repo yet and Devpost
// could not be read from here; until they are added, the results section links
// to the Devpost gallery instead.
export const winners: Winner[] = [];

/** As listed on the Devpost overview, in the same order. */
export const judges: Person[] = [
  { name: "Sudheer Pratap", role: "Lead Software Engineer" },
  { name: "Aditya Shrivastava", role: "Software Engineer at Barclays" },
  { name: "Rupak Bose", role: "Lead Researcher @ Qen Labs Inc" },
  { name: "Nilesh Dhage", role: "Director, Product Management" },
  { name: "Gaurav Shah", role: "Director-Staff Engineer at Fidelity Investments" },
  { name: "Yaokai Jiang", role: "Founder & CEO of Momen.app" },
  { name: "Viraj Sabhaya", role: "Associate Software Engineer, Altera Digital Health" },
  { name: "Vincent Vu", role: "Software Engineer at Paraform" },
  { name: "Harris Bashir", role: "Data & AI Engineer, Kidoz" },
  { name: "Anudeep Bonagiri", role: "CEO & Cofounder of Cruze Maps" },
  { name: "Shrithik Senthilkumar", role: "COO & Co-founder, Cruze Maps" },
  { name: "Gediminas Jurgis Pažėra", role: "AI Engineer" },
  { name: "Sunil Divvela", role: "Senior Solutions Architect at Amazon Web Services (AWS)" },
  { name: "Aatish Dhami", role: "Founding Engineer, StyleFrame AI" },
  { name: "Andrew Silvanus", role: "Head of Sales & Partnerships at Bayosthiti AI" },
  { name: "Vishal Punjabi", role: "Principal AI Scientist, SAP Labs" },
  { name: "Alina Olefirenko", role: "CTO" },
  { name: "Mohammad Haris Zia", role: "Founding Senior Product Engineer at Neurotone AI" },
  { name: "Ratna Kumar Bonagiri", role: "Staff Software Engineer" },
  { name: "Ankur Bhatnagar", role: "Enterprise Integration & API Architect" },
  { name: "Kavitha Gopalakrishnan", role: "Senior Product Manager, Google Labs" },
  { name: "Saiprasad Charudatta Shrikhande", role: "Senior Manager" },
  { name: "Sanjay Singh", role: "Staff Software Engineer at LinkedIn" },
  { name: "Somiya Khan", role: "Operations Engineer at Avantduo" },
  { name: "Omer Dogan", role: "CEO & Managing Director, Mono Apps" },
  { name: "Sonal Harsh", role: "Founder, Pavafetch" },
  { name: "Ujwal Vanjare", role: "Software Engineer at BNSF Railway" },
  { name: "Akshay Talathi", role: "Vice President of Software Engineering at Goldman Sachs" },
  { name: "Roman Mukovnin", role: "CTO & Co-founder of TWIG AI" },
  { name: "Dulra Amolegbe", role: "Co-founder | CEO, AgentStatus" },
  { name: "Swapnil Gaikwad", role: "Senior Software Development Engineer, Amazon" },
  { name: "Yeswant Kumar Babulalji", role: "Principal Consultant" },
  { name: "Sandeep Vattikuti", role: "Principal Software Engineer" },
  { name: "Ravi Shanker Thadishetti", role: "Senior Software Engineer at PayPal" },
  { name: "Oguzhan Karaca", role: "Co-Founder/CEO at Derya (YC S26)" },
  { name: "Dishank Jhaveri", role: "Software Engineer at Hippocratic AI" },
  { name: "Devyendar Maganti", role: "Lead Platform Engineer at Prudential Financial" },
  { name: "Bhagath Siddi", role: "Senior Engineering Manager" },
  { name: "Haripreeth Avarur", role: "Graduate Researcher and MS Computer Science, University of Michigan" },
  { name: "Aqsa Kanwal", role: "iCodeGuru Trainer & Community Moderator" },
  { name: "Sharoon Babu", role: "Lead AI Engineer at Gartner" },
];

// TODO: Ryan review. Placeholders until the organizing team's names and roles
// are in; replace each entry, or add and remove entries as needed.
export const staff: Person[] = [
  { name: "Organizer name", role: "Lead Competition Director & Organizer" },
  { name: "Organizer name", role: "Organizer" },
  { name: "Organizer name", role: "Organizer" },
  { name: "Organizer name", role: "Organizer" },
];

export const faqGroups: FaqGroup[] = [
  {
    title: "Entry",
    items: [
      {
        question: "Who can enter?",
        answer:
          "Students aged 13 and over, from any country or territory outside the standard export-control exceptions. Companies and professional organizations are excluded.",
      },
      {
        question: "Do I need a team?",
        answer:
          "No. You can enter alone or with a team. Team-size limits are set out in the official rules on Devpost.",
      },
      {
        question: "What if I have never built anything before?",
        answer:
          "That is a normal starting point here. Judges look at the idea and the working build rather than your experience.",
      },
      {
        question: "How do I register?",
        answer:
          "Open the Devpost listing and click Join hackathon. Registration and submission both happen there, not on this site.",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        question: "Can I use AI coding assistants?",
        answer:
          "Yes, and it is encouraged. Be ready to walk judges through your own code and explain the decisions in it.",
      },
      {
        question: "What exactly do I upload?",
        answer:
          "Four things: the working project, a demo video, a one-page PDF description, and either a GitHub repository or a PDF of your code.",
      },
      {
        question: "Does the project have to be about health?",
        answer:
          "Yes. Health impact is one of the five scored criteria. Beyond that the form is open: app, website, model, simulation, or system.",
      },
      {
        question: "When is the deadline?",
        answer:
          "Submissions closed October 6, 2026 at 11:45pm EDT. Winners are due on Devpost on November 7, 2026.",
      },
    ],
  },
  {
    title: "Prizes",
    items: [
      {
        question: "Are the prizes cash?",
        answer:
          "No. Every prize is non-cash: sponsor credits, subscriptions, licenses, and domains. They cannot be redeemed for money.",
      },
      {
        question: "How many entrants win something?",
        answer:
          "104, across the five categories. The Tin Computer growth credit alone goes to 100 entrants.",
      },
      {
        question: "Who is judging?",
        answer:
          "A panel of 41 engineers, researchers, founders and product leaders, listed on this site and on Devpost. Scoring uses the five criteria on this page, five points each.",
      },
    ],
  },
];
