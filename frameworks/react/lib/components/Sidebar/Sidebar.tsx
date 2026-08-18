import { type HTMLAttributes } from "react";
import styles from "./Sidebar.module.css";

export type SidebarPosition = "left" | "right";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  position?: SidebarPosition;
  expanded?: boolean;
  children?: React.ReactNode;
}

export function Sidebar({
  position = "left",
  expanded = true,
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <aside
      className={[
        styles.sidebar,
        position === "right" ? styles.right : styles.left,
        !expanded ? styles.collapsed : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </aside>
  );
}