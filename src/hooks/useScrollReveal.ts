import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Tracks whether an element has been scrolled into view yet. One-shot: the
 * observer fires once and then disconnects, so nothing animates twice and
 * nothing runs on scroll. Reduced-motion users start in the revealed state.
 */
export function useScrollReveal<T extends Element>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [revealed, setRevealed] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, reducedMotion]);

  return { ref, revealed, reducedMotion } as const;
}
