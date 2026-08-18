import { useState, type ReactNode } from "react";
import styles from "./Alert.module.css";

export type AlertTone = "info" | "success" | "warning" | "danger";

export interface AlertProps {
  tone?: AlertTone;
  title?: ReactNode;
  children?: ReactNode;
  dismissible?: boolean;
  className?: string;
}

export function Alert({
  tone = "info",
  title,
  children,
  dismissible = false,
  className,
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div
      role="alert"
      className={[styles.alert, styles[tone], className].filter(Boolean).join(" ")}
    >
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.body}>{children}</div>}
      </div>
      {dismissible && (
        <button
          type="button"
          className={styles.dismiss}
          onClick={() => setDismissed(true)}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
}