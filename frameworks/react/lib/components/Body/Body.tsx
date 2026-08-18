import { type HTMLAttributes } from "react";
import styles from "./Body.module.css";

export interface BodyProps extends HTMLAttributes<HTMLElement> {
  as?: "main" | "div";
  children?: React.ReactNode;
}

export function Body({ as = "main", className, children, ...props }: BodyProps) {
  const Tag = as;
  return (
    <Tag className={[styles.body, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Tag>
  );
}