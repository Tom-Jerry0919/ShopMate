import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User } from "lucide-react";

function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* 🏪 Brand Name */}
        <Link
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse text-2xl font-bold text-blue-700 dark:text-blue-400"
        >
          <span className="tracking-tight">ShopMate</span>
        </Link>

        {/* 📱 Mobile Menu Button (for small screens) */}
        <button
          data-collapse-toggle="navbar"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          aria-controls="navbar"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* 🌐 Navigation Links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar">
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 font-medium mt-4 md:mt-0 bg-gray-50 md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent rounded-lg p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-3 md:p-0 text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/Wishlist"
                className="flex items-center gap-1 py-2 px-3 md:p-0 text-gray-900 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition"
              >
                <Heart size={18} /> Wishlist
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-1 py-2 px-3 md:p-0 text-gray-900 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                <ShoppingCart size={18} /> Cart
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-1 py-2 px-3 md:p-0 text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <User size={18} /> Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
