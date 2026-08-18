import { useId, useState, type ReactNode } from "react";
import styles from "./Accordion.module.css";

export interface AccordionItem {
  key: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  value?: string[];
  defaultValue?: string[];
  onChange?: (keys: string[]) => void;
  className?: string;
}

export function Accordion({
  items,
  multiple = false,
  value,
  defaultValue,
  onChange,
  className,
}: AccordionProps) {
  const baseId = useId();
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue ?? []);
  const activeKeys = value ?? internalValue;

  const toggle = (key: string) => {
    const next = activeKeys.includes(key)
      ? activeKeys.filter((k) => k !== key)
      : multiple
        ? [...activeKeys, key]
        : [key];
    setInternalValue(next);
    onChange?.(next);
  };

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      {items.map((item) => {
        const open = activeKeys.includes(item.key);
        const contentId = `${baseId}-panel-${item.key}`;
        const buttonId = `${baseId}-trigger-${item.key}`;
        return (
          <div key={item.key} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={contentId}
                disabled={item.disabled}
                className={[
                  styles.trigger,
                  item.disabled ? styles.disabled : null,
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => toggle(item.key)}
              >
                <span className={styles.title}>{item.title}</span>
                <span className={[styles.chevron, open ? styles.open : null].filter(Boolean).join(" ")} aria-hidden="true">
                  ▾
                </span>
              </button>
            </h3>
            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={styles.content}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}