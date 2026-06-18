import { Container } from "./Container";

export interface Stat {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
  variant?: "white" | "dark" | "tinted";
  className?: string;
}

export function StatStrip({ stats, variant = "tinted", className = "" }: StatStripProps) {
  const surface =
    variant === "dark"
      ? "bg-ink text-white"
      : variant === "white"
        ? "bg-white border border-ink/5"
        : "bg-sky-soft text-ink";

  const divider = variant === "dark" ? "divide-white/10" : "divide-ink/10";
  const labelTone = variant === "dark" ? "text-white/70" : "text-ink-soft";
  const valueTone = variant === "dark" ? "text-white" : "text-ink";

  return (
    <div className={`${className}`}>
      <Container>
        <div
          className={`rounded-3xl ${surface} shadow-[var(--shadow-card)] grid grid-cols-2 md:grid-cols-4 ${divider} divide-y md:divide-y-0 md:divide-x`}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-5 py-6 sm:py-7 text-center flex flex-col items-center gap-1"
            >
              <p className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${valueTone}`}>
                {s.value}
              </p>
              <p className={`text-xs sm:text-sm font-medium ${labelTone}`}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
