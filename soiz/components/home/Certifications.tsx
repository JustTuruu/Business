import { Section, SectionHeader } from "../Section";
import { CertBadges } from "../CertBadges";

export function Certifications() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Баталгаажуулалт"
        title="Олон улсын чанарын стандартад нийцсэн"
        description="Манай бүх бүтээгдэхүүн нь дэлхийн нэр хүндтэй чанарын стандартуудаар баталгаажсан."
      />
      <div className="mt-10">
        <CertBadges />
      </div>
      <p className="mt-8 text-center text-sm text-ink-soft">
        Олон улсын чанар, аюулгүй байдлын стандартад нийцсэн.
      </p>
    </Section>
  );
}
