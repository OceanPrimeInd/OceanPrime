"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [desktopProjectsOpen, setDesktopProjectsOpen] = useState(false);
  const [desktopFerryOpen, setDesktopFerryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFerryOpen, setMobileFerryOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDesktopProjectsOpen(false);
        setDesktopFerryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
    setMobileFerryOpen(false);
  }

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <img src="/Ocean-Blue.png" alt="OceanPrime Logo" className="h-10 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-blue-900">
          <Link className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600" href="/for-enterprise">For Enterprise</Link>
          <Link className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600" href="/for-consultant">For Consultants</Link>
          <Link className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600" href="/for-vendors">For Vendors</Link>
          <Link className="hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600" href="/for-investors">For Investors</Link>

          {/* PROJECTS DROPDOWN */}
          <div className="relative" ref={menuRef}>
            <button
              className={`flex items-center gap-1 border-b-2 ${
                desktopProjectsOpen ? "border-orange-600 text-orange-600" : "border-transparent"
              } hover:text-orange-600 hover:border-orange-600`}
              onClick={() => {
                setDesktopProjectsOpen(!desktopProjectsOpen);
                setDesktopFerryOpen(false);
              }}
            >
              Projects
              <ChevronDown size={16} />
            </button>

            {desktopProjectsOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                <div className="relative">
                  <button
                    className={`flex w-full items-center justify-between px-4 py-2 text-left border-b-2 ${
                      desktopFerryOpen ? "border-orange-600 text-orange-600" : "border-transparent"
                    } hover:bg-gray-50`}
                    onClick={() => setDesktopFerryOpen(!desktopFerryOpen)}
                  >
                    Ferry Project
                    <ChevronDown size={14} />
                  </button>

                  {desktopFerryOpen && (
                    <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                      <Link href="/projects/ferry/report" className="block px-4 py-2 hover:bg-gray-50 border-b-2 border-transparent hover:border-orange-600">Report</Link>
                      <Link href="/projects/ferry/introduction" className="block px-4 py-2 hover:bg-gray-50 border-b-2 border-transparent hover:border-orange-600">Introduction & Vote</Link>
                      <Link href="/projects/ferry/donate" className="block px-4 py-2 hover:bg-gray-50 border-b-2 border-transparent hover:border-orange-600">Donate</Link>
                      <Link href="/projects/ferry/faqs" className="block px-4 py-2 hover:bg-gray-50 border-b-2 border-transparent hover:border-orange-600">FAQs</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* GET STARTED BUTTON (desktop) */}
        <a className="hidden md:inline-block bg-blue-900 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-800" href="/contact">
          Get Started
        </a>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden text-3xl text-blue-900 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 flex flex-col text-[16px] font-semibold text-blue-900">
          <Link href="/for-enterprise" className="py-3 border-b border-gray-100 hover:text-orange-600" onClick={closeMobile}>For Enterprise</Link>
          <Link href="/for-consultant" className="py-3 border-b border-gray-100 hover:text-orange-600" onClick={closeMobile}>For Consultants</Link>
          <Link href="/for-vendors" className="py-3 border-b border-gray-100 hover:text-orange-600" onClick={closeMobile}>For Vendors</Link>
          <Link href="/for-investors" className="py-3 border-b border-gray-100 hover:text-orange-600" onClick={closeMobile}>For Investors</Link>

          {/* Projects accordion */}
          <button
            className="py-3 border-b border-gray-100 flex items-center justify-between hover:text-orange-600"
            onClick={() => setMobileFerryOpen(!mobileFerryOpen)}
          >
            Projects <ChevronDown size={16} className={`transition-transform ${mobileFerryOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileFerryOpen && (
            <div className="pl-4 flex flex-col text-[15px] font-normal">
              <Link href="/projects/ferry/report" className="py-2 border-b border-gray-50 hover:text-orange-600" onClick={closeMobile}>Report</Link>
              <Link href="/projects/ferry/introduction" className="py-2 border-b border-gray-50 hover:text-orange-600" onClick={closeMobile}>Introduction & Vote</Link>
              <Link href="/projects/ferry/donate" className="py-2 border-b border-gray-50 hover:text-orange-600" onClick={closeMobile}>Donate</Link>
              <Link href="/projects/ferry/faqs" className="py-2 hover:text-orange-600" onClick={closeMobile}>FAQs</Link>
            </div>
          )}

          <a href="/contact" className="mt-4 text-center bg-blue-900 text-white px-5 py-3 rounded-md hover:bg-blue-800" onClick={closeMobile}>
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
