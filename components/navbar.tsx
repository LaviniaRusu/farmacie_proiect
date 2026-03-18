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
