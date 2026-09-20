import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

interface CountUpOptions {
  /** Milliseconds for the whole run. */
  duration?: number;
  /** Delay before counting starts, for staggering a row of figures. */
  delay?: number;
}

/** Ease-out cubic: fast off the mark, long settle on the final digits. */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Counts from zero to `target` the first time the element is scrolled into
 * view, then stops for good. Reduced-motion users get the final number
 * immediately, so the figure is never missing or mid-count for them.
 */
export function useCountUp(target: number, { duration = 1700, delay = 0 }: CountUpOptions = {}) {
  const { ref, revealed, reducedMotion } = useScrollReveal<HTMLElement>(0.45);
  const [counted, setCounted] = useState(0);
  // Reduced motion skips the run entirely and renders the final figure, so
  // there is no state to set and nothing to catch mid-count.
  const value = reducedMotion ? target : counted;

  useEffect(() => {
    if (!revealed || reducedMotion) return;

    let frame = 0;
    let startedAt = 0;

    const step = (now: number) => {
      if (!startedAt) startedAt = now;
      const elapsed = now - startedAt - delay;

      if (elapsed < 0) {
        frame = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min(1, elapsed / duration);
      setCounted(target * easeOut(progress));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCounted(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [revealed, reducedMotion, target, duration, delay]);

  return { ref, value };
}
