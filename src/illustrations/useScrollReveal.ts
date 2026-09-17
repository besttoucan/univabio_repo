import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * One-shot "has this element been scrolled to yet" reveal — TreeHacks-style
 * staged arrival (fade/grow into place once, then hold still) rather than a
 * continuous loop. Cheap: IntersectionObserver fires once, then disconnects.
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
