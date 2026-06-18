import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Product, themeStyles } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const t = themeStyles[product.themeColor];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col rounded-3xl bg-white border border-ink/5 shadow-[var(--shadow-card)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden ${t.bgSoft}`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/40"
        />
        {product.badge && (
          <span
            className={`absolute top-4 left-4 z-10 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${t.badge}`}
          >
            {product.badge}
          </span>
        )}
        <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-soft">
          {product.ageRange}
        </span>
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          className="object-contain p-6 sm:p-8 transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          priority={priority}
        />
      </div>
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <h3 className="font-extrabold text-lg sm:text-xl text-ink leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed line-clamp-3">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className={`text-sm font-bold ${t.text}`}>
            Дэлгэрэнгүй
          </span>
          <span
            className={`grid place-items-center w-9 h-9 rounded-full ${t.bgSoft} ${t.text} group-hover:rotate-12 transition-transform`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
