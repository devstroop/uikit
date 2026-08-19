import { useState, type ReactNode } from "react";
import styles from "./Alert.module.css";

export type AlertTone = "info" | "success" | "warning" | "danger";

export type AlertVariant = "soft" | "outline" | "solid";

export interface AlertProps {
  tone?: AlertTone;
  variant?: AlertVariant;
  title?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export function Alert({
  tone = "info",
  variant = "soft",
  title,
  icon,
  children,
  dismissible = false,
  onDismiss,
  className,
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  const dismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  return (
    <div
      role="alert"
      className={[styles.alert, styles[tone], styles[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      {icon != null && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.body}>{children}</div>}
      </div>
      {dismissible && (
        <button
          type="button"
          className={styles.dismiss}
          onClick={dismiss}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
}