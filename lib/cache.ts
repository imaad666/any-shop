import { redis } from "./redis";
import { CACHE_KEY_PREFIX, CACHE_TTL_SECONDS, ERROR_CACHE_TTL_SECONDS } from "./constants";
import type { Product } from "./scrapers/types";

export type CachedSearch =
  | { status: "ready"; term: string; products: Product[]; fetchedAt: number }
  | { status: "error"; term: string; message: string; fetchedAt: number };

function resultKey(term: string) {
  return `${CACHE_KEY_PREFIX}${term}`;
}

export async function getCachedResult(term: string): Promise<CachedSearch | null> {
  return redis.get<CachedSearch>(resultKey(term));
}

export async function setReadyResult(term: string, products: Product[]): Promise<void> {
  const value: CachedSearch = { status: "ready", term, products, fetchedAt: Date.now() };
  await redis.set(resultKey(term), value, { ex: CACHE_TTL_SECONDS });
}

export async function setErrorResult(term: string, message: string): Promise<void> {
  const value: CachedSearch = { status: "error", term, message, fetchedAt: Date.now() };
  await redis.set(resultKey(term), value, { ex: ERROR_CACHE_TTL_SECONDS });
}
