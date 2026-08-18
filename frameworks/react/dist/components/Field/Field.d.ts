import { ReactNode } from 'react';
export interface FieldProps {
    label?: ReactNode;
    htmlFor?: string;
    required?: boolean;
    hint?: ReactNode;
    error?: ReactNode;
    children: ReactNode;
    className?: string;
}
export declare function Field({ label, htmlFor, required, hint, error, children, className }: FieldProps): import("react").JSX.Element;
