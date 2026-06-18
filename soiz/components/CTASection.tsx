import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Sparkle, StarDot } from "./Decor";
import { SITE_INFO } from "@/lib/products";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  tone?: "sky" | "blush" | "mint";
  className?: string;
}

const tones = {
  sky: "from-sky via-[#4FAEDF] to-[#3F9BD0]",
  blush: "from-blush via-[#E891AE] to-[#D87B9C]",
  mint: "from-mint via-[#7BC275] to-[#6BB565]",
};

export function CTASection({
  title = "Гялалзсан цагаан Хүүхдийн шүд цэвэрхэн",
  description = "Захиалах бол энд дарна уу холбоо барих дээр дарна уу.",
  primaryLabel = "Холбоо барих",
  primaryHref = "/contact",
  tone = "sky",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`relative py-16 sm:py-20 ${className}`}>
      <Container>
        <div
          className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${tones[tone]} px-7 sm:px-14 py-14 sm:py-20 text-white shadow-[var(--shadow-soft)]`}
        >
          <div
            aria-hidden
            className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-sun/20 blur-2xl"
          />
          <Sparkle className="absolute top-8 left-10 w-5 h-5 text-sun animate-twinkle" />
          <StarDot className="absolute bottom-10 right-12 w-4 h-4 text-white/60 animate-twinkle" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                Захиалга авч байна
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-white/85 text-lg max-w-xl leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Button
                href={primaryHref}
                variant="secondary"
                size="lg"
                className="bg-white text-sky hover:bg-white/95"
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 h-13 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {SITE_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
