export function normalizeQuery(term: string): string {
  return term.trim().toLowerCase().replace(/\s+/g, " ");
}
