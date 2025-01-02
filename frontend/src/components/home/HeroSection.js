import Categories from "./Categories";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4 md:m-16">
      {/* Left Section */}
      <div className="grid grid-rows-2 md:grid-rows-3 col-span-1 md:col-span-2 gap-8">
        {/* Sale Section */}
        <div className="row-span-1 md:row-span-2 border border-gray-900 rounded-xl flex flex-col items-center justify-center gap-4 p-4 md:p-6 min-h-[150px] md:min-h-[200px]">
          <p className="text-2xl md:text-4xl font-sans text-center">
            Ongoing SALE. 50% OFF.
          </p>
          <button className="rounded-md bg-slate-600 text-white px-4 py-2 hover:bg-slate-700 hover:scale-105 transition-all duration-300">
            Browse Products
          </button>
        </div>

        {/* Other Offers Section */}
        <div className="row-span-1 border border-gray-900 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6 min-h-[120px] md:min-h-[150px]">
          <p className="text-xl md:text-3xl font-sans text-center md:text-left">
            Other Offers
          </p>
          <button className="rounded-md bg-slate-600 text-white px-4 py-2 hover:bg-slate-700 hover:scale-105 transition-all duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-1 border border-gray-900 rounded-xl flex flex-col items-center justify-center gap-4 p-4 md:p-6 min-h-[200px] md:min-h-[250px]">
        <p className="text-2xl md:text-4xl font-sans text-center">
          Best Selling <br />
          Products
        </p>
        <button className="rounded-md bg-slate-600 text-white px-4 py-2 hover:bg-slate-700 hover:scale-105 transition-all duration-300">
          Explore
        </button>
      </div>

      
    </div>
  );
}
