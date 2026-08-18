import { ReactNode } from 'react';
export type ToastTone = "info" | "success" | "warning" | "danger";
export interface ToastOptions {
    title?: ReactNode;
    description?: ReactNode;
    tone?: ToastTone;
    durationMs?: number;
}
interface ToastContextValue {
    toast: (options: ToastOptions) => void;
}
export declare function useToast(): ToastContextValue;
export interface ToastProviderProps {
    children: ReactNode;
    durationMs?: number;
    position?: ToastPosition;
    className?: string;
}
export type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export declare function ToastProvider({ children, durationMs, position, className, }: ToastProviderProps): import("react").JSX.Element;
export {};
