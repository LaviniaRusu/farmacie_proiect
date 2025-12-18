import getCategories from "@/actions/get-categories";
import { redirect } from "next/navigation";

export const revalidate = 0;

const CategoryRootPage = async () => {
  const categories = await getCategories();

  if (!categories || categories.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        Nu există categorii disponibile.
      </div>
    );
  }

  // ✅ REDIRECT LA PRIMA CATEGORIE DIN DB
  redirect(`/category/${categories[0].id}`);
};

export default CategoryRootPage;
