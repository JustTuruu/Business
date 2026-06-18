import { Timer, Sparkles, Smile, Droplets, ShieldCheck, Settings2 } from "lucide-react";
import { Section, SectionHeader } from "../Section";
import { FeatureGrid, type FeatureItem } from "../FeatureGrid";

const items: FeatureItem[] = [
  {
    icon: Timer,
    title: "Ухаалаг цаг",
    desc: "60 секундын сануулга шүд угаах зөв дадлыг төлөвшүүлнэ.",
    tone: "sky",
  },
  {
    icon: Sparkles,
    title: "U хэлбэрийн үзүүр",
    desc: "Бүх шүдийг нэг дор тойруулан, жигд гүн цэвэрлэнэ.",
    tone: "sun",
  },
  {
    icon: Smile,
    title: "Зөөлөн PBT хялгас",
    desc: "Буйлыг гэмтээхгүй, хүүхдийн эмзэг шүдэнд ээлтэй.",
    tone: "blush",
  },
  {
    icon: Droplets,
    title: "IPX7 усны хамгаалалт",
    desc: "Бүрэн ус нэвтэрдэггүй тул угааж цэвэрлэхэд хялбар.",
    tone: "sky",
  },
  {
    icon: ShieldCheck,
    title: "Аюулгүй материал",
    desc: "FDA баталгаатай хүнсний зэрэглэлийн силикон.",
    tone: "mint",
  },
  {
    icon: Settings2,
    title: "5 горим ба санах ой",
    desc: "Хүүхэд бүрт тохирсон зөөлөн болон гүн цэвэрлэгээний сонголт.",
    tone: "sun",
  },
];

export function Benefits() {
  return (
    <Section className="bg-cream">
      <SectionHeader
        eyebrow="Онцлогууд"
        title="Яагаад эцэг эхчүүд биднийг сонгодог вэ?"
        description="Бид хүүхэд маань өөрөө дуртайгаар, эцэг эх та санаа амарч хэрэглэх боломжтой л бүтээгдэхүүнийг сонгодог."
      />

      <FeatureGrid features={items} className="mt-14" />
    </Section>
  );
}
