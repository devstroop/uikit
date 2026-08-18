import { useEffect, useState, type ChangeEvent, type ReactNode } from "react";
import { Switch } from "../Switch/Switch";
import styles from "./ThemeSwitcher.module.css";

export type ThemeName = "light" | "dark";

export interface ThemeSwitcherProps {
  defaultTheme?: ThemeName;
  onChange?: (theme: ThemeName) => void;
  label?: ReactNode;
  className?: string;
}

export function ThemeSwitcher({
  defaultTheme = "light",
  onChange,
  label = "Dark mode",
  className,
}: ThemeSwitcherProps) {
  const [checked, setChecked] = useState(() => {
    const current = typeof document !== "undefined" ? document.documentElement.dataset.theme : undefined;
    return current === "dark" ? true : defaultTheme === "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = checked ? "dark" : "light";
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.checked;
    setChecked(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    onChange?.(next ? "dark" : "light");
  };

  return (
    <label className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      {label}
      <Switch checked={checked} onChange={handleChange} />
    </label>
  );
}