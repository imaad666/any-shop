import Image from "next/image";
import type { Product } from "@/lib/scrapers/types";
import { SourceBadge } from "./SourceBadge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a href={product.productUrl} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-zinc-100">
        {/* Phase B TODO: once real Zara/H&M image URLs are known, either add them to
            next.config.ts remotePatterns or keep `unoptimized` if hosts vary too much. */}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-2 top-2">
          <SourceBadge brand={product.brand} />
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <p className="line-clamp-2 text-sm text-zinc-900">{product.name}</p>
        <p className="text-sm font-medium text-zinc-900">{product.price}</p>
      </div>
    </a>
  );
}
