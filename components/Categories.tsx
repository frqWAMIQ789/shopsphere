export default function Categories() {
  const categories = [
    { icon: "📱", name: "Electronics" },
    { icon: "👕", name: "Fashion" },
    { icon: "💻", name: "Computers" },
    { icon: "🏠", name: "Home" },
    { icon: "📚", name: "Books" },
    { icon: "🎮", name: "Gaming" },
    { icon: "💄", name: "Beauty" },
    { icon: "⚽", name: "Sports" },
    { icon: "🧸", name: "Toys" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category.name}
            className="cursor-pointer rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="text-5xl">
              {category.icon}
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}