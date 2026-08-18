import { type HTMLAttributes } from "react";
import styles from "./Footer.module.css";

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export function Footer({ className, children, ...props }: FooterProps) {
  return (
    <footer className={[styles.footer, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </footer>
  );
}