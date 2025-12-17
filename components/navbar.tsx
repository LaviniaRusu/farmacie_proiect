// import Container from "@/components/ui/container";
// import Link from "next/link";
// import MainNav from "./main-nav";
// import getCategories from "@/actions/get-categories";
// import NavbarActions from "./ui/navbar-actions";

// import { MainNavbar } from "./ui/main-navbar";
// import CategoriesNav from "@/app/(routes)/categories/page";

// export const revalidate = 0;

// const Navbar = async () => {
//   const categories = await getCategories();
//   return (
//     <div className="border-b">
//       <Container>
//         <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
//           <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
//             <p className="font-bold text-xl">STORE</p>
//           </Link>
//           {/* <CategoriesNav /> */}
//           <MainNavbar />
//           {/* <MainNav data={categories} /> */}
//           <NavbarActions />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Navbar;
import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./ui/navbar-actions";

import { MainNavbar } from "./ui/main-navbar";
import CategoriesNav from "@/app/(routes)/categories/page";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b border-green-600 bg-white">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center gap-x-10">
          {/* STORE */}
          <Link
            href="/"
            className="flex items-center gap-x-2 font-bold text-xl text-gray-900 tracking-wide hover:text-green-700 transition"
          >
            La un click distanta
          </Link>

          {/* PAGINI – rămân imediat după STORE */}
          <MainNavbar />

          {/* ACTIUNI (cart etc) */}
          <div className="ml-auto">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
