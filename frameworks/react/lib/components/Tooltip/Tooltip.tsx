import {
  cloneElement,
  isValidElement,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styles from "./Tooltip.module.css";

export type TooltipPlacement = "top" | "right" | "bottom" | "left";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  delayMs?: number;
  className?: string;
}

export function Tooltip({
  content,
  children,
  placement = "top",
  delayMs = 300,
  className,
}: TooltipProps) {
  const id = useId();
  const timer = useRef<number | null>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    timer.current = window.setTimeout(() => setOpen(true), delayMs);
  };
  const hide = () => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    setOpen(false);
  };

  const trigger = isValidElement(children)
    ? cloneElement(children, {
        "aria-describedby": open ? id : undefined,
      } as Record<string, unknown>)
    : children;

  return (
    <span
      className={[styles.trigger, className].filter(Boolean).join(" ")}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {trigger}
      {open && (
        <span
          role="tooltip"
          id={id}
          className={[styles.tooltip, styles[placement]].filter(Boolean).join(" ")}
        >
          {content}
          <span className={styles.arrow} aria-hidden="true" />
        </span>
      )}
    </span>
  );
}