import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import preview from "../../assets/images/Preview.png";
import Categories from "./Categories";

import Search from "./Search";
import MenuBar from "./Menu";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between sm:px-8 lg:px-14 py-2 bg-white">
      {/* Full Screen Layout */}
      <div className="hidden sm:flex items-center justify-between w-full">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <img src={preview} alt="Logo" className="w-20 h-16 object-cover" />
        </div>

        {/* Categories */}
        <Categories />

        {/* Search */}
        <Search />

        {/* Menu */}
        <MenuBar />
      </div>

      {/* Small Screen Layout */}
      <div className="flex flex-col sm:hidden w-full">
        {/* First Row: Logo and Menu */}
        <div className="flex items-center justify-between">
          <div className="logo flex-shrink-0">
            <img src={preview} alt="Logo" className="w-20 h-16 object-cover" />
          </div>
          <MenuBar />
        </div>

        {/* Second Row: Categories and Search */}
        <div className="flex items-center justify-between mt-4 w-full">
          <Categories />
          <Search />
        </div>
      </div>
    </header>
  );
}
