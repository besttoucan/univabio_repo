import type { ComponentType, SVGProps } from "react";
import styles from "./IconBadge.module.css";

export interface IconBadgeProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  size?: "md" | "sm";
  className?: string;
}

/**
 * One consistent badge treatment for every section icon — build spec v17:
 * the old flat filled-square badges clashed with the dark/particle/glow
 * language, so this is now a dark, transparent badge with a glowing outline
 * and a glowing line-icon in the semantic color, instead of a solid color
 * fill with a flat white glyph.
 */
export function IconBadge({ icon: Icon, color, size = "md", className }: IconBadgeProps) {
  return (
    <span
      className={`${styles.badge} ${size === "sm" ? styles.sm : ""} ${className ?? ""}`}
      style={{ color, borderColor: color, boxShadow: `0 0 8px 0 ${color}, 0 0 18px 2px ${color}` }}
    >
      <Icon />
    </span>
  );
}
