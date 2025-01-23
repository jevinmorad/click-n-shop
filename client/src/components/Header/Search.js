import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
      setSearch(e.target.value);
  };

  return (
    // <div className="p-1 flex items-center border-2 border-black rounded-full w-full">

    //     {/* Search box */}
    //     <input
    //         type="text"
    //         placeholder="Search for anything"
    //         value={search}
    //         onChange={handleChange}
    //         className="flex-grow px-3 text-gray-600 bg-white rounded-full focus:outline-none placeholder-gray-500"
    //     />

    //     {/* Search Icon */}
    //     <span className="bg-orange-500 rounded-full p-1 text-white cursor-pointer">
    //         <IoIosSearch size={'2em'} />
    //     </span>
    // </div>

    <div className="search flex-grow mx-4">
      <div className="p-1 flex items-center border-2 border-black rounded-full w-full">
        <input
          type="text"
          placeholder="Search for anything"
          value={search}
          onChange={handleChange}
          className="flex-grow px-3 text-gray-600 bg-white rounded-full focus:outline-none placeholder-gray-500"
        />
        <span className="bg-orange-500 rounded-full p-1 text-white cursor-pointer">
          <IoIosSearch size={"2em"} />
        </span>
      </div>
    </div>
  );
}
