import { type HTMLAttributes } from "react";
import styles from "./Header.module.css";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header className={[styles.header, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </header>
  );
}