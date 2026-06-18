import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kidscare.mn"),
  title: {
    default: "KidsCareMN — Хүүхдийн амны хөндийн арчилгаа",
    template: "%s · KidsCareMN",
  },
  description:
    "OralGos® — Их Британийн өвөрмөц чанартай хүүхдийн U хэлбэрийн сойз болон хөөстэй оо. Тав тухтай, аюулгүй, баяр баясгалантай шүд угаалт.",
  keywords: [
    "KidsCareMN",
    "OralGos",
    "хүүхдийн сойз",
    "U хэлбэрийн сойз",
    "хүүхдийн оо",
    "хөөстэй оо",
    "Монгол",
  ],
  openGraph: {
    title: "KidsCareMN — Хүүхдийн амны хөндийн арчилгаа",
    description:
      "OralGos® брэндийн хүүхдийн U хэлбэрийн сойз болон хөөстэй оо. Албан ёсны Монгол дахь түгээгч.",
    type: "website",
    locale: "mn_MN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream text-ink flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
