// // import Container from "@/components/ui/container";
// // import Link from "next/link";
// // import MainNav from "./main-nav";
// // import getCategories from "@/actions/get-categories";
// // import NavbarActions from "./ui/navbar-actions";

// // import { MainNavbar } from "./ui/main-navbar";
// // import CategoriesNav from "@/app/(routes)/categories/page";
// // import { Search } from "lucide-react";
// // import SearchInput from "./search-input";

// // export const revalidate = 0;

// // const Navbar = async () => {
// //   const categories = await getCategories();

// //   return (
// //     <div className="border-b border-green-600 bg-white">
// //       <Container>
// //         <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center gap-x-10">
// //           {/* STORE */}
// //           <Link
// //             href="/"
// //             className="flex items-center gap-x-2 font-bold text-xl text-gray-900 tracking-wide hover:text-green-700 transition"
// //           >
// //             La un click distanta
// //           </Link>

// //           {/* PAGINI – rămân imediat după STORE */}
// //           <MainNavbar />
// //           <SearchInput />

// //           {/* ACTIUNI (cart etc) */}
// //           <div className="ml-auto">
// //             <NavbarActions />
// //           </div>
// //         </div>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default Navbar;
// // "use client";
// // import MainNav from "./main-nav";
// // import Container from "@/components/ui/container";
// // import Link from "next/link";
// // import { MainNavbar } from "./ui/main-navbar";

// // import NavbarActions from "./ui/navbar-actions";
// // import SearchInput from "./search-input";

// // const Navbar = () => {
// //   return (
// //     <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
// //       <Container>
// //         <div className="flex h-16 items-center gap-x-8 px-4 sm:px-6 lg:px-8">
// //           {/* LOGO */}
// //           <Link
// //             href="/"
// //             className="flex items-center text-2xl font-bold tracking-wide"
// //           >
// //             <span className="text-blue-600">La un</span>
// //             <span className="text-gray-800 ml-1">click distanță</span>
// //           </Link>

// //           {/* PAGINI (MainNav-ul tău) */}
// //           <div className="hidden md:flex items-center gap-8">
// //             <MainNavbar />
// //           </div>

// //           {/* SEARCH (design modern) */}
// //           <div className="hidden md:flex">
// //             <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
// //               <SearchInput />
// //             </div>
// //           </div>

// //           {/* ACTIONS (COSUL TAU) */}
// //           <div className="ml-auto flex items-center gap-4">
// //             <NavbarActions />
// //           </div>
// //         </div>
// //       </Container>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu } from "lucide-react";

// import Container from "@/components/ui/container";
// import { MainNavbar } from "./ui/main-navbar";
// import NavbarActions from "./ui/navbar-actions";
// import SearchInput from "./search-input";
// import MobileMenu from "./mobil-meniu";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
//         <Container>
//           <div className="flex h-16 items-center gap-x-8 px-4 sm:px-6 lg:px-8">
//             {/* LOGO */}
//             <Link
//               href="/"
//               className="flex items-center text-2xl font-bold tracking-wide"
//             >
//               <span className="text-blue-600">La un</span>
//               <span className="text-gray-800 ml-1">click distanță</span>
//             </Link>

//             {/* DESKTOP NAV */}
//             <div className="hidden md:flex items-center gap-8">
//               <MainNavbar />
//             </div>

//             {/* DESKTOP SEARCH */}
//             <div className="hidden md:flex">
//               <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
//                 <SearchInput />
//               </div>
//             </div>

//             {/* DESKTOP ACTIONS */}
//             <div className="ml-auto hidden md:flex items-center gap-4">
//               <NavbarActions />
//             </div>

//             {/* BURGER BUTTON */}
//             <button
//               onClick={() => setOpen(true)}
//               className="ml-auto md:hidden"
//               aria-label="Open menu"
//             >
//               <Menu className="w-7 h-7 text-gray-800" />
//             </button>
//           </div>
//         </Container>
//       </nav>

//       {/* MOBILE MENU */}
//       <MobileMenu open={open} setOpen={setOpen} />
//     </>
//   );
// };

// export default Navbar;
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu } from "lucide-react";

// import Container from "@/components/ui/container";
// import { MainNavbar } from "./ui/main-navbar";
// import NavbarActions from "./ui/navbar-actions";
// import SearchInput from "./search-input";
// import MobileMenu from "./mobil-meniu";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
//         <Container>
//           <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
//             {/* LOGO */}
//             <Link href="/" className="text-xl font-semibold text-gray-900">
//               La <span className="text-blue-600">un</span> click distanță
//             </Link>

//             {/* DESKTOP NAV */}
//             <nav className="hidden md:flex items-center gap-8">
//               <MainNavbar />
//             </nav>

//             {/* RIGHT SIDE */}
//             <div className="flex items-center gap-4">
//               {/* SEARCH */}
//               <div className="relative hidden lg:block">
//                 <div className="relative">
//                   <SearchInput />
//                 </div>
//               </div>

//               {/* ACTIONS (CART) */}
//               <div className="hidden md:flex">
//                 <NavbarActions />
//               </div>

//               {/* MOBILE MENU BUTTON */}
//               <button
//                 onClick={() => setOpen(true)}
//                 className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 aria-label="Open menu"
//               >
//                 <Menu className="w-6 h-6 text-gray-700" />
//               </button>
//             </div>
//           </div>
//         </Container>
//       </header>

//       {/* MOBILE MENU */}
//       <MobileMenu open={open} setOpen={setOpen} />
//     </>
//   );
// };

// export default Navbar;
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import Container from "@/components/ui/container";
import { MainNavbar } from "./ui/main-navbar";
import NavbarActions from "./ui/navbar-actions";
import SearchInput from "./search-input";
import MobileMenu from "./mobil-meniu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b">
        <Container>
          <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
            {/* LOGO */}
            <Link href="/" className="text-xl font-semibold">
              La <span className="text-blue-600">un</span> click distanță
            </Link>

            {/* DESKTOP NAV */}
            <nav className="ml-10 hidden lg:flex items-center gap-8">
              <MainNavbar />
            </nav>

            {/* DESKTOP SEARCH */}
            <div className="ml-8 hidden lg:block w-72">
              <SearchInput />
            </div>

            {/* DESKTOP ACTIONS */}
            <div className="ml-auto hidden lg:flex items-center gap-4">
              <NavbarActions />
            </div>

            {/* MOBILE / TABLET MENU */}
            <button
              onClick={() => setOpen(true)}
              className="ml-auto lg:hidden p-2 rounded-full hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
