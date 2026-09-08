import type { Brand } from "@/lib/scrapers/types";

const BRAND_LABEL: Record<Brand, string> = { ZARA: "Zara", HM: "H&M" };
const BRAND_CLASS: Record<Brand, string> = {
  ZARA: "bg-black text-white",
  HM: "bg-rose-600 text-white",
};

export function SourceBadge({ brand }: { brand: Brand }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${BRAND_CLASS[brand]}`}
    >
      {BRAND_LABEL[brand]}
    </span>
  );
}
