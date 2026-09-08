"use client";

import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ResultsGrid } from "@/components/ResultsGrid";
import { PendingState } from "@/components/PendingState";
import { EmptyState } from "@/components/EmptyState";
import { useSearch } from "@/hooks/useSearch";

export default function Home() {
  const [term, setTerm] = useState<string | null>(null);
  const { status, products, errorMessage } = useSearch(term);

  return (
    <div className="flex flex-1 flex-col items-center bg-white px-6 py-20">
      <div className="flex w-full max-w-6xl flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">any-shop</h1>
          <p className="text-sm text-zinc-500">One search. Zara and H&amp;M, side by side.</p>
        </div>

        <SearchBar onSearch={setTerm} />

        <div className="w-full">
          {term === null && (
            <EmptyState message="Try searching for a sweater, jacket, or pair of jeans." />
          )}
          {term !== null && status === "pending" && <PendingState />}
          {term !== null && status === "ready" && products.length === 0 && (
            <EmptyState message={`No results for "${term}" yet.`} />
          )}
          {term !== null && status === "ready" && products.length > 0 && (
            <ResultsGrid products={products} />
          )}
          {term !== null && status === "error" && (
            <EmptyState message={errorMessage ?? "Something went wrong. Try again."} />
          )}
        </div>
      </div>
    </div>
  );
}
