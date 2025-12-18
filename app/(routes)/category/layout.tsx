import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";

export const revalidate = 0;

const CategoryLayout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await getCategories();

  return (
    <>
      <div className="border-b">
        <MainNav data={categories} />
      </div>

      {children}
    </>
  );
};

export default CategoryLayout;
