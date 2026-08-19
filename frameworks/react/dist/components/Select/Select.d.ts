import { ReactNode, SelectHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type SelectSize = ComponentSize;
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
