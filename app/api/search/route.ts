import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { normalizeQuery } from "@/lib/query";
import { getCachedResult, setReadyResult, setErrorResult } from "@/lib/cache";
import { acquireScrapeLock, releaseScrapeLock } from "@/lib/lock";
import { runSearch } from "@/lib/scrapers";

export const maxDuration = 60;

export async function GET(request: NextRequest) {
  const term = request.nextUrl.searchParams.get("q");
  if (!term || !term.trim()) {
    return NextResponse.json({ status: "error", message: "Missing search term" }, { status: 400 });
  }

  const normalized = normalizeQuery(term);

  const cached = await getCachedResult(normalized);
  if (cached?.status === "ready") {
    return NextResponse.json({ status: "ready", products: cached.products });
  }

  const gotLock = await acquireScrapeLock(normalized);
  if (gotLock) {
    after(async () => {
      try {
        const products = await runSearch(normalized);
        await setReadyResult(normalized, products);
      } catch (err) {
        await setErrorResult(normalized, err instanceof Error ? err.message : "Scrape failed");
      } finally {
        await releaseScrapeLock(normalized);
      }
    });
  }

  return NextResponse.json({ status: "pending" }, { status: 202 });
}
