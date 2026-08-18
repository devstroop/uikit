import { HTMLAttributes } from 'react';
export type ProgressTone = "primary" | "success" | "warning" | "danger";
export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, "role"> {
    value?: number;
    max?: number;
    tone?: ProgressTone;
    indeterminate?: boolean;
}
export declare function Progress({ value, max, tone, indeterminate, className, ...props }: ProgressProps): import("react").JSX.Element;
