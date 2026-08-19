import { ReactNode } from 'react';
export type TabsVariant = "underline" | "pills";
export type TabsPosition = "top" | "left" | "right" | "bottom";
export interface TabItem {
    key: string;
    label: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}
export interface TabsProps {
    items: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (key: string) => void;
    variant?: TabsVariant;
    position?: TabsPosition;
    className?: string;
}
export declare function Tabs({ items, value, defaultValue, onChange, variant, position, className, }: TabsProps): import("react").JSX.Element;
