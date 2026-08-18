import { HTMLAttributes, ReactNode } from 'react';
export type StatDeltaTone = "success" | "danger" | "neutral";
export interface StatProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    value: ReactNode;
    delta?: ReactNode;
    deltaTone?: StatDeltaTone;
    hint?: ReactNode;
}
export declare const Stat: import('react').ForwardRefExoticComponent<StatProps & import('react').RefAttributes<HTMLDivElement>>;
