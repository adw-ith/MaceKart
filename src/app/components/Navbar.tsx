"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen((prev) => !prev);
  };

  const handleProductSelect = () => {
    setIsProductsDropdownOpen(false); // Close the dropdown after selecting a product
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between  items-center h-16">
          <Link href="/" className="text-xl font-bold">MaceKart</Link>
          <div className="flex space-x-4">
            {/* Products dropdown */}
            <div className="relative flex">
              <button 
                className="hover:text-amber-100 focus:outline-none" 
                onClick={toggleProductsDropdown}
                onBlur={() => setIsProductsDropdownOpen(false)} // Close on blur
              >
                Products
              </button>
              {isProductsDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg"
                  onMouseLeave={() => setIsProductsDropdownOpen(false)} // Close on mouse leave
                >
                  <Link href="/products/stationary" className="block px-4 py-2 hover:bg-gray-100" onClick={handleProductSelect}>Stationary</Link>
                  <Link href="/products/sanitory" className="block px-4 py-2 hover:bg-gray-100" onClick={handleProductSelect}>Sanitory</Link>
                  <Link href="/products/sweets" className="block px-4 py-2 hover:bg-gray-100" onClick={handleProductSelect}>Sweets</Link>
                  <Link href="/products/cloths" className="block px-4 py-2 hover:bg-gray-100" onClick={handleProductSelect}>Cloths</Link>
                  <Link href="/products/study-materials" className="block px-4 py-2 hover:bg-gray-100" onClick={handleProductSelect}>Study Materials</Link>
                  <Link href="/products/handicrafts" className="block px-4 py-2 hover:bg-gray-100" onClick={handleProductSelect}>Handicrafts</Link>
                </div>
              )}
            </div>
            {/* Other links */}
            <Link href="/login" className=""><button className='border border-slate-100 px-4 py-1 hover:text-amber-950 hover:bg-slate-100 duration-300'>
              Login</button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
