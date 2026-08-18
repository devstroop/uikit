import { forwardRef, type TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextareaSize;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { size = "md", resize = "none", className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={[
        styles.textarea,
        styles[size],
        styles[`resize-${resize}`],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
});