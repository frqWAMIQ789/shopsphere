import CategoryCard from "./CategoryCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute top-40 right-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 md:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl">
          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
            🚀 India's Next-Generation Marketplace
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            Shop Smarter.
            <br />
            Live Better.
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Discover millions of products from trusted sellers with lightning-fast
            delivery, secure payments, and unbeatable prices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700">
              Shop Now
            </button>

            <button className="rounded-xl border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-slate-900">
              Explore Categories
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
            <span>⭐ 4.9/5 Customer Rating</span>
            <span>🚚 Fast Delivery</span>
            <span>🔒 Secure Payments</span>
          </div>
        </div>

       <div className="relative flex h-[550px] w-full items-center justify-center overflow-hidden">

  <div className="absolute top-4 left-10 animate-floating">
  <CategoryCard
    emoji="💻"
    name="Laptop"
  />
</div>

  <div className="absolute bottom-10 left-0 animate-floating">
  <CategoryCard
    emoji="👟"
    name="Shoes"
  />
</div>
  <div className="rounded-full bg-blue-500 p-20 shadow-[0_0_120px_rgba(59,130,246,0.6)]">
    <div className="text-8xl">🛒</div>
  </div>

  <div className="absolute top-16 right-0 animate-floating">
  <CategoryCard
    emoji="🎧"
    name="Headphones"
  />
</div>

  <div className="absolute bottom-0 right-10 animate-floating">
  <CategoryCard
    emoji="⌚"
    name="Smart Watch"
  />
</div>  

</div>

      </div>
    </section>
  );
}
