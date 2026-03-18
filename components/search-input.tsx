"use client";

import { Search } from "lucide-react";
import { useSearch } from "@/components/search-context";

const SearchInput = () => {
  const { search, setSearch } = useSearch();

  return (
    <div className="relative w-64">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Caută produse..."
        className="w-full bg-white border rounded-xl pl-4 pr-10 py-2"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  );
};

export default SearchInput;
