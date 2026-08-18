import { HTMLAttributes } from 'react';
export type BadgeTone = "neutral" | "primary" | "success" | "warning" | "danger";
export type BadgeVariant = "soft" | "solid" | "outline";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
    variant?: BadgeVariant;
}
export declare const Badge: import('react').ForwardRefExoticComponent<BadgeProps & import('react').RefAttributes<HTMLSpanElement>>;
