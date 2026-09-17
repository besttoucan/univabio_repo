import styles from "./OrganelleMarks.module.css";

export interface OrganelleMarksProps {
  className?: string;
  variant?: "a" | "b";
}

/** Quiet, tinted organelle outlines — "inside the cell" set dressing for data-dense stretches, colored per the semantic palette. */
export function OrganelleMarks({ className, variant = "a" }: OrganelleMarksProps) {
  return (
    <svg className={`${styles.svg} ${className ?? ""}`} viewBox="0 0 200 120" aria-hidden="true">
      {variant === "a" ? (
        <>
          <ellipse className={styles.shapeA} cx="60" cy="55" rx="42" ry="26" transform="rotate(-8 60 55)" />
          <path
            className={styles.shapeB}
            d="M110 30 C 140 20, 168 38, 160 62 C 152 86, 118 84, 108 64 C 100 48, 96 38, 110 30 Z"
          />
          <circle className={styles.shapeA} cx="45" cy="90" r="10" />
        </>
      ) : (
        <>
          <path
            className={styles.shapeB}
            d="M40 40 C 70 24, 100 34, 96 60 C 92 86, 56 92, 36 74 C 20 60, 20 52, 40 40 Z"
          />
          <ellipse className={styles.shapeA} cx="140" cy="70" rx="34" ry="18" transform="rotate(14 140 70)" />
        </>
      )}
    </svg>
  );
}
