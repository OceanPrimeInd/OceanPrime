"use client";

import { Facebook, Linkedin, Mail, Twitter, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white mt-24 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center">

        {/* ✅ Left Text */}
        <p className="text-sm text-blue-900 font-semibold text-center md:text-left">
          2025 Ocean <a href="https://oceanprime.co" className="hover:underline">oceanprime.co</a> —  
          Ocean Prime Industries Ltd © All rights reserved
        </p>

        {/* ✅ Social Icons */}
        <div className="flex items-center gap-5 mt-6 md:mt-0">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/oceanprime-industries/"
            className="w-11 h-11 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-700 transition text-white"
          >
            <Linkedin size={20} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/people/OCEAN-Ocean-Prime-Industries-Ltd/61574749846412/"
            className="w-11 h-11 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-700 transition text-white"
          >
            <Facebook size={20} />
          </a>
          
           {/* Twitter */}
          <a
            href="https://x.com/Oceanprime_Dave"
            className="w-11 h-11 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-700 transition text-white"
          >
            <Twitter size={20} />
          </a>

          {/* Email */}
          <a
            href="mailto:hello@oceanprime.co"
            className="w-11 h-11 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-700 transition text-white"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* ✅ Bottom Links Row */}
      <div className="border-t border-gray-200 py-4">
        <div className="text-center flex items-center justify-center gap-8 text-sm font-semibold text-blue-900">

          <a href="/privacy-policy" className="hover:text-orange-600 transition">
            Privacy Policy
          </a>

          <a href="/terms-of-use" className="hover:text-orange-600 transition">
            Terms Of Use
          </a>

          <a href="/contact" className="hover:text-orange-600 transition">
           Contact
          </a>

        </div>
      </div>
    </footer>
  );
}
