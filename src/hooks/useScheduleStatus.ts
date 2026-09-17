import { useEffect, useState } from "react";
import type { ScheduleEvent } from "../content/types";

export type PhaseState = "done" | "active" | "upcoming";

export interface ScheduleStatus {
  states: Record<string, PhaseState>;
  message: string;
}

function computeStatus(events: ScheduleEvent[], now: Date): ScheduleStatus {
  const states: Record<string, PhaseState> = {};
  let activeEvent: ScheduleEvent | undefined;

  for (const event of events) {
    const start = new Date(event.start);
    const end = event.end ? new Date(event.end) : undefined;

    if (end && now >= end) {
      states[event.id] = "done";
    } else if (now >= start && (!end || now < end)) {
      states[event.id] = "active";
      activeEvent = event;
    } else {
      states[event.id] = "upcoming";
    }
  }

  let message: string;
  if (activeEvent) {
    message = `Right now: ${activeEvent.title.toLowerCase()}.`;
  } else if (events.length && now < new Date(events[0].start)) {
    message = "Submissions haven't opened yet — check back soon.";
  } else {
    const last = events[events.length - 1];
    message = `${last?.title ?? "This cycle"} — UnivaBio has wrapped for now.`;
  }

  return { states, message };
}

export function useScheduleStatus(events: ScheduleEvent[]): ScheduleStatus {
  const [status, setStatus] = useState<ScheduleStatus>(() => computeStatus(events, new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setStatus(computeStatus(events, new Date()));
    }, 60_000);
    return () => window.clearInterval(id);
  }, [events]);

  return status;
}
