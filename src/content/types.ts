export interface NavLink {
  label: string;
  href: string;
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface WhyPoint {
  title: string;
  description: string;
}

export interface ThemeExample {
  text: string;
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
  /** ISO timestamp — when this phase begins */
  start: string;
  /** ISO timestamp — when this phase ends (omit for the final, open-ended event) */
  end?: string;
}

export interface Prize {
  rank: string;
  winners: string;
  items: string[];
}

export interface JudgingCriterion {
  title: string;
  description: string;
}

export interface Sponsor {
  name: string;
  /** left undefined until a real asset is supplied — falls back to a text wordmark */
  logoUrl?: string;
  /** left undefined until a verified sponsor URL is supplied */
  href?: string;
}

export interface Judge {
  name: string;
  title: string;
  /** left undefined until a real photo is supplied — falls back to initials */
  photoUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}
