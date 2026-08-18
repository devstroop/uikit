import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styles from "./Toast.module.css";

export type ToastTone = "info" | "success" | "warning" | "danger";

export interface ToastOptions {
  title?: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
  durationMs?: number;
}

interface ToastItem extends Required<Pick<ToastOptions, "title" | "tone" | "durationMs">> {
  id: number;
  description?: ReactNode;
}

interface ToastContextValue {
  toast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a <ToastProvider>");
  }
  return context;
}

export interface ToastProviderProps {
  children: ReactNode;
  durationMs?: number;
  className?: string;
}

export function ToastProvider({
  children,
  durationMs = 4000,
  className,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);

  const remove = useCallback((id: number) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (options: ToastOptions) => {
      const id = ++nextId.current;
      const item: ToastItem = {
        id,
        title: options.title ?? "",
        description: options.description,
        tone: options.tone ?? "info",
        durationMs: options.durationMs ?? durationMs,
      };
      setToasts((current) => [...current, item]);
      if (item.durationMs > 0) {
        window.setTimeout(() => remove(id), item.durationMs);
      }
    },
    [durationMs, remove],
  );

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className={[styles.viewport, className].filter(Boolean).join(" ")}
        aria-live="polite"
        aria-atomic="false"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={[styles.toast, styles[t.tone]].filter(Boolean).join(" ")}
          >
            <div className={styles.content}>
              <div className={styles.title}>{t.title}</div>
              {t.description && <div className={styles.description}>{t.description}</div>}
            </div>
            <button
              type="button"
              className={styles.dismiss}
              onClick={() => remove(t.id)}
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}