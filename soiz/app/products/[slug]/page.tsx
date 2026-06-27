import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Gift,
  MessageCircle,
  Package,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
  SITE_INFO,
  themeStyles,
  type Product,
} from "@/lib/products";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProductGallery } from "@/components/ProductGallery";
import { ColorSwitcher } from "@/components/ColorSwitcher";
import { ProductCard } from "@/components/ProductCard";
import { SpecTable } from "@/components/SpecTable";
import { Badge } from "@/components/Badge";
import { CTASection } from "@/components/CTASection";

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Бүтээгдэхүүн олдсонгүй" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} · KidsCareMN`,
      description: product.shortDescription,
      images: [product.heroImage],
      type: "website",
      locale: "mn_MN",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = themeStyles[product.themeColor];
  const related = getRelatedProducts(product.slug, 3);

  const colorOptions: Pick<Product, "slug" | "name" | "themeColor">[] = products
    .filter(
      (p) => p.category === product.category && p.category === "toothbrush",
    )
    .map(({ slug, name, themeColor }) => ({ slug, name, themeColor }));

  return (
    <>
      <Container className="pt-8 sm:pt-10">
        <nav
          aria-label="Хаяг"
          className="flex items-center gap-2 text-sm text-ink-soft mb-6"
        >
          <Link href="/" className="hover:text-ink">
            Нүүр
          </Link>
          <span aria-hidden>/</span>
          <Link href="/products" className="hover:text-ink">
            Бүтээгдэхүүн
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink font-semibold truncate">
            {product.name}
          </span>
        </nav>
      </Container>

      <section className="pb-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ProductGallery
              name={product.name}
              images={product.images}
              themeBg={t.bgSoft}
            />

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                {product.badge && (
                  <Badge tone={product.themeColor}>{product.badge}</Badge>
                )}
                <Badge tone="neutral">{product.ageRange}</Badge>
                <Badge tone="neutral">OralGos® · UK heritage</Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05]">
                {product.name}
              </h1>

              <p className={`text-lg font-semibold ${t.text}`}>
                {product.tagline}
              </p>

              <div className={`h-1 w-16 rounded-full ${t.bg}`} aria-hidden />

              <ul className="grid sm:grid-cols-2 gap-2.5">
                {product.features.slice(0, 4).map((f) => (
                  <li
                    key={f.title}
                    className="flex items-start gap-2.5 text-[15px] text-ink"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 mt-0.5 shrink-0 ${t.text}`}
                    />
                    <span className="font-semibold">{f.title}</span>
                  </li>
                ))}
              </ul>

              {colorOptions.length > 1 && (
                <div className="pt-2">
                  <ColorSwitcher
                    currentSlug={product.slug}
                    options={colorOptions}
                  />
                </div>
              )}

              {product.category === "toothbrush" ? (
                <div className="rounded-3xl bg-cream border border-ink/5 p-5 sm:p-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-ink leading-none">
                      59,000₮
                    </span>
                  </div>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
                    <li className="flex items-start gap-2.5 text-[15px] text-ink">
                      <Truck className="w-5 h-5 mt-0.5 shrink-0 text-sky" />
                      <span className="font-semibold">Хүргэлт үнэгүй</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-[15px] text-ink">
                      <Gift className="w-5 h-5 mt-0.5 shrink-0 text-mint" />
                      <span className="font-semibold">Шүдний оо бэлэгт</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="rounded-3xl bg-cream border border-ink/5 p-5 sm:p-6 flex items-start gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-sky-soft text-sky shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">
                      Үнэ, хүргэлтийн талаар лавлах уу?
                    </p>
                    <p className="text-sm text-ink-soft mt-1">
                      Захиалга, нөөц, хүргэлтийн мэдээллийг манай борлуулагч
                      яаралтай мэдээлнэ.
                    </p>
                  </div>
                </div>
              )}

              {product.comingSoon && (
                <div className="rounded-3xl bg-ink text-white p-5 sm:p-6 flex items-start gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-white/15 text-white shrink-0">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-extrabold">Тун удахгүй ирнэ</p>
                    <p className="text-sm text-white/80 mt-1">
                      Энэ өнгийн нөөц одоогоор дууссан байна. Захиалга авч,
                      ирмэгц анхны ээлжид мэдэгдэх боломжтой.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                {product.comingSoon ? (
                  <Button href="/contact" variant="outline" size="lg">
                    <Clock className="w-4 h-4" />
                    Урьдчилан захиалах
                  </Button>
                ) : (
                  <Button
                    href={SITE_INFO.orderUrl}
                    target="_blank"
                    size="lg"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Захиалах
                  </Button>
                )}
                <Button href="/contact" variant="outline" size="lg">
                  Холбоо барих
                </Button>
              </div>

              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-ink-soft border-t border-ink/10 mt-2">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-mint" />
                  Эх үйлдвэрийн анхны бүтээгдэхүүн
                </li>
                <li className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-sky" />
                  Улс даяар хүргэлттэй
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blush" />
                  Эмчийн зөвлөмжтэй
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-4">
                  Тодорхойлолт
                </h2>
                <div className="space-y-4 text-ink-soft leading-relaxed text-[15px]">
                  {product.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-2">
                  Онцлогууд
                </h2>
                <p className="text-ink-soft mb-6">
                  Яагаад ээж аав, хүүхдүүд хоёулаа дуртай болдог вэ.
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {product.features.map((f) => (
                    <div
                      key={f.title}
                      className="rounded-3xl bg-cream border border-ink/5 p-6"
                    >
                      <span
                        className={`grid place-items-center w-10 h-10 rounded-2xl ${t.bgSoft} ${t.text} mb-4`}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </span>
                      <h3 className="font-extrabold text-ink mb-1.5">
                        {f.title}
                      </h3>
                      <p className="text-sm text-ink-soft leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-extrabold text-ink mb-4">
                  Мэдээлэл
                </h3>
                <SpecTable specs={product.specs} />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-ink mb-4">
                  Багцад юу багтсан бэ?
                </h3>
                <ul className="space-y-3">
                  {product.packageContents.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[15px] text-ink"
                    >
                      <CheckCircle2
                        className={`w-5 h-5 mt-0.5 shrink-0 ${t.text}`}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-16 sm:py-20">
          <Container>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
                  Төстэй бүтээгдэхүүн
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-sky hover:text-sky/80"
              >
                Бүгдийг үзэх
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
