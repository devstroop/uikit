import { HTMLAttributes } from 'react';
export interface BodyProps extends HTMLAttributes<HTMLElement> {
    as?: "main" | "div";
    children?: React.ReactNode;
}
export declare function Body({ as, className, children, ...props }: BodyProps): import("react").JSX.Element;
