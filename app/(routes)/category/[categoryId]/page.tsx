import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import getDosages from "@/actions/get-dosages";
import getPhamaceuticalForm from "@/actions/get-pharmaceutical-form";
import ProductList from "@/components/product-list";
export const revalidate = 0;

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
  searchParams: Promise<{
    dosageId: string;

    pharmaceuticalFormId: string;
  }>;
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const { categoryId } = await params;
  const { dosageId, pharmaceuticalFormId } = await searchParams;

  const products = await getProducts({
    categoryId,
    dosageId: dosageId,
    pharmaceuticalFormId: pharmaceuticalFormId,
  });

  const dosages = await getDosages();

  const pharmaceuticalForm = await getPhamaceuticalForm();

  const category = await getCategory(categoryId);

  console.log("categoryId", category);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* FILTERS */}
            <aside className="lg:col-span-1 bg-white rounded-lg border border-gray-200 p-6 h-fit">
              <MobileFilters
                dosages={dosages}
                pharmaceuticalForm={pharmaceuticalForm}
              />

              <div className="hidden lg:block">
                <Filter valueKey="dosageId" name="Doza" data={dosages} />
                <Filter
                  valueKey="pharmaceuticalFormId"
                  name="Forma farmaceutică"
                  data={pharmaceuticalForm}
                />
              </div>
            </aside>

            {/* PRODUCTS */}
            <section className="lg:col-span-3">
              {products.length === 0 && <NoResults />}
              <ProductList title="" items={products} />
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
