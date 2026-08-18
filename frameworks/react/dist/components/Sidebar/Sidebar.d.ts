import { HTMLAttributes } from 'react';
export type SidebarPosition = "left" | "right";
export interface SidebarProps extends HTMLAttributes<HTMLElement> {
    position?: SidebarPosition;
    expanded?: boolean;
    responsive?: boolean;
    overlay?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}
export declare function Sidebar({ position, expanded, responsive, overlay, onClose, className, children, ...props }: SidebarProps): import("react").JSX.Element;
