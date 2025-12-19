"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { MainNavbar } from "./ui/main-navbar";
import NavbarActions from "./ui/navbar-actions";
import SearchInput from "./search-input";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  if (!open) return null;

  return (
    <>
      {/* OVERLAY */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={() => setOpen(false)}
      />

      {/* PANEL */}
      <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 h-16 border-b">
          <span className="text-xl font-bold">
            <span className="text-blue-600">La un</span> click
          </span>
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-6 space-y-6">
          {/* PAGINI */}
          <MainNavbar mobile />

          <hr />

          {/* SEARCH */}
          <SearchInput />

          <hr />

          {/* CART */}
          <NavbarActions />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
