import { type CSSProperties, type HTMLAttributes } from "react";
import { type ComponentSize } from "../../sizes";
import styles from "./Row.module.css";

export type RowAlign = "start" | "center" | "end" | "stretch" | "baseline";

export type RowJustify = "start" | "center" | "end" | "between" | "around" | "evenly";

export type RowGap = ComponentSize | number | string;

const GAP_TIERS: Record<ComponentSize, string> = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl",
};

function gapClass(gap: RowGap | undefined): string | null {
  if (typeof gap !== "string") return null;
  return (GAP_TIERS as Record<string, string | undefined>)[gap] ?? null;
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  gap?: RowGap;
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
  const tier = gapClass(gap);
  const mergedStyle: CSSProperties = {
    ...(gap != null && !tier
      ? { gap: typeof gap === "number" ? `${gap}px` : gap }
      : {}),
    ...style,
  };
  return (
    <div
      className={[
        styles.row,
        styles[align],
        styles[`justify-${justify}`],
        !wrap ? styles.noWrap : null,
        tier ? styles[tier] : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={mergedStyle}
      {...props}
    />
  );
}