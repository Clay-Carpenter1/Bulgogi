'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className="text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            >
              Menu
            </Link>
            <Link 
              href="/locations" 
              className="text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            >
              Locations
            </Link>
            <Link 
              href="/about" 
              className="text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            >
              Our Story
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block relative">
              <Image
                src="/images/logo-name-no-bowl.png"
                alt="Bulgogi Logo"
                width={180}
                height={180}
                className="transform translate-y-10 hover:scale-105 transition-transform duration-200 drop-shadow-lg"
                priority
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/catering" 
              className="text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            >
              Catering
            </Link>
            <Link
              href="/order"
              className="bg-[#A9190F] text-white px-6 py-2 rounded font-medium uppercase tracking-wide text-sm hover:bg-[#8a1410] transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-[#A9190F]"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link
            href="/"
            className="block py-2 text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="block py-2 text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            href="/locations"
            className="block py-2 text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Locations
          </Link>
          <Link
            href="/about"
            className="block py-2 text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/catering"
            className="block py-2 text-gray-900 hover:text-[#A9190F] font-medium uppercase tracking-wide text-sm transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Catering
          </Link>
          <Link
            href="/order"
            className="inline-block w-full py-2 text-center bg-[#A9190F] text-white rounded font-medium uppercase tracking-wide text-sm hover:bg-[#8a1410] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 