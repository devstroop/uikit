export type SkeletonVariant = "text" | "circle" | "rect";

import styles from "./Skeleton.module.css";

export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export function Skeleton({
  variant = "text",
  width,
  height,
  className,
}: SkeletonProps) {
  const style: Record<string, string> = {};
  if (width !== undefined) {
    style.width = typeof width === "number" ? `${width}px` : width;
  }
  if (height !== undefined) {
    style.height = typeof height === "number" ? `${height}px` : height;
  }

  return (
    <span
      aria-hidden="true"
      className={[styles.skeleton, styles[variant], className].filter(Boolean).join(" ")}
      style={style}
    />
  );
}