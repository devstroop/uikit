import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Card.module.css";

export type CardVariant = "elevated" | "outlined" | "interactive";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  header?: ReactNode;
  footer?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "elevated", header, footer, className, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={[styles.card, styles[variant], className].filter(Boolean).join(" ")}
      {...props}
    >
      {header != null && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
      {footer != null && <div className={styles.footer}>{footer}</div>}
    </div>
  );
});