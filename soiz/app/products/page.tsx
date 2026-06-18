import type { Metadata } from "next";
import { products } from "@/lib/products";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Section";
import { SkyBackdrop } from "@/components/Decor";
import { ProductCatalog } from "@/components/ProductCatalog";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Бүтээгдэхүүн",
  description:
    "OralGos® брэндийн U хэлбэрийн цахилгаан сойз болон тарвасны амттай хөвсөн оо — хүүхэдтэй гэр бүлд аюулгүй, хөгжилтэй цуглуулга.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-14 pb-12 sm:pt-20 sm:pb-16">
        <SkyBackdrop intensity="soft" />
        <Container className="relative">
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
            <Eyebrow>Бүтээгдэхүүн</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.05]">
              Хүүхдэд аюулгүй, хөгжилтэй амны хөндийн арчилгаа
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed max-w-xl">
              U хэлбэрийн цахилгаан сойз, тарвасны амттай хөвсөн оо —
              эцэг эх та санаа амарч, хүүхэд маань дуртайгаар хэрэглэх
              цуглуулга.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <ProductCatalog products={products} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
