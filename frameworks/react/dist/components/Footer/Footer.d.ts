import { HTMLAttributes } from 'react';
export interface FooterProps extends HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
export declare function Footer({ className, children, ...props }: FooterProps): import("react").JSX.Element;
