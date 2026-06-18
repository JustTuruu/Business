import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Building2,
  FlaskConical,
  Globe2,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow, Section, SectionHeader } from "@/components/Section";
import { SkyBackdrop } from "@/components/Decor";
import { StatStrip } from "@/components/StatStrip";
import { CertBadges } from "@/components/CertBadges";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Бидний тухай",
  description:
    "KidsCareMN — Их Британийн OralGos® брэндийн хүүхдийн амны хөндийн арчилгааны бүтээгдэхүүнийг Монголд хүргэж буй чанарын баталгаатай түгээгч.",
};

const reasons = [
  {
    icon: Award,
    title: "30+ жилийн туршлага",
    desc: "Амны хөндийн арчилгааны салбарт хуримтлагдсан туршлага.",
  },
  {
    icon: Globe2,
    title: "Олон улсын брэндүүдтэй хамтын ажиллагаа",
    desc: "АНУ, Их Британи, Япон, Солонгос зэрэг улсын нэр хүндтэй брэндүүдтэй ажилладаг.",
  },
  {
    icon: FlaskConical,
    title: "Судалгаа, бүтээн хөгжүүлэлт",
    desc: "Хүчирхэг R&D чадавхи дээр тулгуурлан шинэлэг бүтээгдэхүүн боловсруулдаг.",
  },
  {
    icon: ShieldCheck,
    title: "Олон улсын баталгаа",
    desc: "ISO 9001, GMP, BSCI гэрчилгээ, FDA бүртгэл, CE / ROHS / REACH стандартад нийцсэн.",
  },
  {
    icon: Building2,
    title: "Чанарын хатуу хяналт",
    desc: "Үйлдвэрлэлийн бүх үе шатанд найдвартай, аюулгүй бүтээгдэхүүн.",
  },
];

const stats = [
  { value: "30+", label: "жилийн туршлага" },
  { value: "5+", label: "улсын брэндтэй" },
  { value: "2 - 8", label: "насны хүүхдэд" },
  { value: "IPX7", label: "ус нэвтэрдэггүй" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-14 pb-12 sm:pt-20 sm:pb-16">
        <SkyBackdrop intensity="medium" />
        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <Eyebrow>Бидний тухай</Eyebrow>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.05]">
                Хүүхдийн инээмсэглэлд зориулсан бүтээгдэхүүн
              </h1>
              <p className="text-lg text-ink-soft leading-relaxed max-w-xl">
                KidsCareMN нь Их Британийн уламжлалт{" "}
                <strong className="text-ink">OralGos®</strong> брэндийн
                чанартай, баталгаатай хүүхдийн амны хөндийн арчилгааны
                бүтээгдэхүүнийг санал болгож байна. Бид хүүхэд бүр шүдээ
                угаахдаа дуртай байж, эрүүл инээмсэглэлтэй цагаан шүдтэй
                байлгахыг зорьж байна.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-square max-w-md mx-auto">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-[44%_56%_50%_50%/52%_48%_52%_48%] bg-gradient-to-br from-sky-soft via-white to-sun-soft"
                />
                <Image
                  src="/blue/PNG image copy.png"
                  alt="OralGos цэнхэр сансрын нисэгч U цахилгаан сойзны багц"
                  fill
                  className="relative object-contain p-6 animate-float-slow"
                  sizes="(min-width: 1024px) 40vw, 80vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-gradient-to-br from-sky-soft via-white to-blush-soft p-8 sm:p-10 border border-ink/5">
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white text-sky mb-5">
                <Target className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
                Бидний зорилго
              </h2>
              <p className="mt-4 text-ink-soft text-[15px] leading-relaxed">
                Хүүхдийн шүд угаах хэвшлийг хөгжилтэй, хялбар, аюулгүй болгох.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Яагаад биднийг сонгох вэ?</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
              Бидний онцлог 5 шалтгаан
            </h2>
            <ol className="mt-8 space-y-4">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <li
                    key={r.title}
                    className="flex gap-5 rounded-3xl bg-cream p-5 sm:p-6 border border-ink/5"
                  >
                    <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-white text-sky border border-ink/5 font-extrabold">
                      <span className="text-sm font-extrabold text-ink-soft">
                        0{i + 1}
                      </span>
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-sky" />
                        <h3 className="font-extrabold text-ink">{r.title}</h3>
                      </div>
                      <p className="text-sm text-ink-soft leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Section>

      <section className="py-12 sm:py-16">
        <StatStrip stats={stats} variant="dark" />
      </section>

      <Section className="bg-cream">
        <SectionHeader
          eyebrow="Баталгаажуулалт"
          title="Олон улсын чанарын стандартад нийцсэн"
          description="Бид зөвхөн олон улсын баталгаатай чанарын стандартыг хангасан бүтээгдэхүүнтэй ажилладаг."
        />
        <div className="mt-10">
          <CertBadges />
        </div>
        <p className="mt-8 text-center text-sm text-ink-soft">
          Олон улсын чанар, аюулгүй байдлын стандартад нийцсэн.
        </p>
      </Section>

      <CTASection />
    </>
  );
}
