import { forwardRef, type ReactNode, type SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

export type SelectSize = "sm" | "md";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: SelectSize;
  invalid?: boolean;
  options?: readonly SelectOption[];
  children?: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { size = "md", invalid = false, options, children, className, ...props },
  ref,
) {
  return (
    <select
      ref={ref}
      className={[styles.select, styles[size], invalid ? styles.invalid : null, className]
        .filter(Boolean)
        .join(" ")}
      aria-invalid={invalid || undefined}
      {...props}
    >
      {options != null
        ? options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))
        : children}
    </select>
  );
});