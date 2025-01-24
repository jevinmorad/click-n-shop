import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5"

export default function Categories() {
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDrawerOpen(false)
                setIsDropDownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const categories = ["Electronics", "Fashion", "Home & Kitchen", "Books", "Toys"];

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }

    return (
        <>
            {/* Categories Button */}
            <button
                onClick={toggleDrawer}
                className="flex items-center px-4 py-2 rounded-full hover:bg-gray-300 sm:hidden"
            >
                <FaBars className="mr-2" />
            </button>

            {/* Side Drawer for Small Screens */}
            {isDrawerOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end sm:items-center">
                    <div className="bg-white w-full sm:w-3/4 h-3/4 sm:h-full rounded-t-lg sm:rounded-none shadow-lg relative">
                        <div className="relative p-4 shadow-md">
                            <button
                                onClick={toggleDrawer}
                                className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
                            >
                                <IoClose size={24} />
                            </button>
                            <h2 className="text-center font-bold text-lg">Browse Categories</h2>
                        </div>

                        <ul className="mt-4 px-4">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-3 text-gray-700 border-b hover:bg-gray-100"
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Dropdown Menu for Larger Screens */}
            <nav className="relative hidden sm:block" ref={dropdownRef}>
                <button
                    onClick={toggleDropDown}
                    className="flex items-center px-4 py-2 rounded-full hover:bg-gray-300"
                >
                    <FaBars className="mr-2" />
                    Categories
                </button>
                {isDropDownOpen && (
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
            </nav>
        </>
    );
}