import { type ReactNode } from "react";
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
  return (
    <div className={[styles.field, className].filter(Boolean).join(" ")}>
      {label != null && (
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
          {required === true && <span className={styles.required} aria-hidden="true">*</span>}
        </label>
      )}
      {children}
      {error != null ? (
        <div className={styles.error} role="alert">
          {error}
        </div>
      ) : hint != null ? (
        <div className={styles.hint}>{hint}</div>
      ) : null}
    </div>
  );
}