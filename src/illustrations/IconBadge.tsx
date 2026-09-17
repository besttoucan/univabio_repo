import type { ComponentType, SVGProps } from "react";
import styles from "./IconBadge.module.css";

export interface IconBadgeProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  size?: "md" | "sm";
  className?: string;
}

/** One consistent badge treatment (rounded square, one semantic color, flat white glyph) for every section icon. */
export function IconBadge({ icon: Icon, color, size = "md", className }: IconBadgeProps) {
  return (
    <span className={`${styles.badge} ${size === "sm" ? styles.sm : ""} ${className ?? ""}`} style={{ background: color }}>
      <Icon />
    </span>
  );
}
