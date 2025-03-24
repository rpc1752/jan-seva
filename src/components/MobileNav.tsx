"use client";

import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="sm:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="flex items-center px-3 py-2 border rounded-lg text-white border-purple-400 hover:text-yellow-300 hover:border-yellow-300 transition-all duration-300 hover:bg-purple-700/50"
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        ) : (
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path d="M10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 011.414-1.414L10 8.586z" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-purple-800/90 backdrop-blur-md mt-2 shadow-lg rounded-xl z-50 p-4 border border-purple-700/50 transition-all duration-300 transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-2">
          <a
            href="#hero"
            className="text-white hover:text-yellow-300 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple-700/50 flex items-center relative group overflow-hidden"
            onClick={closeMenu}
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
            <span className="font-medium">मुख्य पृष्ठ</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#services"
            className="text-white hover:text-yellow-300 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple-700/50 flex items-center relative group overflow-hidden"
            onClick={closeMenu}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
            <span>सेवाएं</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#how-to-apply"
            className="text-white hover:text-yellow-300 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple-700/50 flex items-center relative group overflow-hidden"
            onClick={closeMenu}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
            <span>आवेदन प्रक्रिया</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-300 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-purple-700/50 flex items-center relative group overflow-hidden"
            onClick={closeMenu}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
            <span>संपर्क करें</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
      </div>
    </div>
  );
}
