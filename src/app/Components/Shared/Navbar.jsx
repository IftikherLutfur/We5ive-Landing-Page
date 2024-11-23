"use client"
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";


const Navbar = () => {
    return (
        <div className="text-black bg-slate-50 py-3 border-2 px-4">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div>
                    <h1 className="text-3xl font-bold">We<span className="text-[#7436F1]">5</span>ive</h1>
                </div>
                {/* NavLink */}
                <div>
                    <ul className="flex gap-5">
                        <li><Link href={'/'}>Home</Link></li>
                        <li>Shop</li>
                        <li>Deals</li>
                        <li>What's new</li>
                    </ul>
                </div>
                {/* Search */}
                {/* className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" */}
                <div>
                    <div className="flex items-center">
                        {/* Icon for search */}
                        <div className="absolute text-xl w-6 h-6 mx-3 text-gray-300 dark:text-gray-500">
                            <CiSearch />
                        </div>
                        {/* Search field */}
                        <div>
                            <input type="text" name="search" className="block py-3 text-black bg-white border rounded-3xl px-11 focus:outline-none" placeholder="Search" />
                        </div>
                        {/* Shopping Cart */}
                        <div className="text-2xl">
                            <LiaShoppingBagSolid />
                        </div>
                        {/* Shopping Cart */}
                        <div className="text-2xl">
                            <CgProfile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;