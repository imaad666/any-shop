"use client";

import { useState } from "react";

export function SearchBar({
  onSearch,
  defaultValue = "",
}: {
  onSearch: (term: string) => void;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) onSearch(value.trim());
      }}
      className="w-full max-w-md"
    >
      <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 shadow-sm transition-shadow focus-within:shadow-md">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search for anything — sweater, jeans, jacket…"
          className="flex-1 bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-black px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-zinc-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
