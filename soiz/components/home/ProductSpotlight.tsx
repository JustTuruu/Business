import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import { Container } from "../Container";
import { Eyebrow } from "../Section";
import { SITE_INFO } from "@/lib/products";

interface Row {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  href: string;
  bg: string;
  accent: string;
}

const rows: Row[] = [
  {
    eyebrow: "Цахилгаан сойз",
    title: "Сансрын нисэгч U цахилгаан сойз",
    desc: "U хэлбэрийн үзүүртэй сансрын нисэгч загвартай цахилгаан сойз — 28,000 чичиргээгээр 60 секундэд бүх шүдийг гүн цэвэрлэнэ.",
    bullets: [
      "28,000 чичиргээ / минут",
      "5 цэвэрлэгээний горим + санах ой",
      "IPX7 ус нэвтэрдэггүй",
      "Цэнэглэх кабельтэй, 450mAh батарей",
    ],
    image: "/white/1 copy.png",
    href: "/products/tsagaan-sansr5n-soyz",
    bg: "bg-sky-soft",
    accent: "text-sky",
  },
  {
    eyebrow: "Хөвсөн оо",
    title: "Тарвасны амттай хөвсөн оо",
    desc: "Тарвасны зөөлөн амттай, элсэн чихэргүй, ксилитол агуулсан фтортой хөвсөн шүдний оо — 2-оос дээш насны хүүхдэд тохирно.",
    bullets: [
      "0% элсэн чихэр",
      "Ксилитол + фтор — цоорхойноос хамгаална",
      "Хөнгөн хөвсөн бүтэц — хүүхэд өөрөө хэрэглэхэд хялбар",
      "Амны эвгүй үнэрийг дарна",
    ],
    image: "/toothpaste/Group 6 (1).png",
    href: "/products/huuhdiin-hovson-oo",
    bg: "bg-mint-soft",
    accent: "text-mint",
  },
];

export function ProductSpotlight() {
  return (
    <section className="py-16 sm:py-20 bg-cream">
      <Container>
        <div className="space-y-10 lg:space-y-16">
          {rows.map((r, i) => (
            <article
              key={r.title}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl ${r.bg} p-7 sm:p-10 lg:p-14 border border-ink/5`}
            >
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-contain p-4 animate-float-slow"
                    sizes="(min-width: 1024px) 40vw, 80vw"
                  />
                </div>
              </div>

              <div
                className={`lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Eyebrow>{r.eyebrow}</Eyebrow>
                <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
                  {r.title}
                </h3>
                <p className="mt-4 text-ink-soft leading-relaxed text-[15px] sm:text-base">
                  {r.desc}
                </p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[15px] text-ink"
                    >
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${r.accent}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={SITE_INFO.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 h-11 text-[15px] font-bold hover:bg-ink/90 transition-colors shadow-[var(--shadow-button)]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Захиалах
                  </a>
                  <Link
                    href={r.href}
                    className={`inline-flex items-center gap-1.5 font-bold ${r.accent}`}
                  >
                    Дэлгэрэнгүй
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
