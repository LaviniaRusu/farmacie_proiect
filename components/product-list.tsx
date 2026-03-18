"use client";

import { Product } from "@/types";
import { useSearch } from "@/components/search-context";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList = ({ title, items }: ProductListProps) => {
  const { search } = useSearch();

  const filteredItems = items.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>

      {filteredItems.length === 0 && <NoResults />}

      <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
        {filteredItems.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
