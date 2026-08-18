import { ReactNode } from 'react';
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
export declare function Dialog({ open, onClose, title, description, children, footer, size, className, }: DialogProps): import("react").JSX.Element;
