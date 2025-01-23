import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import preview from "../../assets/images/Preview.png";
import Categories from "./Categories";
import Search from "./Search";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Books",
    "Toys",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      {/* Full Screen Layout */}
      <div className="hidden sm:flex items-center justify-between w-full">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <img src={preview} alt="Logo" className="w-20 h-16 object-cover" />
        </div>
        <div>
          <Categories />
        </div>
        {/* <nav className="relative">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-4 py-2 rounded-full hover:bg-gray-300"
                    >
                        <FaBars className="mr-2" />
                        Categories
                    </button>
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
                </nav> */}

        {/* Search */}
        <div>
            <Search/>
        </div>
        {/* <div className="search flex-grow mx-4">
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
        </div> */}

        {/* Menu */}
        <div className="menu flex-shrink-0">
          <ul className="flex text-center text-sm font-normal">
            <li className="border-r-2 border-black px-2">
              <Link
                to="/"
                className="px-4 py-2 align-middle hover:bg-gray-300 rounded-full"
              >
                Home
              </Link>
            </li>
            <li className="border-r-2 border-black px-2">
              <Link
                to="/"
                className="px-4 py-2 align-middle hover:bg-gray-300 rounded-full"
              >
                Profile
              </Link>
            </li>
            <li className="pl-6">
              <button className="bg-gray-700 text-white font-bold py-1 px-2 rounded inline-flex items-center">
                Your Cart
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="flex flex-col sm:hidden w-full">
        {/* First Row: Logo and Menu */}
        <div className="flex items-center justify-between">
          <div className="logo flex-shrink-0">
            <img src={preview} alt="Logo" className="w-20 h-16 object-cover" />
          </div>
          <div className="menu flex-shrink-0">
            <ul className="flex text-center text-sm font-normal">
              <li className="border-r-2 border-black px-2">
                <Link
                  to="/"
                  className="px-4 py-2 align-middle hover:bg-gray-300 rounded-full"
                >
                  Home
                </Link>
              </li>
              <li className="border-r-2 border-black px-2">
                <Link
                  to="/"
                  className="px-4 py-2 align-middle hover:bg-gray-300 rounded-full"
                >
                  Profile
                </Link>
              </li>
              <li className="pl-6">
                <button className="bg-gray-700 text-white font-bold py-1 px-2 rounded inline-flex items-center">
                  Your Cart
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row: Categories and Search */}
        <div className="flex items-center justify-between mt-4">
          <nav className="relative">
            <button
              onClick={toggleMenu}
              className="flex items-center px-4 py-2 rounded-full hover:bg-gray-300"
            >
              <FaBars className="mr-2" />
              {/* Categories */}
            </button>
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
          </nav>

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
        </div>
      </div>
    </header>
  );
}
