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
    <header className="fixed left-1/2 top-4 z-50 w-[96%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-8">
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-3xl font-black tracking-tight text-white">
            ORACCA
          </h1>
        </Link>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-white/10 py-3 pl-6 pr-12 text-white placeholder:text-slate-400 backdrop-blur-xl outline-none transition focus:border-blue-500"
          /> 
          <Search 
           className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
        </div>
        <div className="flex items-center gap-8">

          <Link
           href="/categories"
           className="text-slate-300 transition-all duration-300 hover:text-white"
          >
            Categories
          </Link>

          <Link
           href="/account"
           className="text-slate-300 transition-all duration-300 hover:text-white"
          >
            <User size={22} />
          </Link>

          <Link
           href="/cart"
           className="relative text-slate-300 transition-all duration-300 hover:text-white"
          >
            <ShoppingCart size={24} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
             {totalItem}
            </span>

          </Link>

        </div>
      </div>                                                                                                            
    </header>
  );
}