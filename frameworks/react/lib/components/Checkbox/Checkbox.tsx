import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type="checkbox"
      className={[styles.checkbox, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});