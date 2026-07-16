"use client";
import Link from "next/link";
import { useContext } from "react";
import CartContext from "@/components/context/CartContext";

import Image from "next/image";
import { Heart } from "lucide-react";

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  rating: string;
  discount: string;
};

export default function ProductCard({
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
    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(59,130,246,0.25)]">
      <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md transition hover:scale-110 hover:text-red-500">
        <Heart size={18} />
      </button>
       
      <Link href={`/product/$name.toLowerCase().replace(/\s/+g, "-")}`}> 
        <Image
          src={image}
          alt={name}
          width={180}
          height={180}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </Link>  
      <div className="mb-4 inline-block rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
        {discount}
      </div>

      <Link href={`/product/${name.toLowerCase().replace(/\s+/g, "-")}`}>
        <h3 className="cursor-pointer text-lg font-semibold hover:text-blue-600 transition-colors">
         {name}
        </h3>
      </Link>
        <p className="mt-2 text-yellow-500">
         ⭐ {rating}
        </p>

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
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white"
        >
         🛒 Add to Cart
        </button>
    </div>
  );
}