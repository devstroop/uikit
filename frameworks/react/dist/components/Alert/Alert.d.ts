import { ReactNode } from 'react';
import { ComponentSize } from '../../sizes';
export type AlertTone = "info" | "success" | "warning" | "danger";
export type AlertVariant = "soft" | "outline" | "solid";
export type AlertSize = ComponentSize;
export interface AlertProps {
    tone?: AlertTone;
    variant?: AlertVariant;
    size?: AlertSize;
    title?: ReactNode;
    icon?: ReactNode;
    children?: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
}
export declare function Alert({ tone, variant, size, title, icon, children, dismissible, onDismiss, className, }: AlertProps): import("react").JSX.Element | null;
