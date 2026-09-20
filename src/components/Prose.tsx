import type { ReactNode } from "react";
import styles from "./Prose.module.css";

/** Long-form text at a readable measure: the rules and the privacy policy. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className={styles.prose}>{children}</div>;
}
