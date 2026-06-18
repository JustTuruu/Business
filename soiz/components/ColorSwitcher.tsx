"use client";

import Link from "next/link";
import { type Product } from "@/lib/products";

interface ColorSwitcherProps {
  currentSlug: string;
  options: Pick<Product, "slug" | "name" | "themeColor">[];
}

const dotColor: Record<Product["themeColor"], string> = {
  sky: "bg-sky",
  blush: "bg-blush",
  mint: "bg-mint",
  sun: "bg-sun",
};

export function ColorSwitcher({ currentSlug, options }: ColorSwitcherProps) {
  if (options.length < 2) return null;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-ink-soft">Өнгө:</span>
      <div className="flex items-center gap-2">
        {options.map((o) => {
          const isCurrent = o.slug === currentSlug;
          return (
            <Link
              key={o.slug}
              href={`/products/${o.slug}`}
              aria-label={o.name}
              aria-current={isCurrent}
              className={`grid place-items-center rounded-full border-2 transition-all w-9 h-9 ${
                isCurrent
                  ? "border-ink"
                  : "border-transparent hover:border-ink/30"
              }`}
            >
              <span
                className={`block w-6 h-6 rounded-full ${dotColor[o.themeColor]} border ${
                  o.themeColor === "sun" ? "border-ink/15" : "border-white/40"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
