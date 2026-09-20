import { useEffect, useState } from "react";
import type { ScheduleEvent } from "../content/types";

export type PhaseState = "done" | "active" | "upcoming";

export interface ScheduleStatus {
  states: Record<string, PhaseState>;
  /** Short sentence describing where the event currently stands. */
  message: string;
  /** Whole days from now until submissions close, or null once they have. */
  daysToDeadline: number | null;
}

const DAY_MS = 86_400_000;

function computeStatus(
  events: ScheduleEvent[],
  deadlineId: string,
  now: Date,
): ScheduleStatus {
  const states: Record<string, PhaseState> = {};
  let active: ScheduleEvent | undefined;

  for (const event of events) {
    const start = new Date(event.start);
    const end = event.end ? new Date(event.end) : undefined;

    if (end && now >= end) {
      states[event.id] = "done";
    } else if (now >= start && (!end || now < end)) {
      states[event.id] = "active";
      active = event;
    } else {
      states[event.id] = "upcoming";
    }
  }

  const deadline = events.find((event) => event.id === deadlineId);
  const remaining = deadline ? new Date(deadline.start).getTime() - now.getTime() : 0;
  const daysToDeadline = remaining > 0 ? Math.floor(remaining / DAY_MS) : null;

  let message: string;
  if (daysToDeadline === 0) {
    message = "Closes today";
  } else if (daysToDeadline !== null) {
    message = daysToDeadline === 1 ? "1 day to the deadline" : `${daysToDeadline} days to the deadline`;
  } else if (active) {
    message = `${active.title} in progress`;
  } else {
    message = "This cycle has finished";
  }

  return { states, message, daysToDeadline };
}

/**
 * Derives phase state from the clock so the schedule and the hero badge stay
 * truthful without anyone editing copy. Recomputes once a minute.
 */
export function useScheduleStatus(events: ScheduleEvent[], deadlineId = "close"): ScheduleStatus {
  const [status, setStatus] = useState<ScheduleStatus>(() =>
    computeStatus(events, deadlineId, new Date()),
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setStatus(computeStatus(events, deadlineId, new Date()));
    }, 60_000);
    return () => window.clearInterval(id);
  }, [events, deadlineId]);

  return status;
}
