import { ReactNode } from 'react';
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
interface ToastContextValue {
    toast: (options: ToastOptions) => void;
}
export declare function useToast(): ToastContextValue;
export interface ToastProviderProps {
    children: ReactNode;
    durationMs?: number;
    position?: ToastPosition;
    /** Pause every auto-dismiss timer while a toast is hovered or the tab is hidden. */
    pauseOnHover?: boolean;
    className?: string;
}
export declare function ToastProvider({ children, durationMs, position, pauseOnHover, className, }: ToastProviderProps): import("react").JSX.Element;
export {};
