import type { ReactNode } from "react";

export function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className={["row-content", className].filter(Boolean).join(" ")}>{children}</div>
    </section>
  );
}