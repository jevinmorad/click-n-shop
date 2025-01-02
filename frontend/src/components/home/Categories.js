export default function Categories() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {/* Category Boxes */}
                <div className="border rounded-md flex items-center justify-center p-6 border-slate-700 hover:bg-slate-300 hover:scale-105 transition-all duration-300 h-[200px]">
                    Category 1
                </div>
                <div className="border rounded-md flex items-center justify-center p-6 border-slate-700 hover:bg-slate-300 hover:scale-105 transition-all duration-300 h-[200px]">
                    Category 2
                </div>
                <div className="border rounded-md flex items-center justify-center p-6 border-slate-700 hover:bg-slate-300 hover:scale-105 transition-all duration-300 h-[200px]">
                    Category 3
                </div>
                <div className="border rounded-md flex items-center justify-center p-6 border-slate-700 hover:bg-slate-300 hover:scale-105 transition-all duration-300 h-[200px]">
                    Category 4
                </div>
                <div className="border rounded-md flex items-center justify-center p-6 border-slate-700 hover:bg-slate-300 hover:scale-105 transition-all duration-300 h-[200px]">
                    Category 5
                </div>
                <div className="border rounded-md flex items-center justify-center p-6 border-slate-700 hover:bg-slate-300 hover:scale-105 transition-all duration-300 h-[200px]">
                    Category 6
                </div>
            </div>
        </>
    );
}
