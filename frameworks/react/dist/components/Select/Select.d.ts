import { ReactNode, SelectHTMLAttributes } from 'react';
export type SelectSize = "sm" | "md";
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    size?: SelectSize;
    invalid?: boolean;
    options?: readonly SelectOption[];
    children?: ReactNode;
}
export declare const Select: import('react').ForwardRefExoticComponent<SelectProps & import('react').RefAttributes<HTMLSelectElement>>;
