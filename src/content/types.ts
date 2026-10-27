export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  /** Raw number, so it can be counted up and formatted at render time. */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface WhoPoint {
  title: string;
  description: string;
}

export interface RequirementItem {
  index: string;
  title: string;
  description: string;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  dateLabel: string;
  detail: string;
  /** ISO timestamp for when this phase begins. */
  start: string;
  /** ISO timestamp for when it ends. Omitted on the final, open-ended event. */
  end?: string;
}

export interface Prize {
  rank: string;
  winners: string;
  /** Total sponsor-credit value of the tier, already summed. */
  value: number;
  items: string[];
  /** Marks the tier that carries the amber accent. */
  lead?: boolean;
}

export interface JudgingCriterion {
  title: string;
  points: number;
  description: string;
}

export interface Sponsor {
  name: string;
  /** Official site, taken from the Devpost listing. */
  href?: string;
  /**
   * Path under /sponsors. Left undefined until a real asset exists, in which
   * case the ticker falls back to setting the name as a wordmark.
   */
  logo?: string;
}

export interface Judge {
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export type EventPhase = "open" | "judging" | "results";

export interface Winner {
  project: string;
  team: string;
  prize: string;
  track?: string;
  href: string;
  /** 1, 2 or 3 for the placed winners, which carry the highlight accent. */
  place?: 1 | 2 | 3;
}
