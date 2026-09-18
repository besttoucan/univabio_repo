import type { ComponentType, SVGProps } from "react";
import styles from "./IconBadge.module.css";

export interface IconBadgeProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  size?: "md" | "sm";
  className?: string;
}

/**
 * One consistent badge treatment for every section icon (build spec v22,
 * section 4): a flat solid-color chip with the icon in a fixed light tone,
 * matching the same flat-fill construction technique as the planet/satellite
 * cast, instead of the earlier dark glow-outline treatment.
 */
export function IconBadge({ icon: Icon, color, size = "md", className }: IconBadgeProps) {
  return (
    <span
      className={`${styles.badge} ${size === "sm" ? styles.sm : ""} ${className ?? ""}`}
      style={{ background: color, color: "var(--color-paper)" }}
    >
      <Icon />
    </span>
  );
}
