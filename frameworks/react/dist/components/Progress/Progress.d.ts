import { HTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type ProgressTone = "primary" | "success" | "warning" | "danger";
export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, "role"> {
    value?: number;
    max?: number;
    tone?: ProgressTone;
    indeterminate?: boolean;
    variant?: "linear" | "circular";
    size?: number | ComponentSize;
}
export declare function Progress({ value, max, tone, indeterminate, variant, size, className, ...props }: ProgressProps): import("react").JSX.Element;
