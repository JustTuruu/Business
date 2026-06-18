import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { SkyBackdrop } from "@/components/Decor";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <SkyBackdrop intensity="medium" />
      <Container className="relative">
        <div className="text-center flex flex-col items-center gap-5 max-w-xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-sky/30 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky">
            <Sparkles className="w-3.5 h-3.5" />
            404
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
            Уучлаарай, энэ хуудас олдсонгүй
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed">
            Магадгүй холбоос буруу эсвэл хуудас зөөгдсөн байж болзошгүй.
            Нүүр хуудас руу буцаад үзээрэй.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-sky text-white px-7 h-12 font-semibold hover:bg-[#3FA7DC] transition-colors shadow-[var(--shadow-button)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Нүүр хуудас
          </Link>
        </div>
      </Container>
    </section>
  );
}
