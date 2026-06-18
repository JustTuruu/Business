import { type LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  tone?: "sky" | "blush" | "mint" | "sun";
}

const tones: Record<NonNullable<FeatureItem["tone"]>, string> = {
  sky: "bg-sky-soft text-sky",
  blush: "bg-blush-soft text-blush",
  mint: "bg-mint-soft text-mint",
  sun: "bg-sun-soft text-ink",
};

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export function FeatureCard({ feature, className = "" }: FeatureCardProps) {
  const Icon = feature.icon;
  const tone = feature.tone ?? "sky";
  return (
    <article
      className={`group relative rounded-3xl bg-white border border-ink/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-sky/20 ${className}`}
    >
      <span
        className={`grid place-items-center w-12 h-12 rounded-2xl ${tones[tone]} mb-5`}
      >
        <Icon className="w-5 h-5" />
      </span>
      <h3 className="font-extrabold text-lg text-ink mb-2 leading-tight">
        {feature.title}
      </h3>
      <p className="text-ink-soft text-[15px] leading-relaxed">{feature.desc}</p>
    </article>
  );
}

interface FeatureGridProps {
  features: FeatureItem[];
  cols?: 2 | 3;
  className?: string;
}

export function FeatureGrid({ features, cols = 3, className = "" }: FeatureGridProps) {
  const grid =
    cols === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid ${grid} gap-5 sm:gap-6 ${className}`}>
      {features.map((f) => (
        <FeatureCard key={f.title} feature={f} />
      ))}
    </div>
  );
}
