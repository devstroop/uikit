import { forwardRef, type HTMLAttributes } from "react";
import type { ComponentSize } from "../../sizes";
import styles from "./Badge.module.css";

export type BadgeTone = "neutral" | "primary" | "success" | "warning" | "danger";
export type BadgeVariant = "soft" | "solid" | "outline";
export type BadgeSize = ComponentSize;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { tone = "neutral", variant = "soft", size = "md", className, children, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={[styles.badge, styles[size], styles[tone], styles[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
});