import React from 'react'
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
export default function Navbar() {
  return (
    <div>
      <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="text-2xl font-bold">
            Furnish<span className="text-black">.</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li className="border-b-2 border-black pb-1">Home</li>
            <li className="hover:text-gray-600 cursor-pointer">About Us</li>
            <li className="hover:text-gray-600 cursor-pointer">Products</li>
            <li className="hover:text-gray-600 cursor-pointer">Blogs</li>
            <li className="hover:text-gray-600 cursor-pointer">Contact</li>
          </ul>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative cursor-pointer">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>

            <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t">
          <ul className="flex flex-col gap-4 px-4 py-4 font-medium">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contact</li>

            <div className="flex items-center gap-4 mt-2">
              <ShoppingCart size={22} />
              <button className="bg-black text-white px-4 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
    </div>
  )
}
