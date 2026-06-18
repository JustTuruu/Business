import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "mint" | "blush";
type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "bg-sky text-white hover:bg-[#3FA7DC] shadow-[var(--shadow-button)] focus-visible:ring-sky",
  secondary:
    "bg-sky-soft text-sky hover:bg-sky/15 focus-visible:ring-sky",
  outline:
    "border border-ink/15 text-ink hover:border-ink/30 hover:bg-white focus-visible:ring-ink/30",
  ghost: "text-ink hover:bg-ink/5 focus-visible:ring-ink/20",
  mint: "bg-mint text-white hover:bg-[#7BC275] focus-visible:ring-mint",
  blush: "bg-blush text-white hover:bg-[#EA8FAA] focus-visible:ring-blush",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

function buildClass(variant: Variant, size: Size, extra: string) {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  target?: string;
  rel?: string;
}

type NativeButtonProps = CommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  > & {
    href?: undefined;
  };

export function Button(props: LinkButtonProps | NativeButtonProps) {
  if ("href" in props && props.href !== undefined) {
    const {
      href,
      target,
      rel,
      variant = "primary",
      size = "md",
      className = "",
      children,
    } = props;
    const isExternal = /^https?:\/\//.test(href);
    const finalRel =
      rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={finalRel}
          className={buildClass(variant, size, className)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        target={target}
        rel={finalRel}
        className={buildClass(variant, size, className)}
      >
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props as NativeButtonProps;
  return (
    <button
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={buildClass(variant, size, className)}
    >
      {children}
    </button>
  );
}
