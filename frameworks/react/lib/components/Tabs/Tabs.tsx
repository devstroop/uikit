import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import styles from "./Tabs.module.css";

export type TabsVariant = "underline" | "pills";
export type TabsPosition = "top" | "left" | "right" | "bottom";

export interface TabItem {
  key: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (key: string) => void;
  variant?: TabsVariant;
  position?: TabsPosition;
  className?: string;
}

export function Tabs({
  items,
  value,
  defaultValue,
  onChange,
  variant = "underline",
  position = "top",
  className,
}: TabsProps) {
  const baseId = useId();
  const tabListRef = useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = useState(defaultValue ?? items[0]?.key ?? "");
  const activeKey = value ?? internalValue;
  const vertical = position === "left" || position === "right";

  const select = (key: string) => {
    setInternalValue(key);
    onChange?.(key);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const enabled = items.filter((i) => !i.disabled);
    const index = enabled.findIndex((i) => i.key === activeKey);
    let next = -1;
    if (event.key === "ArrowRight" || (vertical && event.key === "ArrowDown")) {
      next = (index + 1) % enabled.length;
    } else if (event.key === "ArrowLeft" || (vertical && event.key === "ArrowUp")) {
      next = (index - 1 + enabled.length) % enabled.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = enabled.length - 1;
    }
    if (next >= 0) {
      event.preventDefault();
      const tab = tabListRef.current?.querySelector<HTMLButtonElement>(
        `[data-tab-key="${CSS.escape(enabled[next]?.key ?? "")}"]`,
      );
      tab?.focus();
      select(enabled[next]?.key ?? "");
    }
  };

  const activeItem = items.find((i) => i.key === activeKey);

  return (
    <div className={[styles.root, styles[position], className].filter(Boolean).join(" ")}>
      <div
        ref={tabListRef}
        role="tablist"
        className={[styles.tabList, styles[variant], styles[position]].filter(Boolean).join(" ")}
        onKeyDown={handleKeyDown}
      >
        {items.map((item) => {
          const selected = item.key === activeKey;
          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.key}`}
              data-tab-key={item.key}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.key}`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              className={[
                styles.tab,
                selected ? styles.active : null,
                item.disabled ? styles.disabled : null,
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => select(item.key)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {activeItem && (
        <div
          role="tabpanel"
          id={`${baseId}-panel-${activeItem.key}`}
          aria-labelledby={`${baseId}-tab-${activeItem.key}`}
          className={styles.panel}
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
}