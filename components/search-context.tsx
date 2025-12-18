// "use client";

// import { useState } from "react";
// import { Product } from "@/types";
// import ProductList from "@/components/product-list";
// import SearchInput from "@/components/search-input";

// interface FilteredProductsProps {
//   products: Product[];
// }

// const FilteredProducts = ({ products }: FilteredProductsProps) => {
//   const [search, setSearch] = useState("");

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="space-y-6">
//       {/* SEARCH – exact ca în video */}
//       <SearchInput value={search} onChange={setSearch} />

//       {/* LISTA FILTRATĂ */}
//       <ProductList title="Featured Products" items={filteredProducts} />
//     </div>
//   );
// };

// export default FilteredProducts;
"use client";

import { createContext, useContext, useState } from "react";

interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used inside SearchProvider");
  }
  return context;
};
