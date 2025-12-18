"use client";

import { useState } from "react";
import { Product } from "@/types";
import ProductList from "@/components/product-list";
import SearchInput from "@/components/search-input";

interface FilteredProductsProps {
  products: Product[];
}

const FilteredProducts = ({ products }: FilteredProductsProps) => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* SEARCH – exact ca în video */}
      <SearchInput value={search} onChange={setSearch} />

      {/* LISTA FILTRATĂ */}
      <ProductList title="Featured Products" items={filteredProducts} />
    </div>
  );
};

export default FilteredProducts;
