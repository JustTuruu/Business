import { type Spec } from "@/lib/products";

interface SpecTableProps {
  specs: Spec[];
  className?: string;
}

export function SpecTable({ specs, className = "" }: SpecTableProps) {
  return (
    <dl
      className={`rounded-3xl bg-cream border border-ink/5 overflow-hidden ${className}`}
    >
      {specs.map((s, i) => (
        <div
          key={s.label}
          className={`grid grid-cols-[40%_60%] sm:grid-cols-[35%_65%] gap-4 px-5 py-4 ${
            i % 2 === 1 ? "bg-white" : ""
          } border-b border-ink/8 last:border-b-0`}
        >
          <dt className="text-sm font-semibold text-ink-soft">{s.label}</dt>
          <dd className="text-sm font-bold text-ink text-right">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
