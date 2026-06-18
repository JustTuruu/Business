"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  name: string;
  images: string[];
  themeBg: string;
}

export function ProductGallery({ name, images, themeBg }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`relative aspect-square rounded-[2rem] overflow-hidden ${themeBg} border border-ink/5`}
      >
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${name} — зураг ${active + 1}`}
          fill
          className="object-contain p-8 sm:p-12 animate-[fadeIn_0.4s_ease-out]"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Зураг ${i + 1} харах`}
              aria-current={i === active}
              className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                i === active
                  ? "border-sky shadow-[var(--shadow-card)]"
                  : "border-ink/10 hover:border-ink/30 opacity-80 hover:opacity-100"
              } ${themeBg}`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain p-2"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
