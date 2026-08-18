import { useEffect, type HTMLAttributes } from "react";
import styles from "./Sidebar.module.css";

export type SidebarPosition = "left" | "right";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  position?: SidebarPosition;
  expanded?: boolean;
  responsive?: boolean;
  overlay?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export function Sidebar({
  position = "left",
  expanded = true,
  responsive = false,
  overlay = false,
  onClose,
  className,
  children,
  ...props
}: SidebarProps) {
  useEffect(() => {
    if (!overlay || !expanded || onClose == null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [overlay, expanded, onClose]);

  return (
    <>
      {overlay && expanded ? (
        <div className={`${styles.mask} se-layout-mask`} aria-hidden="true" onClick={onClose} />
      ) : null}
      <aside
        className={[
          styles.sidebar,
          position === "right" ? styles.right : styles.left,
          !expanded ? styles.collapsed : null,
          responsive ? styles.responsive : null,
          overlay ? [styles.overlay, "se-sidebar--overlay"] : null,
          className,
        ]
          .flat()
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </aside>
    </>
  );
}
