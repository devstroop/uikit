import { HTMLAttributes } from 'react';
export type SidebarPosition = "left" | "right";
export interface SidebarProps extends HTMLAttributes<HTMLElement> {
    position?: SidebarPosition;
    expanded?: boolean;
    children?: React.ReactNode;
}
export declare function Sidebar({ position, expanded, className, children, ...props }: SidebarProps): import("react").JSX.Element;
