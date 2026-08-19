import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styles from "./Toast.module.css";

export type ToastTone = "info" | "success" | "warning" | "danger";

export type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface ToastAction {
  label: ReactNode;
  onClick?: () => void;
}

export interface ToastOptions {
  title?: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
  durationMs?: number;
  /** Reuse an id to update an existing toast instead of appending (sonner parity). */
  id?: number | string;
  action?: ToastAction;
  cancel?: ToastAction;
  dismissible?: boolean;
  /** Dismiss the toast when the body is clicked (Radzen CloseOnClick parity). */
  closeOnClick?: boolean;
  /** Render a bottom progress bar tracking the duration (Radzen ShowProgress parity). */
  showProgress?: boolean;
  position?: ToastPosition;
  onDismiss?: () => void;
  onAutoClose?: () => void;
}

interface ToastItem {
  id: number | string;
  title?: ReactNode;
  description?: ReactNode;
  tone: ToastTone;
  durationMs: number;
  action?: ToastAction;
  cancel?: ToastAction;
  dismissible: boolean;
  closeOnClick: boolean;
  showProgress: boolean;
  position: ToastPosition;
  onDismiss?: () => void;
  onAutoClose?: () => void;
  leaving?: boolean;
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
  position?: ToastPosition;
  /** Pause every auto-dismiss timer while a toast is hovered or the tab is hidden. */
  pauseOnHover?: boolean;
  className?: string;
}

const EXIT_MS = 200;

const positionClass: Record<ToastPosition, string> = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight",
};

interface TimerInfo {
  remaining: number;
  startedAt: number;
  timeoutId: number;
}

export function ToastProvider({
  children,
  durationMs = 4000,
  position = "bottom-right",
  pauseOnHover = true,
  className,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [paused, setPaused] = useState(false);
  const toastsRef = useRef<ToastItem[]>([]);
  const timers = useRef(new Map<number | string, TimerInfo>());
  const pausedRef = useRef(false);
  const nextId = useRef(0);

  const setPausedBoth = (value: boolean) => {
    pausedRef.current = value;
    setPaused(value);
  };

  const pause = useCallback((id: number | string) => {
    const timer = timers.current.get(id);
    if (!timer) return;
    window.clearTimeout(timer.timeoutId);
    timer.remaining = Math.max(0, timer.remaining - (Date.now() - timer.startedAt));
  }, []);

  const stopTimer = useCallback((id: number | string) => {
    const timer = timers.current.get(id);
    if (timer) {
      window.clearTimeout(timer.timeoutId);
      timers.current.delete(id);
    }
  }, []);

  const removeNow = useCallback(
    (id: number | string) => {
      stopTimer(id);
      setToasts((current) => {
        const next = current.filter((t) => t.id !== id);
        toastsRef.current = next;
        return next;
      });
    },
    [stopTimer],
  );

  const expire = useCallback(
    (id: number | string) => {
      const item = toastsRef.current.find((t) => t.id === id);
      if (!item || item.leaving) return;
      item.onAutoClose?.();
      removeNow(id);
    },
    [removeNow],
  );

  const resume = useCallback(
    (id: number | string) => {
      const timer = timers.current.get(id);
      if (!timer || timer.remaining <= 0) return;
      timer.startedAt = Date.now();
      timer.timeoutId = window.setTimeout(() => expire(id), timer.remaining);
    },
    [expire],
  );

  const pauseAll = useCallback(() => {
    if (!pausedRef.current) {
      timers.current.forEach((_, id) => pause(id));
    }
    setPausedBoth(true);
  }, [pause]);

  const resumeAll = useCallback(() => {
    timers.current.forEach((_, id) => resume(id));
    setPausedBoth(false);
  }, [resume]);

  useEffect(() => {
    if (!pauseOnHover) return;
    const onVisibility = () => {
      if (document.hidden) {
        pauseAll();
      } else {
        resumeAll();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [pauseOnHover, pauseAll, resumeAll]);

  const dismiss = useCallback(
    (id: number | string) => {
      const item = toastsRef.current.find((t) => t.id === id);
      if (!item || item.leaving) return;
      item.onDismiss?.();
      setToasts((current) => {
        const next = current.map((t) => (t.id === id ? { ...t, leaving: true } : t));
        toastsRef.current = next;
        return next;
      });
      window.setTimeout(() => removeNow(id), EXIT_MS);
    },
    [removeNow],
  );

  const startTimer = useCallback(
    (item: ToastItem) => {
      if (item.durationMs <= 0) return;
      const timer: TimerInfo = {
        remaining: item.durationMs,
        startedAt: Date.now(),
        timeoutId: 0,
      };
      timers.current.set(item.id, timer);
      if (!pausedRef.current) {
        resume(item.id);
      }
    },
    [resume],
  );

  const toast = useCallback(
    (options: ToastOptions) => {
      const existing = toastsRef.current.find((t) => t.id === options.id);
      const item: ToastItem = {
        id: options.id ?? ++nextId.current,
        title: options.title,
        description: options.description,
        tone: options.tone ?? "info",
        durationMs: options.durationMs ?? durationMs,
        action: options.action,
        cancel: options.cancel,
        dismissible: options.dismissible ?? true,
        closeOnClick: options.closeOnClick ?? false,
        showProgress: options.showProgress ?? false,
        position: options.position ?? position,
        onDismiss: options.onDismiss,
        onAutoClose: options.onAutoClose,
      };

      setToasts((current) => {
        const next = existing
          ? current.map((t) => (t.id === item.id ? { ...item, leaving: false } : t))
          : [...current, item];
        toastsRef.current = next;
        return next;
      });

      if (existing) {
        stopTimer(item.id);
      }
      startTimer(item);
    },
    [durationMs, position, startTimer, stopTimer],
  );

  const value = useMemo(() => ({ toast }), [toast]);
  const positions = useMemo(
    () => Array.from(new Set([position, ...toasts.map((t) => t.position)])),
    [position, toasts],
  );

  const onViewportEnter = pauseOnHover ? pauseAll : undefined;
  const onViewportLeave = pauseOnHover ? resumeAll : undefined;

  return (
    <ToastContext.Provider value={value}>
      {children}
      {positions.map((pos) => (
        <div
          key={pos}
          className={[
            styles.viewport,
            styles[positionClass[pos]],
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          aria-live="polite"
          aria-atomic="false"
          onMouseEnter={onViewportEnter}
          onMouseLeave={onViewportLeave}
        >
          {toasts
            .filter((t) => t.position === pos)
            .map((t) => (
              <div
                key={t.id}
                role={t.tone === "danger" ? "alert" : "status"}
                data-paused={paused ? "true" : "false"}
                data-clickable={t.closeOnClick ? "true" : "false"}
                className={[
                  styles.toast,
                  styles[t.tone],
                  t.leaving ? styles.leaving : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={t.closeOnClick ? () => dismiss(t.id) : undefined}
              >
                <div className={styles.content}>
                  <div className={styles.title}>{t.title}</div>
                  {t.description && (
                    <div className={styles.description}>{t.description}</div>
                  )}
                  {(t.action || t.cancel) && (
                    <div className={styles.actions}>
                      {t.action && (
                        <button
                          type="button"
                          className={styles.action}
                          onClick={() => {
                            t.action?.onClick?.();
                            dismiss(t.id);
                          }}
                        >
                          {t.action.label}
                        </button>
                      )}
                      {t.cancel && (
                        <button
                          type="button"
                          className={styles.cancel}
                          onClick={() => {
                            t.cancel?.onClick?.();
                            dismiss(t.id);
                          }}
                        >
                          {t.cancel.label}
                        </button>
                      )}
                    </div>
                  )}
                </div>
                {t.dismissible && (
                  <button
                    type="button"
                    className={styles.dismiss}
                    onClick={() => dismiss(t.id)}
                    aria-label="Dismiss notification"
                  >
                    ×
                  </button>
                )}
                {t.showProgress && t.durationMs > 0 && (
                  <div
                    className={styles.progress}
                    style={{ animationDuration: `${t.durationMs}ms` }}
                  />
                )}
              </div>
            ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
}