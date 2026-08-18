import { Children, isValidElement, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Layout.module.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function Layout({ className, children, ...props }: LayoutProps) {
  const header: ReactNode[] = [];
  const footer: ReactNode[] = [];
  const body: ReactNode[] = [];
  const left: ReactNode[] = [];
  const right: ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      body.push(child);
      return;
    }
    if (child.type === Header) {
      header.push(child);
    } else if (child.type === Footer) {
      footer.push(child);
    } else if (child.type === Sidebar) {
      const position = (child.props as { position?: "left" | "right" }).position;
      (position === "right" ? right : left).push(child);
    } else {
      body.push(child);
    }
  });

  return (
    <div className={[styles.layout, className].filter(Boolean).join(" ")} {...props}>
      {header}
      <div className={styles.row}>
        {left}
        {body}
        {right}
      </div>
      {footer}
    </div>
  );
}