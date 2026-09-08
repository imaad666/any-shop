import type { Product } from "@/lib/scrapers/types";
import { ProductCard } from "./ProductCard";

export function ResultsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
