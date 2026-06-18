import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const text = variant === "white" ? "text-white" : "text-ink";
  const accent = variant === "white" ? "text-white/90" : "text-sky";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-extrabold tracking-tight ${className}`}
      aria-label="KidsCareMN нүүр хуудас"
    >
      <span
        className="relative grid place-items-center w-10 h-10 rounded-2xl overflow-hidden bg-white"
        aria-hidden
      >
        <Image
          src="/logo.png"
          alt=""
          width={40}
          height={40}
          className="w-full h-full object-contain"
          priority
        />
      </span>
      <span className={`text-lg sm:text-xl ${text}`}>
        KidsCare<span className={accent}>MN</span>
      </span>
    </Link>
  );
}
