import { type HTMLAttributes } from "react";
import styles from "./Progress.module.css";

export type ProgressTone = "primary" | "success" | "warning" | "danger";

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, "role"> {
  value?: number;
  max?: number;
  tone?: ProgressTone;
  indeterminate?: boolean;
}

export function Progress({
  value = 0,
  max = 100,
  tone = "primary",
  indeterminate = false,
  className,
  ...props
}: ProgressProps) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={max}
      className={[
        styles.track,
        styles[tone],
        indeterminate ? styles.indeterminate : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div
        className={styles.bar}
        style={indeterminate ? undefined : { width: `${percent}%` }}
      />
    </div>
  );
}