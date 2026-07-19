import FlashSale from "@/components/FlashSale";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FlashSale />
    </>
  );
}