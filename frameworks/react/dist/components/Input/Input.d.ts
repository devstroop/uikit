import { InputHTMLAttributes } from 'react';
export type InputSize = "sm" | "md";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: InputSize;
    invalid?: boolean;
}
export declare const Input: import('react').ForwardRefExoticComponent<InputProps & import('react').RefAttributes<HTMLInputElement>>;
