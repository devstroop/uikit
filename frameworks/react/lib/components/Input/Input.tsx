import { forwardRef, type InputHTMLAttributes } from "react";
import type { ComponentSize } from "../../sizes";
import styles from "./Input.module.css";

export type InputSize = ComponentSize;

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "md", invalid = false, className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={[styles.input, styles[size], invalid ? styles.invalid : null, className]
        .filter(Boolean)
        .join(" ")}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
});