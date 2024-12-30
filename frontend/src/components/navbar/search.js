import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function Search() {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className="pr-3 flex w-full items-center justify-center bg-white rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-2 border-black-900">
            <input
                type="text"
                placeholder="search..."
                value={search}
                onChange={handleChange}
                className="p-3 text-gray-600 bg-white rounded-full focus:outline-none placeholder-gray-400" />
            <span>
                <IoIosSearch />
            </span>

        </div>
    )
}