import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Card.module.css";

export type CardVariant = "elevated" | "outlined" | "interactive" | "text";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  header?: ReactNode;
  footer?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "elevated", header, footer, className, children, onKeyDown, ...props },
  ref,
) {
  const interactive = variant === "interactive";
  return (
    <div
      ref={ref}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (!interactive || (event.key !== "Enter" && event.key !== " ")) {
          return;
        }
        event.preventDefault();
        event.currentTarget.click();
      }}
      className={[styles.card, styles[variant], className].filter(Boolean).join(" ")}
      {...props}
    >
      {header != null && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
      {footer != null && <div className={styles.footer}>{footer}</div>}
    </div>
  );
});