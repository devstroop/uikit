import { HTMLAttributes, ReactNode } from 'react';
export type CardVariant = "elevated" | "outlined" | "interactive" | "text";
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    header?: ReactNode;
    footer?: ReactNode;
}
export declare const Card: import('react').ForwardRefExoticComponent<CardProps & import('react').RefAttributes<HTMLDivElement>>;
