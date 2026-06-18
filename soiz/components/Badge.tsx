import { type ReactNode } from "react";

type Tone = "sky" | "blush" | "mint" | "sun" | "neutral" | "dark";

const tones: Record<Tone, string> = {
  sky: "bg-sky/12 text-sky",
  blush: "bg-blush/15 text-blush",
  mint: "bg-mint/15 text-mint",
  sun: "bg-sun/25 text-ink",
  neutral: "bg-cream text-ink-soft",
  dark: "bg-ink text-white",
};

interface BadgeProps {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = "neutral", className = "", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
