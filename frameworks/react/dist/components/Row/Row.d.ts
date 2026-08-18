import { HTMLAttributes } from 'react';
export type RowAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type RowJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
    gap?: number | string;
    align?: RowAlign;
    justify?: RowJustify;
    wrap?: boolean;
}
export declare function Row({ gap, align, justify, wrap, className, style, ...props }: RowProps): import("react").JSX.Element;
