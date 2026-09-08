export function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center gap-2 py-24 text-center">
      <p className="text-sm text-zinc-500">{message}</p>
    </div>
  );
}
