import { useMemo } from "react";
import styles from "./Avatar.module.css";

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

const PALETTE = ["#2563eb", "#7c3aed", "#059669", "#d97706", "#dc2626", "#0ea5e9"];

function initialsFor(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function colorFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return PALETTE[hash % PALETTE.length] ?? PALETTE[0]!;
}

export function Avatar({
  name,
  src,
  alt,
  size = "md",
  status,
  className,
}: AvatarProps) {
  const initials = useMemo(() => (name ? initialsFor(name) : "?"), [name]);
  const color = useMemo(() => (name ? colorFor(name) : PALETTE[0]), [name]);

  const content = src ? (
    <img className={styles.image} src={src} alt={alt ?? name ?? ""} />
  ) : (
    <span aria-hidden="true" className={styles.initials} style={{ background: color }}>
      {initials}
    </span>
  );

  return (
    <span
      className={[
        styles.avatar,
        styles[size],
        status ? styles[status] : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="img"
      aria-label={alt ?? name ?? "avatar"}
    >
      {content}
      {status && <span className={styles.status} aria-hidden="true" />}
    </span>
  );
}