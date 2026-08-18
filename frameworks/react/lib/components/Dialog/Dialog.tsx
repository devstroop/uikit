import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Dialog.module.css";

export type DialogSize = "sm" | "md" | "lg";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: DialogSize;
  className?: string;
}

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  className,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) {
      return;
    }
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={[styles.dialog, styles[size], className].filter(Boolean).join(" ")}
      onClose={onClose}
      aria-labelledby="se-dialog-title"
      aria-describedby={description ? "se-dialog-desc" : undefined}
    >
      {title && (
        <header className={styles.header}>
          <div>
            <h2 id="se-dialog-title" className={styles.title}>
              {title}
            </h2>
            {description && (
              <p id="se-dialog-desc" className={styles.description}>
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close dialog"
          >
            ×
          </button>
        </header>
      )}
      {children && <div className={styles.body}>{children}</div>}
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </dialog>
  );
}