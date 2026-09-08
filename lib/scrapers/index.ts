import type { Product } from "./types";
import { getMockProducts } from "./mock";

/**
 * Phase B TODO: replace this mock fan-out with
 *   Promise.all([zaraScraper.search(term), hmScraper.search(term)])
 * once a ScrapingBee key exists and selectors in ./selectors.ts are verified
 * against real rendered HTML (see scripts/inspect-scraper.ts). Keep the
 * "partial results over none" behavior — one brand failing shouldn't drop
 * the other's results.
 */
export async function runSearch(term: string): Promise<Product[]> {
  // Simulated latency so the pending/skeleton UI actually gets exercised.
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return getMockProducts(term);
}
