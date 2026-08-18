export type AvatarSize = "sm" | "md" | "lg";
export type AvatarStatus = "online" | "offline" | "away";
export interface AvatarProps {
    name?: string;
    src?: string;
    alt?: string;
    size?: AvatarSize;
    status?: AvatarStatus;
    className?: string;
}
export declare function Avatar({ name, src, alt, size, status, className, }: AvatarProps): import("react").JSX.Element;
