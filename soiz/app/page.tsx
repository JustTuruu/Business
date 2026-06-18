import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Benefits } from "@/components/home/Benefits";
import { ProductSpotlight } from "@/components/home/ProductSpotlight";
import { Certifications } from "@/components/home/Certifications";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductShowcase />
      <Benefits />
      <ProductSpotlight />
      <Certifications />
      <CTASection />
    </>
  );
}
