import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { products, SITE_INFO } from "@/lib/products";

const SITE = SITE_INFO;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 bg-ink text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-sky/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-blush/15 blur-3xl"
      />

      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="white" />
            <p className="text-white/70 leading-relaxed max-w-sm">
              KidsCareMN нь Их Британийн OralGos® брэндийн хүүхдийн амны
              хөндийн арчилгааны бүтээгдэхүүнийг Монгол улсад албан ёсоор
              түгээдэг. Аюулгүй, зөөлөн, баяр баясгалантай шүд угаалт.
            </p>
            <div className="flex items-center gap-3">
              <SocialLink
                href={SITE.facebook}
                label="Facebook"
                icon={<FacebookIcon className="w-4 h-4" />}
              />
              <SocialLink
                href={SITE.instagram}
                label="Instagram"
                icon={<InstagramIcon className="w-4 h-4" />}
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterTitle>Цэс</FooterTitle>
            <ul className="space-y-2.5">
              <FooterLink href="/">Нүүр</FooterLink>
              <FooterLink href="/products">Бүтээгдэхүүн</FooterLink>
              <FooterLink href="/about">Бидний тухай</FooterLink>
              <FooterLink href="/contact">Холбоо барих</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterTitle>Бүтээгдэхүүн</FooterTitle>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <FooterLink key={p.slug} href={`/products/${p.slug}`}>
                  {p.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterTitle>Холбоо барих</FooterTitle>
            <ul className="space-y-3 text-white/75">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-sky" />
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-sky" />
                <span>
                  {SITE.address}
                  <span className="block text-white/60">
                    {SITE.addressDetail}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/60">
          <p>
            © {year} KidsCareMN. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <p className="text-white/50">
            OralGos® нь Их Британид бүртгэгдсэн брэнд. KidsCareMN нь Монгол
            дахь албан ёсны түгээгч.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/75 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-sky text-white transition-colors"
    >
      {icon}
    </a>
  );
}
