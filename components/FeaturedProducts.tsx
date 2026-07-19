"use client";

import ProductCard from "./ProductCard";
import Image from "next/image";
import { Heart } from "lucide-react";

import { useContext } from "react";
import SearchContext from "@/components/context/SearchContext";
import { products } from "@/data/products";

export default function FeaturedProducts() {

  const { search } = useContext(SearchContext);
  

  

  return (

    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Featured Products
      </h2>
      

        {products
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product, index) => (
          <ProductCard
            key={product.name}
           {...product}
          />
        ))}
    </section>
  );
}