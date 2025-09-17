// src/components/Navbar.tsx
"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About Us", "Service", "Contact"];

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex flex-col items-start">
            <img
              src="https://www.empireblue.in/_next/image?url=%2Flogo1.png&w=640&q=75"
              alt="Empire Blue"
              width={200}
              height={45}
              className="h-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-12">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="relative text-gray-700 hover:text-[#4284FF] text-lg font-medium tracking-wide group transition-colors"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4284FF] group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            ))}

            {/* Book Now button */}
            <a
              href="/book-now"
              className="relative flex items-center gap-2 overflow-hidden bg-[#0000aa] text-white px-5 py-[10px] rounded-3xl text-lg font-semibold shadow hover:bg-[#1d4ed8] focus:ring-2 focus:ring-[#4284FF] focus:ring-offset-2 transition-all"
            >
              <span className="z-10">Book Now</span>
              <FaArrowRight className="w-4 h-4 z-10" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <FaTimes className="w-6 h-6 text-gray-700" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="block text-gray-700 hover:text-[#4284FF] px-1 py-2 text-lg tracking-wide transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Book Now button (mobile) */}
            <a
              href="/book-now"
              className="w-full bg-[#0000aa] text-white px-4 py-2 rounded-xl text-center text-lg font-medium hover:bg-[#2563EB] transition-all flex items-center justify-center gap-2"
            >
              Book Now
              <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
