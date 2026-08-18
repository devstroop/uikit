import { type HTMLAttributes } from "react";
import styles from "./Progress.module.css";

export type ProgressTone = "primary" | "success" | "warning" | "danger";

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, "role"> {
  value?: number;
  max?: number;
  tone?: ProgressTone;
  indeterminate?: boolean;
  variant?: "linear" | "circular";
  size?: number;
}

export function Progress({
  value = 0,
  max = 100,
  tone = "primary",
  indeterminate = false,
  variant = "linear",
  size = 64,
  className,
  ...props
}: ProgressProps) {
  const clamped = max > 0 ? Math.min(max, Math.max(0, value)) : 0;
  const percent = max > 0 ? (clamped / max) * 100 : 0;

  if (variant === "circular") {
    const stroke = 6;
    const radius = Math.max(size / 2 - stroke, 2);
    const circumference = 2 * Math.PI * radius;
    const dashLength = circumference * (indeterminate ? 0.75 : 1);
    const offset = indeterminate ? 0 : circumference * (1 - percent / 100);

    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="progressbar"
        aria-label={props["aria-label"]}
        aria-labelledby={props["aria-labelledby"]}
        aria-valuenow={indeterminate ? undefined : Math.round(clamped)}
        aria-valuemin={0}
        aria-valuemax={max}
        id={props.id}
        style={props.style}
        className={[
          styles.circular,
          styles[tone],
          indeterminate ? styles.indeterminate : null,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <circle
          className={styles.track}
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
        <circle
          className={styles.fill}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${dashLength} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
    );
  }

  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : Math.round(clamped)}
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
