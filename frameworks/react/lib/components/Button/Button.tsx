import { forwardRef, type ButtonHTMLAttributes } from "react";
import type { ComponentSize } from "../../sizes";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "success" | "info";
export type ButtonSize = ComponentSize;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconOnly?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    fullWidth = false,
    iconOnly = false,
    className,
    type = "button",
    ...props
  },
  ref,
) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : null,
    iconOnly ? styles.iconOnly : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button ref={ref} type={type} className={classNames} {...props} />;
});