import { forwardRef, type LabelHTMLAttributes } from "react";
import styles from "./Label.module.css";

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  function Label({ className, children, ...props }, ref) {
    return (
      <label ref={ref} className={[styles.label, className].filter(Boolean).join(" ")} {...props}>
        {children}
      </label>
    );
  },
);