import { ReactNode } from 'react';
export type AlertTone = "info" | "success" | "warning" | "danger";
export interface AlertProps {
    tone?: AlertTone;
    title?: ReactNode;
    icon?: ReactNode;
    children?: ReactNode;
    dismissible?: boolean;
    className?: string;
}
export declare function Alert({ tone, title, icon, children, dismissible, className, }: AlertProps): import("react").JSX.Element | null;
