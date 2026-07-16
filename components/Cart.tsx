"use client";

import { useContext } from "react";
import CartContext from "./context/CartContext";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const increaseQuantity = (index: number) => {
   const updatedCart = [...cart];

    updatedCart[index].quantity++;

    setCart(updatedCart);
  };
  
  const decreaseQuantity = (index: number) => {
    const updatedCart = [...cart];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
       
      setCart(updatedCart);

    }else{
      setCart(updatedCart.filter((_,i)=>i!== index));
    }

  };

  const subtotal = cart.reduce((total: number, product: any) => {
    const price = Number(
      product.price.replace("₹", "").replace(/,/g, "")
    );

    return total + price * product.quantity;
  }, 0);

  const removeItem = (index:number)=>{
    const updatedCart= cart.filter(
      (_:any, i: number)=> i!==index
    );
    setCart(updatedCart);
  };
  

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((product: any, index: number) => (
            <div
              key={index}
              className="rounded-2xl border p-6 shadow-md"
            >
              <h2 className="text-2xl font-bold">
                {product.name}
              </h2>

              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={()=>decreaseQuantity (index)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-xl font-bold hover:bg-gray-300"
               >
                 -
                </button>

                <span className="text-lg font-bold">
                  {product.quantity}
                </span>

                <button
                  onClick= {()=> increaseQuantity (index)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white hover:bg-blue-700"
                >
                 +
                </button>
              </div>
              <button
                onClick={() => removeItem(index)}
               className="mt-4 rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
              >
                🗑 Remove
              </button> 

              <p className="mt-2">
                Quantity: {product.quantity}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-10 rounded-2xl border p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold">
          Order Summary
        </h2>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>

        <div className="mt-3 flex justify-between">
         <span>Shipping</span>
         <span className="text-green-600 font-semibold">FREE</span>
        </div>

        <div className="mt-3 flex justify-between">
          <span>GST (18%)</span>
          <span>
           ₹{Math.round(subtotal * 0.18).toLocaleString()}
          </span>
        </div>

        <hr className="my-6" />

        <div className="flex justify-between text-2xl font-bold">
         <span>Total</span>
          <span>
           ₹{Math.round(subtotal * 1.18).toLocaleString()}
          </span>
        </div>

        <button className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
         Proceed to Checkout
        </button>
      </div>
    </section>
  );
}