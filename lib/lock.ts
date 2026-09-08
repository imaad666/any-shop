import { redis } from "./redis";
import { LOCK_KEY_PREFIX, LOCK_TTL_SECONDS } from "./constants";

function lockKey(term: string) {
  return `${LOCK_KEY_PREFIX}${term}`;
}

/** Returns true if this call acquired the lock (i.e. is responsible for scraping). */
export async function acquireScrapeLock(term: string): Promise<boolean> {
  const result = await redis.set(lockKey(term), "1", { nx: true, ex: LOCK_TTL_SECONDS });
  return result === "OK";
}

export async function releaseScrapeLock(term: string): Promise<void> {
  await redis.del(lockKey(term));
}
