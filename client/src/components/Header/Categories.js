import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Categories() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const categories = ["Electronics", "Fashion", "Home & Kitchen", "Books", "Toys"];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="flex items-center px-4 py-2 rounded-full hover:bg-gray-300"
            >
                <FaBars className="mr-2" />
                Categories
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <ul className="absolute top-12 left-0 bg-white border border-gray-300 shadow-md rounded-md w-48 md:w-56">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm md:text-base"
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}