"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-black text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">MaceKart</Link>
          <div className="flex space-x-4">
            {/* Products dropdown */}
            <div className="relative">
              <button 
                className="hover:text-gray-200 focus:outline-none" 
                onClick={toggleProductsDropdown}
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                Products
              </button>
              {isProductsDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <Link href="/products/stationary" className="block px-4 py-2 hover:bg-gray-100">Stationary</Link>
                  <Link href="/products/sanitory" className="block px-4 py-2 hover:bg-gray-100">Sanitory</Link>
                  <Link href="/products/sweets" className="block px-4 py-2 hover:bg-gray-100">Sweets</Link>
                  <Link href="/products/cloths" className="block px-4 py-2 hover:bg-gray-100">Cloths</Link>
                  <Link href="/products/study-materials" className="block px-4 py-2 hover:bg-gray-100">Study Materials</Link>
                  <Link href="/products/handicrafts" className="block px-4 py-2 hover:bg-gray-100">Handicrafts</Link>
                </div>
              )}
            </div>
            {/* Other links */}
            <Link href="/login" className="hover:text-gray-200">Login</Link>
            <Link href="/signup" className="hover:text-gray-200">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
