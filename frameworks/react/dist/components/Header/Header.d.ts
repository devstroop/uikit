import { HTMLAttributes } from 'react';
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
export declare function Header({ className, children, ...props }: HeaderProps): import("react").JSX.Element;
