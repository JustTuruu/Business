"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";

const navLinks = [
  { href: "/", label: "Нүүр" },
  { href: "/products", label: "Бүтээгдэхүүн" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/contact", label: "Холбоо барих" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-15px_rgba(35,40,56,0.18)] border-b border-ink/5"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-1" aria-label="Гол цэс">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "text-sky"
                    : "text-ink/75 hover:text-ink"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1.5 h-1.5 rounded-full bg-sky" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="md">
            Холбоо барих
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Цэс хаах" : "Цэс нээх"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-11 h-11 rounded-full bg-white border border-ink/10 text-ink hover:bg-sky-soft transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-40 transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink/30 backdrop-blur-sm transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-4 top-4 bg-white rounded-3xl p-5 shadow-[var(--shadow-soft)] transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <nav
            className="flex flex-col gap-1"
            aria-label="Гар утасны гол цэс"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-2xl text-base font-semibold ${
                    isActive
                      ? "bg-sky-soft text-sky"
                      : "text-ink hover:bg-cream"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3">
              <Button href="/contact" className="w-full">
                Холбоо барих
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
