"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="OceanPrime Logo"
            width={140}
            height={40}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[16px] font-medium">
          <Link href="/" className="text-oceanBlue hover:text-oceanOrange">Home</Link>
          <Link href="/about" className="text-oceanBlue hover:text-oceanOrange">About</Link>
          <Link href="/services" className="text-oceanBlue hover:text-oceanOrange">Services</Link>
          <Link href="/contact" className="text-oceanBlue hover:text-oceanOrange">Contact</Link>
        </div>

        {/* Get Started Button (desktop) */}
        <div className="hidden md:block">
          <Link
            href="/register"
            className="bg-oceanOrange text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Button (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4 flex flex-col space-y-4 text-[16px] font-medium">
          <Link href="/" className="text-oceanBlue hover:text-oceanOrange" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="text-oceanBlue hover:text-oceanOrange" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" className="text-oceanBlue hover:text-oceanOrange" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" className="text-oceanBlue hover:text-oceanOrange" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link
            href="/register"
            className="bg-oceanOrange text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
