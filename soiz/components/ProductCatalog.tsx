"use client";

import { useMemo, useState } from "react";
import { type Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

type Filter = "all" | "toothbrush" | "toothpaste";

interface ProductCatalogProps {
  products: Product[];
}

const tabs: { key: Filter; label: string }[] = [
  { key: "all", label: "Бүгд" },
  { key: "toothbrush", label: "Цахилгаан сойз" },
  { key: "toothpaste", label: "Шүдний оо" },
];

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.category === filter);
  }, [filter, products]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Бүтээгдэхүүн ангилах"
        className="inline-flex items-center gap-1 rounded-full bg-white border border-ink/10 p-1 shadow-sm"
      >
        {tabs.map((t) => {
          const isActive = filter === t.key;
          const count =
            t.key === "all"
              ? products.length
              : products.filter((p) => p.category === t.key).length;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setFilter(t.key)}
              className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-5 h-10 text-sm font-bold transition-colors ${
                isActive
                  ? "bg-sky text-white shadow-[var(--shadow-button)]"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {t.label}
              <span
                className={`inline-flex items-center justify-center text-xs h-5 min-w-5 px-1.5 rounded-full ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "bg-cream text-ink-soft"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={filter}
        className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeIn_0.3s_ease-out]"
      >
        {filtered.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 2} />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
