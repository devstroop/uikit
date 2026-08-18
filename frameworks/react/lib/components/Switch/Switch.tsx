import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "./Switch.module.css";

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type="checkbox"
      role="switch"
      className={[styles.switch, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});