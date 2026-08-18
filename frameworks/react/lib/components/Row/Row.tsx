import { type CSSProperties, type HTMLAttributes } from "react";
import styles from "./Row.module.css";

export type RowAlign = "start" | "center" | "end" | "stretch" | "baseline";

export type RowJustify = "start" | "center" | "end" | "between" | "around" | "evenly";

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number | string;
  align?: RowAlign;
  justify?: RowJustify;
  wrap?: boolean;
}

export function Row({
  gap,
  align = "stretch",
  justify = "start",
  wrap = true,
  className,
  style,
  ...props
}: RowProps) {
  const mergedStyle: CSSProperties = {
    ...(gap != null ? { gap: typeof gap === "number" ? `${gap}px` : gap } : {}),
    ...style,
  };
  return (
    <div
      className={[
        styles.row,
        styles[align],
        styles[`justify-${justify}`],
        !wrap ? styles.noWrap : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={mergedStyle}
      {...props}
    />
  );
}