import { ReactNode } from 'react';
export interface AccordionItem {
    key: string;
    title: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}
export interface AccordionProps {
    items: AccordionItem[];
    multiple?: boolean;
    value?: string[];
    defaultValue?: string[];
    onChange?: (keys: string[]) => void;
    className?: string;
}
export declare function Accordion({ items, multiple, value, defaultValue, onChange, className, }: AccordionProps): import("react").JSX.Element;
