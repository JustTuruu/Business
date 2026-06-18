import Image from "next/image";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { SkyBackdrop, Sparkle, StarDot } from "./Decor";
import { Badge } from "./Badge";
import { SITE_INFO } from "@/lib/products";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
      <SkyBackdrop intensity="medium" />

      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-white border border-sky/30 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              KidsCareMN — Хүүхдийн амны хөндийн арчилгаа
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.05] tracking-tight text-ink">
              Шүд угаах нь хүүхдэд
              <span className="relative inline-block mx-2">
                <span className="relative z-10 text-sky">тоглоом</span>
                <svg
                  aria-hidden
                  viewBox="0 0 220 16"
                  className="absolute -bottom-2 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 11 C 60 3, 140 3, 218 11"
                    stroke="#5BB8E8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </span>{" "}
              шиг хөгжилтэй
            </h1>

            <p className="text-lg text-ink-soft leading-relaxed max-w-xl">
              Сансрын нисэгч хэлбэрийн U цахилгаан сойз болон тарвасны амттай
              хөвсөн оогоор хүүхдийнхээ шүдийг зөөлөн, аюулгүй, гүн цэвэрлээрэй.{" "}
              <strong className="text-ink">
                60 секундэд бүх шүд цэвэрхэн.
              </strong>
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href={SITE_INFO.orderUrl} target="_blank" size="lg">
                <ShoppingBag className="w-4 h-4" />
                Захиалах
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Бүтээгдэхүүн үзэх
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Badge tone="sky">28,000 чичиргээ / мин</Badge>
              <Badge tone="mint">IPX7</Badge>
              <Badge tone="sun">5 горим</Badge>
              <Badge tone="blush">2–8 нас</Badge>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-[560px] mx-auto">
              <div
                aria-hidden
                className="absolute inset-4 rounded-[42%_58%_46%_54%/52%_44%_56%_48%] bg-gradient-to-br from-sky-soft via-white to-blush-soft blur-[2px]"
              />
              <div
                aria-hidden
                className="absolute inset-10 rounded-[58%_42%_54%_46%/44%_52%_48%_56%] bg-white/80"
              />

              <div className="relative h-full w-full grid place-items-center">
                <Image
                  src="/blue/PNG image copy.png"
                  alt="OralGos цэнхэр сансрын нисэгч U хэлбэрийн цахилгаан сойзны багц"
                  width={560}
                  height={560}
                  className="relative z-10 w-[92%] h-auto object-contain drop-shadow-[0_30px_40px_rgba(35,40,56,0.18)] animate-float-slow"
                  priority
                />
              </div>

              <Sparkle className="absolute top-[6%] right-[10%] w-6 h-6 text-sun animate-twinkle" />
              <StarDot className="absolute bottom-[12%] left-[6%] w-5 h-5 text-blush animate-twinkle" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
