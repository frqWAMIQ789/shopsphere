"use client";

import ProductCard from "./ProductCard";
import Image from "next/image";
import { Heart } from "lucide-react";

import { useContext } from "react";
import SearchContext from "@/components/context/SearchContext";

export default function FeaturedProducts() {

  const { search } = useContext(SearchContext);
  

  const products = [

  {
    image: "/products/laptop.png",
    name: "Gaming Laptop",
    price: "₹79,999",
    oldPrice: "₹89,999",
    rating: "4.8",
    reviews: "245",
    discount: "11% OFF",
  },
  {
    image: "/products/headphones.png",
    name: "Wireless Headphones",
    price: "₹4,999",
    oldPrice: "₹6,499",
    rating: "4.6",
    reviews: "180",
    discount: "23% OFF",
  },
  {
    image: "/products/smartwatch.png",
    name: "Smart Watch",
    price: "₹7,499",
    oldPrice: "₹9,999",
    rating: "4.7",
    reviews: "325",
    discount: "25% OFF",
  },
  {
    image: "/products/phone.png",
    name: "Smartphone",
    price: "₹39,999",
    oldPrice: "₹44,999",
    rating: "4.9",
    reviews: "534",
    discount: "11% OFF",
  },
];
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