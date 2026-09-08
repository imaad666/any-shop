export function PendingState() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="aspect-[3/4] w-full animate-pulse rounded-lg bg-zinc-100" />
          <div className="h-3 w-3/4 animate-pulse rounded bg-zinc-100" />
          <div className="h-3 w-1/3 animate-pulse rounded bg-zinc-100" />
        </div>
      ))}
    </div>
  );
}
