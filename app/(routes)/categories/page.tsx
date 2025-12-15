//C:\Users\asus\farmacie\app\(routes)\categories\page.tsx
import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";

const CategoriesNav = async () => {
  const categories = await getCategories();

  return (
    <div>
      <MainNav data={categories} />;
    </div>
  );
};

export default CategoriesNav;
