"use client";

import useSWR from "swr";
import type { Product } from "@/lib/scrapers/types";

type SearchResponse =
  | { status: "pending" }
  | { status: "ready"; products: Product[] }
  | { status: "error"; message: string };

const fetcher = (url: string): Promise<SearchResponse> => fetch(url).then((res) => res.json());

export function useSearch(term: string | null) {
  const key = term ? `/api/search?q=${encodeURIComponent(term)}` : null;

  const { data, error } = useSWR<SearchResponse>(key, fetcher, {
    refreshInterval: (latestData) => (latestData?.status === "pending" ? 2000 : 0),
    revalidateOnFocus: false,
  });

  const status = data?.status ?? (term ? "pending" : "idle");

  return {
    status: status as "idle" | "pending" | "ready" | "error",
    products: data?.status === "ready" ? data.products : [],
    errorMessage: data?.status === "error" ? data.message : error ? "Something went wrong." : null,
  };
}
