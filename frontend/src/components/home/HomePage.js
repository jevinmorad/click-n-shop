export default function HomePage() {
    return (
        <>
            <div className="grid grid-cols-3 gap-8 h-[450px] m-24">
                <div className="grid col-span-2 grid-rows-3 gap-8">
                    <div className="row-span-2 border border-gray-900 rounded-xl flex flex-col items-center justify-center gap-4 p-4">
                        <p className="text-4xl font-sans">Ongoing SALE. 50% OFF.</p>
                        <button className="rounded-md bg-slate-600 text-white px-4 py-2">
                            Browse Products
                        </button>
                    </div>

                    <div className="border border-gray-900 rounded-xl flex flex-row items-center justify-between gap-4 p-12">
                        <p className="text-4xl font-sans">Other Offers</p>
                        <button className="rounded-md bg-slate-400 text-white px-4 py-2">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="col-span-1 border border-gray-900 rounded-xl flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-4xl font-sans text-center">
                        Best Selling <br />
                        Products
                    </p>
                    <button className="rounded-md bg-slate-600 text-white px-4 py-2">
                        Explore
                    </button>
                </div>
            </div>
        </>
    );
}
