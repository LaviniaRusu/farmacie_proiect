"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  return (
    <nav
      className="
        w-full
        flex
        justify-center
        overflow-x-auto
        scrollbar-hide
      "
    >
      <div
        className="
          flex
          gap-3
          px-4
          py-2
          flex-wrap
          justify-center
          sm:flex-nowrap
        "
      >
        {data.map((category) => {
          const active = pathname === `/category/${category.id}`;

          return (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className={cn(
                // pill base
                "whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all",
                "bg-gray-100 text-gray-700 border border-transparent",
                "hover:bg-blue-50 hover:text-blue-600",

                // active
                active &&
                  "bg-blue-100 text-blue-600 border border-blue-300 shadow-sm",
              )}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MainNav;
