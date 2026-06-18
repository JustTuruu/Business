export type Category = "toothbrush" | "toothpaste";

export interface Spec {
  label: string;
  value: string;
}

export interface Feature {
  title: string;
  desc: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  themeColor: "sky" | "blush" | "mint" | "sun";
  badge?: string;
  ageRange: string;
  tagline: string;
  shortDescription: string;
  description: string[];
  features: Feature[];
  specs: Spec[];
  packageContents: string[];
  heroImage: string;
  images: string[];
}

const sharedToothbrushFeatures: Feature[] = [
  {
    title: " 60 секундэд шүдийг гүн цэвэрлэнэ",
    desc: "Уникаль U хэлбэрийн үзүүр болон 28,000 чичиргээ минутанд — бүх шүдийг нэг дор гүн цэвэрлэнэ.",
  },
  {
    title: "U хэлбэрийн үзүүр",
    desc: "Бүх шүдийг нэг дор тойруулан, жигд гүн цэвэрлэнэ.",
  },
  {
    title: "Зөөлөн PBT хялгас",
    desc: "Буйлыг гэмтээхгүй, хүүхдийн эмзэг шүдэнд ээлтэй.",
  },
  {
    title: "IPX7 усны хамгаалалт",
    desc: "Бүрэн ус нэвтэрдэггүй тул угааж цэвэрлэхэд хялбар.",
  },
  {
    title: "Аюулгүй материал",
    desc: "FDA баталгаатай хүнсний зэрэглэлийн силикон.",
  },
  {
    title: "5 горим ба санах ой",
    desc: "Зөөлөн болон гүн цэвэрлэгээний горим — хүүхэд бүрт тохирно.",
  },
];

const sharedToothbrushSpecs: Spec[] = [
  { label: "Загвар", value: "U03" },
  { label: "Материал", value: "ABS бүрхүүл, силикон / PBT үзүүр" },
  { label: "Усны хамгаалалт", value: "IPX7" },
  { label: "Батарей", value: "450mAh" },
  { label: "Цэнэглэх хүчдэл", value: "5V – 1A" },
  { label: "Цэнэглэх хугацаа", value: "≈ 2 цаг" },
  { label: "Чадал", value: "3W" },
  { label: "Чичиргээ", value: "28,000 / мин" },
  { label: "Горим", value: "5" },
  { label: "Насны хязгаар", value: "2 – 12 нас" },
];

const sharedToothbrushPackage = [
  "Сойзны бие × 1",
  "U хэлбэртэй толгой × 2 ",
  "PBT зөөлөн хялгасан үстэй толгой × 2",
  "USB цэнэглэгч кабель × 1",
];

const brushDescription = [
  "Сансрын аялалын сэдэвт цуврал маань хүүхдийн төсөөллийг хөгжүүлж, шүд угаахыг хүлээж буй адал явдал болгоно.",
  "U хэлбэрийн үзүүр шүдийг тойрон бүрхэж, минутад 28,000 чичиргээгээр өнгөр, хүнсний үлдэгдлийг зөөлөн зайлуулна.",
  "Санах ойтой 5 горим, IPX7 усны бүрэн хамгаалалт, FDA баталгаатай хүнсний зэрэглэлийн силикон.",
];

export const products: Product[] = [
  {
    id: "p-blue",
    slug: "tsenher-sansr5n-soyz",
    name: "Astronaut - Цэнхэр",
    category: "toothbrush",
    themeColor: "sky",
    badge: "Бестселлер",
    ageRange: "2–8 нас",
    tagline: "Сансрын аялалд урих цэнхэр нисэгч сойз",
    shortDescription:
      "Сансрын нисэгч загвартай U хэлбэрийн цахилгаан сойз — 60 секундэд бүх шүдийг зөөлөн гүн цэвэрлэнэ.",
    description: brushDescription,
    features: sharedToothbrushFeatures,
    specs: sharedToothbrushSpecs,
    packageContents: sharedToothbrushPackage,
    heroImage: "/blue/3 copy.png",
    images: [
      "/blue/3 copy.png",
      "/blue/4 copy.png",
      "/blue/PNG image copy.png",
    ],
  },
  {
    id: "p-white",
    slug: "tsagaan-sansr5n-soyz",
    name: "Astronaut - Цагаан",
    category: "toothbrush",
    themeColor: "sun",
    badge: "Шинэ",
    ageRange: "2–8 нас",
    tagline: "Цэвэрхэн цагаан өнгийн сансрын нисэгч сойз",
    shortDescription:
      "Цагаан өнгийн астронавт загвар — зөөлөн, гүн цэвэрлэгээ.",
    description: brushDescription,
    features: sharedToothbrushFeatures,
    specs: sharedToothbrushSpecs,
    packageContents: sharedToothbrushPackage,
    heroImage: "/white/1 copy.png",
    images: [
      "/white/1 copy.png",
      "/white/2 copy.png",
      "/white/详情_11 copy.jpg",
    ],
  },
  {
    id: "p-pink",
    slug: "yagaan-muur-soyz",
    name: "Мууран сойз - Ягаан",
    category: "toothbrush",
    themeColor: "blush",
    badge: "",
    ageRange: "2–8 нас",
    tagline: "Хайрхан муурны дүртэй ягаан сойз",
    shortDescription:
      "Өхөөрдөм муурны загвартай U хэлбэрийн цахилгаан сойз — ягаан өнгөтэй.",
    description: [
      "Өхөөрдөм муурны дүр хүүхдийг шүдээ угаахад сонирлыг татан хүүхдийн шүдээ угаах явцыг хялбар болгоно.",
      "U хэлбэрийн үзүүр бүх шүдийг тойрон бүрхэж, зөөлөн чичиргээгээр гүн цэвэрлэнэ.",
      "5 горим, IPX7 усны хамгаалалт, аюулгүй хүнсний зэрэглэлийн материал.",
    ],
    features: sharedToothbrushFeatures,
    specs: sharedToothbrushSpecs,
    packageContents: sharedToothbrushPackage,
    heroImage: "/pink/Pink-U-Shaped-Brush-For-Kids-new.webp",
    images: [
      "/pink/Pink-U-Shaped-Brush-For-Kids-new.webp",
      "/pink/3 copy.png",
      "/pink/4 copy.png",
      "/pink/8 copy.jpg",
    ],
  },
  {
    id: "p-toothpaste",
    slug: "huuhdiin-hovson-oo",
    name: "Хүүхдийн хөвсөн оо — Тарвасны амт",
    category: "toothpaste",
    themeColor: "mint",
    badge: "0% элсэн чихэр",
    ageRange: "2+ нас",
    tagline: "Тарвасны зөөлөн амттай, элсэн чихэргүй хөвсөн оо",
    shortDescription:
      "Тарвасны амттай, ксилитол агуулсан, фтортой хөвсөн шүдний оо — 2-оос дээш насны хүүхдэд.",
    description: [
      "Хөнгөн хөвсөн бүтэцтэй тул хүүхэд өөрөө амархан хэрэглэнэ.",
      "Тарвасны зөөлөн амттай, элсэн чихэр огт агуулаагүй, амны эвгүй үнэрийг дарна.",
      "Ксилитол болон фтор агуулсан тул шүдийг цоорхойноос хамгаална.",
    ],
    features: [
      {
        title: "Тарвасны зөөлөн амт",
        desc: "Хүүхдийн дуртай тарвасны зөөлөн амт.",
      },
      {
        title: "Элсэн чихэргүй (0%)",
        desc: "Найрлагандаа элсэн чихэр огт агуулаагүй.",
      },
      {
        title: "Ксилитол агуулсан",
        desc: "Цоорхойноос хамгаалах байгалийн чихэрлэг бодис.",
      },
      {
        title: "Фтортой — цоорхойноос хамгаална",
        desc: "Бага агууламжтай фтор шүдний паалангыг бэхжүүлнэ.",
      },
      {
        title: "Амны үнэрийг дарна",
        desc: "Зөөлөн хөөс амны эвгүй үнэрийг дарж, амт тавтай байлгана.",
      },
      {
        title: "2-оос дээш насанд",
        desc: "Жижиг хүүхдэд тохирсон зөөлөн найрлага.",
      },
    ],
    specs: [
      { label: "Эзлэхүүн", value: "50 мл" },
      { label: "Амт", value: "Тарвас" },
      { label: "Насны хязгаар", value: "2+ нас" },
      { label: "Найрлага", value: "Ксилитол, Фтор" },
      { label: "Элсэн чихэр", value: "0%" },
    ],
    packageContents: ["Хөвсөн шүдний оо 50мл × 1"],
    heroImage: "/toothpaste/Group 6 (1).png",
    images: ["/toothpaste/Group 6 (1).png"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}

export const themeStyles: Record<
  Product["themeColor"],
  {
    bg: string;
    bgSoft: string;
    text: string;
    ring: string;
    badge: string;
    button: string;
    gradient: string;
  }
> = {
  sky: {
    bg: "bg-sky",
    bgSoft: "bg-sky-soft",
    text: "text-sky",
    ring: "ring-sky/40",
    badge: "bg-sky/15 text-sky",
    button: "bg-sky hover:bg-sky/90 text-white",
    gradient: "from-sky-soft via-white to-white",
  },
  blush: {
    bg: "bg-blush",
    bgSoft: "bg-blush-soft",
    text: "text-blush",
    ring: "ring-blush/40",
    badge: "bg-blush/15 text-blush",
    button: "bg-blush hover:bg-blush/90 text-white",
    gradient: "from-blush-soft via-white to-white",
  },
  mint: {
    bg: "bg-mint",
    bgSoft: "bg-mint-soft",
    text: "text-mint",
    ring: "ring-mint/40",
    badge: "bg-mint/15 text-mint",
    button: "bg-mint hover:bg-mint/90 text-white",
    gradient: "from-mint-soft via-white to-white",
  },
  sun: {
    bg: "bg-sun",
    bgSoft: "bg-sun-soft",
    text: "text-ink",
    ring: "ring-sun/40",
    badge: "bg-sun/30 text-ink",
    button: "bg-sun hover:bg-sun/90 text-ink",
    gradient: "from-sun-soft via-white to-white",
  },
};

export const CERTIFICATIONS = [
  "FDA",
  "CE",
  "ISO 9001",
  "BSCI",
  "GMP",
  "ROHS",
  "REACH",
] as const;

export const SITE_INFO = {
  phone: "+976 9562 8060",
  phoneRaw: "+97695628060",
  address: "Парк Од Молл, 4-р давхар, 410 тоот",
  addressDetail: "Bolorhon Kids Store",
  facebook: "https://www.facebook.com/profile.php?id=61587331476182",
  instagram: "https://www.instagram.com/kids_care_mn/",
  messenger: "https://www.facebook.com/profile.php?id=61587331476182",
  orderUrl: "https://bolorhonkids.mn/products/156175/894449",
} as const;
