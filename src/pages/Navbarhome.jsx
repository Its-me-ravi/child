import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbarhome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-3xl font-extrabold text-yellow-400">YourLogo</span>
          </div>

          <div className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/games"
              className="text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
            >
              Games
            </Link>
            <Link
              to="/videos"
              className="text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
            >
              Videos
            </Link>
            <Link
              to="/parentscorner"
              className="text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
            >
              Parents Corner
            </Link>
            <Link
              to="/contact"
              className="text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
            >
              Contact
            </Link>
            <Link
              to="/whyus"
              className="text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
            >
              Why Us
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-800">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/games"
              className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
            >
              Games
            </Link>
            <Link
              to="/videos"
              className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
            >
              Videos
            </Link>
            <Link
              to="/parentscorner"
              className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
            >
              Parents Corner
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
            >
              Contact
            </Link>
            <Link
              to="/whyus"
              className="block px-4 py-2 hover:bg-gray-700 transition-all duration-300"
            >
              Why Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
