import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Section";
import { SkyBackdrop } from "@/components/Decor";
import { SITE_INFO } from "@/lib/products";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description:
    "KidsCareMN-тэй холбогдох — утас, дэлгүүрийн хаяг болон сошиал хаягууд. Манай борлуулагч таны хүсэлтэд яаралтай хариу өгнө.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-14 pb-12 sm:pt-20 sm:pb-16">
        <SkyBackdrop intensity="medium" />
        <Container className="relative">
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
            <Eyebrow>Холбоо барих</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.05]">
              Захиалга, асуултаа бидэнд илгээнэ үү
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed">
              Та манай борлуулагчтай шууд утсаар, мессенжерээр эсвэл доорх
              хаягууд дээр биечлэн ирж холбогдоорой.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href={SITE_INFO.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky text-white px-5 h-11 font-semibold hover:bg-[#3FA7DC] transition-colors shadow-[var(--shadow-button)]"
              >
                <MessageCircle className="w-4 h-4" />
                Messenger чат
              </a>
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-ink/15 px-5 h-11 font-semibold text-ink hover:bg-cream transition-colors"
              >
                <Phone className="w-4 h-4" />
                {SITE_INFO.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            <InfoCard
              icon={<Phone className="w-7 h-7" />}
              iconBg="bg-sky-soft text-sky"
              eyebrow="Утас"
              primary={SITE_INFO.phone}
              secondary="Шууд залгаж захиалаарай"
              href={`tel:${SITE_INFO.phoneRaw}`}
            />
            <InfoCard
              icon={<MapPin className="w-7 h-7" />}
              iconBg="bg-blush-soft text-blush"
              eyebrow="Дэлгүүрийн хаяг"
              primary={SITE_INFO.address}
              secondary={SITE_INFO.addressDetail}
            />
          </div>

          <div className="mt-8 sm:mt-10 rounded-3xl bg-ink text-white p-8 sm:p-10 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-sky/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-blush/20 blur-3xl"
            />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/60 mb-2 font-bold">
                  Сошиал хаягууд
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  Сошиалаар дамжуулан холбогдоорой
                </h2>
                <p className="mt-2 text-white/70 text-sm sm:text-base max-w-md">
                  Шинэ бүтээгдэхүүн, хямдрал, зөвлөгөөг манай Facebook болон
                  Instagram хуудаснаас дагаж аваарай.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook хуудас"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#1877F2] hover:bg-[#1463D1] text-white pl-3 pr-5 h-12 font-semibold transition-colors"
                >
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15">
                    <FacebookIcon className="w-4 h-4" />
                  </span>
                  Facebook
                </a>
                <a
                  href={SITE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram хуудас"
                  className="group inline-flex items-center gap-2.5 rounded-full text-white pl-3 pr-5 h-12 font-semibold transition-transform hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(120deg, #FEDA75 0%, #FA7E1E 25%, #D62976 50%, #962FBF 75%, #4F5BD5 100%)",
                  }}
                >
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15">
                    <InstagramIcon className="w-4 h-4" />
                  </span>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  iconBg,
  eyebrow,
  primary,
  secondary,
  href,
}: {
  icon: React.ReactNode;
  iconBg: string;
  eyebrow: string;
  primary: string;
  secondary?: string;
  href?: string;
}) {
  const inner = (
    <div className="h-full flex flex-col gap-5">
      <span
        className={`grid place-items-center w-14 h-14 rounded-2xl ${iconBg}`}
      >
        {icon}
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-ink-soft mb-2">
          {eyebrow}
        </p>
        <p className="text-xl sm:text-2xl font-extrabold text-ink leading-tight group-hover:text-sky transition-colors">
          {primary}
        </p>
        {secondary && (
          <p className="mt-2 text-sm sm:text-base text-ink-soft leading-snug">
            {secondary}
          </p>
        )}
      </div>
    </div>
  );

  const cls =
    "group block h-full rounded-3xl bg-white border border-ink/5 p-7 sm:p-8 shadow-[var(--shadow-card)] hover:border-sky/30 hover:-translate-y-1 transition-all";

  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
