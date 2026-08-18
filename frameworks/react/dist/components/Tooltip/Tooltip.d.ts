import { ReactNode } from 'react';
export type TooltipPlacement = "top" | "right" | "bottom" | "left";
export interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    placement?: TooltipPlacement;
    delayMs?: number;
    className?: string;
}
export declare function Tooltip({ content, children, placement, delayMs, className, }: TooltipProps): import("react").JSX.Element;
