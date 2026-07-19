"use client";
import { useEffect, useState } from "react";


export default function FlashSale() {
 const flashSaleProducts = [
    {
     image: "/products/laptopjpg",
     name: "Gaming Laptop",
     price: "₹79,999",
     discount: "11% OFF",
     sold: 27,
     total: 100,
    },
    {
     image: "/products/headphones.jpg",
     name: "Wireless Headphones",
     price: "₹4,999",
     discount: "23% OFF",
     sold: 48,
     total: 100,
    },
    {
     image: "/products/smartwatch.jpg",
     name: "Smart Watch",
     price: "₹7,499",
     discount: "25% OFF",
     sold: 76,
     total: 100,
    },
    ];


  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 10,
  });
  useEffect(() => {
    const timer = setInterval(() => {
     setTimeLeft((prev) => {
       let { hours, minutes, seconds } = prev;
       if (hours === 0 && minutes === 0 && seconds === 0) {
         clearInterval(timer);
         return prev;
        }

       if (seconds > 0) {
        seconds--;
       } else if (minutes > 0) {
        minutes--;
        seconds = 59;
       } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
       }

       return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (  
    <section className="bg-red-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-red-600">
          🔥 Flash Sale
        </h2>

        <p className="mb-10 text-center text-gray-600">
          Hurry! Limited-time offers on our best-selling products.
        </p>

        <div className="flex justify-center">
          <div className="rounded-2xl bg-red-600 px-10 py-5 text-center text-white shadow-xl">
            <p className="text-lg">Ends In</p>

            <h3 className="mt-2 text-4xl font-bold">
              {String(timeLeft.hours).padStart(2, "0")} :
              {String(timeLeft.minutes).padStart(2, "0")} :
              {String(timeLeft.seconds).padStart(2, "0")}
            </h3>
          </div>
        </div>
         {/* Flash Sale Products */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {flashSaleProducts.map((product) => (
              <div
               key={product.name}
               className="rounded-3xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                  <div className="mb-4 inline-block rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                   {product.discount}
                  </div>

                <div className="flex h-40 items-center justify-center">
                  <div className="flex h-40 items-center justify-center bg-gray-100">
                    <span className="text-lg font-bold">{product.name}</span>
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-bold">
                 {product.name}
                </h3>

                <p className="mt-2 text-2xl font-bold text-blue-600">
                 {product.price}
                </p>
                <p className="mt-3 text-sm font-medium text-gray-600">
                 {product.total - product.sold} items left
                </p>

                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-red-500"
                    style={{
                     width: `${(product.sold / product.total) * 100}%`,
                    }}
                  />
                </div>
                <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition-colors hover:bg-red-700">
                 Buy Now
                </button>
             </div>
            ))}
          </div>

      </div>
    </section>
  );
}