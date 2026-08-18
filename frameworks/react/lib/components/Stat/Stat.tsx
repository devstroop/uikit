import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Stat.module.css";

export type StatDeltaTone = "success" | "danger" | "neutral";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: ReactNode;
  delta?: ReactNode;
  deltaTone?: StatDeltaTone;
  hint?: ReactNode;
}

export const Stat = forwardRef<HTMLDivElement, StatProps>(function Stat(
  { label, value, delta, deltaTone = "neutral", hint, className, ...props },
  ref,
) {
  return (
    <div ref={ref} className={[styles.stat, className].filter(Boolean).join(" ")} {...props}>
      <div className={styles.label}>{label}</div>
      <div className={styles.row}>
        <div className={styles.value}>{value}</div>
        {delta != null && (
          <div className={[styles.delta, styles[deltaTone]].join(" ")}>{delta}</div>
        )}
      </div>
      {hint != null && <div className={styles.hint}>{hint}</div>}
    </div>
  );
});