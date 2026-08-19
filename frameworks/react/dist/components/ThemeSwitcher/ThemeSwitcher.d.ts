import { ReactNode } from 'react';
export type ThemeName = "light" | "dark";
export interface ThemeSwitcherProps {
    defaultTheme?: ThemeName;
    onChange?: (theme: ThemeName) => void;
    label?: ReactNode;
    className?: string;
}
export declare function ThemeSwitcher({ defaultTheme, onChange, label, className, }: ThemeSwitcherProps): import("react").JSX.Element;
