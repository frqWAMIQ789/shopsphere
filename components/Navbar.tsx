"use client";
import { useContext } from "react";
import CartContext from "@/components/context/CartContext";
import SearchContext from "@/components/context/SearchContext";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const { search, setSearch} = useContext(SearchContext);

  const totalItem = cart.reduce(
    
    (total: number, item:any) => total + item.quantity,
    0
  );
  
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-700">
          ShopSphere
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              value = {search}
              onChange = {(e)=>setSearch(e.target.value) }
              className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-12 outline-none focus:border-blue-600"
            />
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/categories"
            className="hover:text-blue-700 transition"
          >
            Categories
          </Link>

          <Link
            href="/account"
            className="hover:text-blue-700"
          >
            <User />
          </Link>

          <Link
            href="/cart"
            className="relative hover:text-blue-700"
          >
            <ShoppingCart />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
              {totalItem}
            </span>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}