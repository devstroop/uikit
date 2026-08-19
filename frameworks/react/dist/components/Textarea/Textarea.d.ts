import { TextareaHTMLAttributes } from 'react';
import { ComponentSize } from '../../sizes';
export type TextareaSize = ComponentSize;
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    size?: TextareaSize;
    resize?: "none" | "vertical" | "horizontal" | "both";
}
export declare const Textarea: import('react').ForwardRefExoticComponent<TextareaProps & import('react').RefAttributes<HTMLTextAreaElement>>;
