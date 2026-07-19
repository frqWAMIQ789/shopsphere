"use client";

import Link from "next/link";
import { useContext } from "react";
import CartContext from "@/components/context/CartContext";

import GlassCard from "./cards/GlassCard";

import Image from "next/image";
import { Heart } from "lucide-react";

type ProductCardProps = {
  id: string;
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  rating: string;
  discount: string;
};

export default function ProductCard({
  id,
  image,
  name,
  price,
  oldPrice,
  rating,
  discount,
}: ProductCardProps) {
  const { cart, setCart } = useContext(CartContext);

  console.log("Rendering:", name);

  return (
    <div>
      <button className="absolute right-4 top-4 rounded-full bg-white p-2 transition hover:scale-110 hover:text-red-500">
        <Heart size={18} />
      </button>
       
      <div className="
            group
            relative
            overflow-hidden
            rounded-xl
            border
            border-neutral-200
            bg-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-yellow-400
          ">

        <Link href={`/product/${id}`}>
            <div className="relative flex h-80 items-center justify-center overflow-hidden bg-gradient-to-b from-white to-neutral-100">

                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
               />

            </div>
        </Link>

        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">

          <Link href={`/product/${id}`}>
            <button className="rounded-full bg-white px-6 py-3 font-semibold text-gray-900 shadow-xl transition hover:scale-110">
              Quick View
            </button>
          </Link>

        </div>

      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-500"></span>
        <span className="text-sm font-medium text-green-600">
          In Stock
        </span>
      </div>

      <Link href={`/product/${id}`}>
        <h3
         className="
         text-xl
         font-semibold
         tracking-tight
         transition-colors
         hover:text-yellow-500
         "
        >
         {name}
        </h3>
      </Link>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>

          <span className="text-sm font-semibold text-gray-700">
           {rating}
          </span>

          <span className="text-xs text-gray-400">
           (245 Reviews)
          </span>
        </div>

        <div className="mt-3">
          <p className="text-2xl font-bold text-blue-600">
           {price}
          </p>

          <p className="text-gray-400 line-through">
           {oldPrice}
          </p>
        </div>
        <button
          onClick={() => {
            setCart((prev: any[]) => {
              const existingProduct = prev.find(
                (item: any) => item.name === name
              );

              if (existingProduct) {
                return prev.map((item: any) =>
                  item.name === name
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                      }
                    : item
                );
              }

              return [
                ...prev,
                {
                 id,
                 image,
                 name,
                 price,
                 oldPrice,
                 rating,
                 discount,
                 quantity: 1,
                },
              ];
            });
          }}
          className="
           mt-6
           w-full
           rounded-lg
           bg-black
           py-3
           font-semibold
           text-white
           transition-all
           duration-300
           hover:scale-105
           hover:bg-yellow-400
           hover:text-black
           active:scale-95
          "
        >
         🛒 Add to Cart
        </button>
    </div>
  );
}