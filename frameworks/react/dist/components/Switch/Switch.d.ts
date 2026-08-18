import { InputHTMLAttributes } from 'react';
export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
export declare const Switch: import('react').ForwardRefExoticComponent<SwitchProps & import('react').RefAttributes<HTMLInputElement>>;
