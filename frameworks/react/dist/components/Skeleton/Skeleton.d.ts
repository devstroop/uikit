export type SkeletonVariant = "text" | "circle" | "rect";
export interface SkeletonProps {
    variant?: SkeletonVariant;
    width?: number | string;
    height?: number | string;
    className?: string;
}
export declare function Skeleton({ variant, width, height, className, }: SkeletonProps): import("react").JSX.Element;
