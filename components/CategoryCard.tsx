type ProductCardProps = {

  emoji: string;
  name: string;
};

export default function ProductCard({
  
  emoji,
  name,
}: ProductCardProps) {
  return (
  <div className="group cursor-pointer rounded-3xl border border-white/20 bg-white/90 p-6 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-[0_25px_60px_rgba(59,130,246,0.35)]">

    <div className="text-center text-6xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
      {emoji}
    </div>

    <h3 className="mt-4 text-center text-xl font-bold text-gray-900">
      {name}
    </h3>

  </div>
);
}