import HeroSection from "../components/home/HeroSection";
import Categories from "../components/home/Categories";

export default function HomePage() {
  return (
    <>
    {/* HeroSection */}
      <div>
        <HeroSection />
      </div>

      {/* Categories Section */}
      <div className="col-span-1 md:col-span-3 mt-6">
        <Categories />
      </div>
    </>
  );
}
