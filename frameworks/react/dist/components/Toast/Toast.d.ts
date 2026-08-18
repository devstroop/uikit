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
    className?: string;
}
export declare function ToastProvider({ children, durationMs, className, }: ToastProviderProps): import("react").JSX.Element;
export {};
