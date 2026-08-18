import { ReactNode } from 'react';
export type TabsVariant = "underline" | "pills";
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
    className?: string;
}
export declare function Tabs({ items, value, defaultValue, onChange, variant, className, }: TabsProps): import("react").JSX.Element;
