"use client"
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

 const Navbar =()=> {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="text-black bg-slate-50 py-3 border-2 px-4">
  <div className="flex items-center justify-between relative">
    {/* Logo */}
    <div className="flex mr-16">
        <img src="https://i.ibb.co.com/5vJd0nX/wf-1-1.png" alt="" />
      <h1 className="text-3xl font-bold">We<span className="text-[#7436F1]">5</span>ive</h1>
    </div>

    {/* Toggle Dropdown on Small Screens */}
    <div className="block md:hidden">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-black focus:outline-none"
      >
        {/* Add your hamburger icon here, like a simple menu icon */}
        <span className="text-2xl">&#9776;</span> {/* Simple hamburger icon */}
      </button>
    </div>

    {/* NavLink */}
    <div className="hidden md:flex gap-5">
      <ul className="flex gap-5">
        <li><Link href={'/'}>Home</Link></li>
        <li>Shop</li>
        <li>Deals</li>
        <li>What's new</li>
      </ul>
    </div>

    {/* Search */}
    <div>
  <div className="flex items-center">
    {/* Icon for search (visible on all screens) */}
    <div className="text-xl w-6 h-6 mx-3 text-gray-300 dark:text-gray-500">
      <CiSearch />
    </div>

    {/* Search field (only visible on large screens) */}
    <div className="hidden lg:block">
      <input
        type="text"
        name="search"
        className="block py-3 text-black bg-white border rounded-3xl px-11 focus:outline-none"
        placeholder="Search"
      />
    </div>
  </div>
</div>

    {/* Shopping Cart & Profile */}
    <div className="flex gap-5">
      <div className="text-2xl">
      <small className="absolute text-sm ml-5 px-1 bg-black text-white rounded-full">0</small><div className="text-4xl"><LiaShoppingBagSolid/></div>
      </div>
      <div className="text-4xl">
        <CgProfile />
      </div>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  {dropdownOpen && (
    <div className="md:hidden absolute left-0 right-0 bg-slate-50 border-2 mt-2 z-10">
      <ul className="flex flex-col items-center py-3">
        <li><Link href={'/'}>Home</Link></li>
        <li>Shop</li>
        <li>Deals</li>
        <li>What's new</li>
      </ul>
    </div>
  )}
</div>

  );
}


export default Navbar;