import { products } from "@/lib/products";
import { Section, SectionHeader } from "../Section";
import { ProductCard } from "../ProductCard";
import { Button } from "../Button";
import { ArrowRight } from "lucide-react";

export function ProductShowcase() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Бүтээгдэхүүн"
        title="Бүхэл бүтэн OralGos® цуглуулга"
        description="Хүүхдийн нас, дуртай өнгө, эцэг эхийн сонголтод тохирсон U цахилгаан сойз болон тарвасны амттай хөвсөн оо."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 2} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="/products" variant="outline" size="lg">
          Бүх бүтээгдэхүүн
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Section>
  );
}
