import { ButtonHTMLAttributes } from 'react';
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
}
export declare const Button: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
