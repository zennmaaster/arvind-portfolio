import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}

export function Section({ children, className, alt, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-6 py-24 ${alt ? "section-alt" : ""} ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl relative z-10">{children}</div>
    </section>
  );
}
