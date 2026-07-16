"use client";
import { products } from "@/data/products";
import Image from "next/image";
import { useContext } from "react";
import CartContext from "@/components/context/CartContext";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    if (!product) return;

    const existingProduct = cart.find(
      (item: any) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((item: any) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  if (!product) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl p-10">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Product Image */}
        <div className="flex justify-center rounded-3xl border p-8">
          <Image
            src={product.image}
            alt={product.name}
            width={450}
            height={450}
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-3 text-yellow-500 text-xl">
            ⭐ {product.rating} ({product.reviews} Reviews)
          </p>

          <p className="mt-6 text-4xl font-bold text-blue-600">
            {product.price}
          </p>

          <p className="mt-3 text-gray-500 line-through">
            {product.oldPrice}
          </p>

          <p className="mt-6 text-lg text-gray-700">
            {product.description}
          </p>

          <div className="mt-8 space-y-3">

            <div className="flex items-center gap-2 text-green-600 font-semibold">
              ✅ {product.stock}
            </div>

            <div className="flex items-center gap-2 text-gray-700">
             🚚 Free Delivery within 2–4 Days
            </div>

            <div className="flex items-center gap-2 text-gray-700">
             🔒 100% Secure Payment
            </div>

            <div className="flex items-center gap-2 text-gray-700">
             ↩️ 7-Day Easy Returns
            </div>

          </div>

          <div className="mt-10 flex gap-4">
           <button
             onClick={addToCart}
             className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
             🛒 Add to Cart
            </button>

            <button
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
             ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}