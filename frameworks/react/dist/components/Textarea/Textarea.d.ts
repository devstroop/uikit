import { TextareaHTMLAttributes } from 'react';
export type TextareaSize = "sm" | "md" | "lg";
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: TextareaSize;
    resize?: "none" | "vertical" | "horizontal" | "both";
}
export declare const Textarea: import('react').ForwardRefExoticComponent<TextareaProps & import('react').RefAttributes<HTMLTextAreaElement>>;
