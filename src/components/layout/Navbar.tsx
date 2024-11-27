"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">ONG News</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">Home</Link>
            <Link href="/news" className="text-gray-700 hover:text-primary transition">News</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition">Contact</Link>
            <Link href="/donate" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition">
              Donate
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary transition">Home</Link>
              <Link href="/news" className="block px-3 py-2 text-gray-700 hover:text-primary transition">News</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary transition">About</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition">Contact</Link>
              <Link href="/donate" className="block px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}