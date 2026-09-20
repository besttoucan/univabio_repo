import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import styles from "./LavaLamp.module.css";

/**
 * The lamp behind the whole page.
 *
 * The blobs are plain circles inside a group carrying a gooey filter: blur
 * everything heavily, then crank the alpha channel's contrast back up so the
 * soft edges snap into hard ones again. Two blobs drifting near each other
 * therefore bulge toward one another and merge, the way wax in a lamp does,
 * instead of just overlapping like two blurred discs.
 *
 * It is fixed behind the content and holds still under prefers-reduced-motion.
 */

interface Blob {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  /** Seconds for one full rise and fall. */
  duration: number;
  delay: number;
  drift: number;
}

const BLOBS: Blob[] = [
  { cx: 16, cy: 78, r: 20, fill: "var(--magenta)", duration: 46, delay: 0, drift: 5 },
  { cx: 28, cy: 30, r: 13, fill: "var(--lilac)", duration: 62, delay: -12, drift: -7 },
  { cx: 50, cy: 88, r: 16, fill: "var(--lava)", duration: 54, delay: -30, drift: 6 },
  { cx: 72, cy: 22, r: 22, fill: "var(--magenta)", duration: 70, delay: -18, drift: -5 },
  { cx: 88, cy: 62, r: 15, fill: "var(--lilac)", duration: 58, delay: -44, drift: 7 },
  { cx: 62, cy: 55, r: 11, fill: "var(--lava)", duration: 40, delay: -24, drift: -6 },
];

export function LavaLamp() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className={styles.lamp} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          <filter id="lamp-goo" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
            />
          </filter>
        </defs>

        <g filter="url(#lamp-goo)">
          {BLOBS.map((blob, i) => (
            <circle
              key={i}
              className={reducedMotion ? undefined : styles.blob}
              cx={blob.cx}
              cy={blob.cy}
              r={blob.r}
              fill={blob.fill}
              style={{
                animationDuration: `${blob.duration}s`,
                animationDelay: `${blob.delay}s`,
                ["--drift" as string]: `${blob.drift}`,
              }}
            />
          ))}
        </g>
      </svg>

      {/* Holds the background down so text over it keeps its contrast. */}
      <div className={styles.scrim} />
    </div>
  );
}
