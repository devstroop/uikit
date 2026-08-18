import { HTMLAttributes, ReactNode } from 'react';
export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}
export declare function Layout({ className, children, ...props }: LayoutProps): import("react").JSX.Element;
