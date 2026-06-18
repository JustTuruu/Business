import { StatStrip } from "../StatStrip";

const stats = [
  { value: "28,000", label: "чичиргээ / мин" },
  { value: "IPX7", label: "ус нэвтэрдэггүй" },
  { value: "5", label: "цэвэрлэгээний горим" },
  { value: "2-8", label: "нас тохиромжтой" },
];

export function TrustBar() {
  return (
    <section className="-mt-4 sm:-mt-8 lg:-mt-10 relative z-10 pb-6 sm:pb-10">
      <StatStrip stats={stats} variant="white" />
    </section>
  );
}
