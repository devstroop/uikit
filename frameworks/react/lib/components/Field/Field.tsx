import { cloneElement, isValidElement, useId, type ReactNode } from "react";
import styles from "./Field.module.css";

export interface FieldProps {
  label?: ReactNode;
  htmlFor?: string;
  required?: boolean;
  hint?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Field({ label, htmlFor, required, hint, error, children, className }: FieldProps) {
  const errorId = useId();
  const hintId = useId();
  const messageId = error != null ? errorId : hint != null ? hintId : null;

  const control =
    isValidElement(children) && messageId != null
      ? cloneElement(
          children,
          {
            "aria-describedby": [
              (children.props as Record<string, unknown>)["aria-describedby"],
              messageId,
            ]
              .filter((v): v is string => typeof v === "string")
              .join(" ") || undefined,
            "aria-invalid": error != null
              ? true
              : (children.props as Record<string, unknown>)["aria-invalid"],
          } as Record<string, unknown>,
        )
      : children;

  return (
    <div className={[styles.field, className].filter(Boolean).join(" ")}>
      {label != null && (
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
          {required === true && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      {control}
      {error != null ? (
        <div id={errorId} className={styles.error} role="alert">
          {error}
        </div>
      ) : hint != null ? (
        <div id={hintId} className={styles.hint}>{hint}</div>
      ) : null}
    </div>
  );
}