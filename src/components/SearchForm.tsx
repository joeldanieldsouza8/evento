"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Guard clause
    if (!search.trim()) return;

    router.push(`/events/${search}`);
  }

  return (
    <form onSubmit={handleFormSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        type="text"
        placeholder="Search events in any city..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
}
