import { ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/products";

interface CertBadgesProps {
  className?: string;
  tone?: "light" | "dark";
}

export function CertBadges({ className = "", tone = "light" }: CertBadgesProps) {
  const pill =
    tone === "dark"
      ? "bg-white/10 text-white border-white/20"
      : "bg-white text-ink border-ink/10";
  const icon = tone === "dark" ? "text-sky" : "text-sky";
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 ${className}`}
      aria-label="Олон улсын баталгаажуулалт"
    >
      {CERTIFICATIONS.map((c) => (
        <li
          key={c}
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-bold ${pill}`}
        >
          <ShieldCheck className={`w-4 h-4 ${icon}`} />
          {c}
        </li>
      ))}
    </ul>
  );
}
