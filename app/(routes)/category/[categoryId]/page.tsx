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
        {/* <Billboard data={category.billboard} /> */}
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters
              dosages={dosages}
              pharmaceuticalForm={pharmaceuticalForm}
            />
            <div className="hidden lg:block">
              <Filter valueKey="dosageId" name="Doza" data={dosages} />
            </div>
            <div className="hidden lg:block">
              <Filter
                valueKey="pharmaceuticalFormId"
                name="Forma farmaceutica "
                data={pharmaceuticalForm}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div> */}
              <ProductList title="" items={products} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
