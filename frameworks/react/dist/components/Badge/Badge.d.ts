import { HTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type BadgeTone = "neutral" | "primary" | "success" | "warning" | "danger";
export type BadgeVariant = "soft" | "solid" | "outline";
export type BadgeSize = ComponentSize;
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
    variant?: BadgeVariant;
    size?: BadgeSize;
}
export declare const Badge: import('react').ForwardRefExoticComponent<BadgeProps & import('react').RefAttributes<HTMLSpanElement>>;
