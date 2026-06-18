import { type HTMLAttributes } from "react";
import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerSize?: "default" | "narrow" | "wide";
  bleed?: boolean;
}

export function Section({
  className = "",
  containerSize = "default",
  bleed = false,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={`relative py-16 sm:py-20 lg:py-24 ${className}`}
      {...rest}
    >
      {bleed ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-sky-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-sky" />
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start"
      } ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

// Spec-friendly alias
export const SectionHeading = SectionHeader;
