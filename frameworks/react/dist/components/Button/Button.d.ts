import { ButtonHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "success" | "info";
export type ButtonSize = ComponentSize;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    iconOnly?: boolean;
}
export declare const Button: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
