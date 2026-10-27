"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { insertInquiry } from "../actions/insertInquiry";
import CookieBanner from "app/components/CookieBanner";

export default function ForEnterprisePage() {
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <main className="flex flex-col items-center w-full text-gray-900">

      {/* ✅ HERO */}
      <section className="w-full text-center py-32 md:py-44 px-6 bg-gradient-to-b from-white via-blue-50/40 to-blue-50">
        <h1 className="text-5xl md:text-7xl text-[48px] font-semibold leading-tight text-blue-900 tracking-tight"
          style={{ fontFamily: "Public Sans, sans-serif" }}>
          Discover How To Transform
          <br />
          <span className="text-orange-600">Your Enterprise</span>
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Accelerate performance, sustainability, and decision-making across your maritime operations.
        </p>
      </section>

      {/* divider */}
      <div className="w-full h-24 bg-gradient-to-b from-blue-50 to-blue-100/40"></div>

      {/* ✅ INTRO */}
      <section className="leading-[2.3] w-full bg-gradient-to-b from-blue-100/40 to-white py-28 px-6"
        style={{ fontFamily: "Public Sans, sans-serif" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-semibold text-blue-900 mb-8"
              style={{ fontFamily: "Public, sans-serif", lineHeight: "1.25" }}
            >
              <span className="text-orange-600">High-Performance</span><br />
              <span className="text-orange-600">Zero-Emission</span><br />
              Vessels, Fleets & Ports
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
              Ultra Performance Vessels (UPVs), modular clean-energy systems, and AI-driven Ultra Maritime System (UMS).
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">
              Why Enterprises Choose Ocean
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 bg-blue-900 rounded-full" />AI-powered mapping</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 bg-blue-900 rounded-full" />Vetted clean-tech partners</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 bg-blue-900 rounded-full" />Modular upgrade systems</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 bg-blue-900 rounded-full" />Clear ROI outcomes</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ✅ FORM SECTION */}
      <section className="w-full bg-gradient-to-b from-gray-100 to-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Get Started
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Book your performance opportunity audit now.
          </p>
        </div>

        {/* ✅ WORKING FORM */}
        <form
          action={async (formData) => {
            formData.set("phone", phone); // ✅ attach phone value

            const res = await insertInquiry(formData);

            if (res.success) {
              setSuccessMessage("✅ Thank you! Your details have been submitted.");
            } else {
              setSuccessMessage("❌ Something went wrong. Please try again.");
            }
          }}
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/50 space-y-5"
        >

          {/* First + Last Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-blue-900 block mb-1">First Name</label>
              <input name="first_name" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>

            <div>
              <label className="text-sm font-semibold text-blue-900 block mb-1">Last Name</label>
              <input name="last_name" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-blue-900 block mb-1">Email</label>
            <input type="email" name="email" required className="w-full border rounded-lg px-4 py-2" />
          </div>

          {/* ✅ Phone Input */}
          <div>
            <label className="text-sm font-semibold text-blue-900 block mb-1">Mobile</label>

            <PhoneInput
              defaultCountry="gb"
              value={phone}
              required
              onChange={(value) => setPhone(value)}
              className="w-full"
              inputClassName="!w-full !border !border-gray-300 !rounded-lg !px-4 !py-2"
              countrySelectorStyleProps={{
                buttonClassName: "!px-3 !py-2 !border-gray-300",
                dropdownArrowClassName: "!text-blue-900",
              }}
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-semibold text-blue-900 block mb-1">
              Company Description (include links)
            </label>
            <textarea
              name="company_description"
              rows={4}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-800 transition flex items-center justify-center gap-2"
          >
            Book Your Performance Audit
            <ArrowRight size={18} />
          </button>
        </form>

        {/* ✅ Success Message */}
        {successMessage && (
          <div className="mt-6 text-center">
            <div className="inline-block px-6 py-3 bg-green-100 text-green-700 font-medium rounded-xl shadow-sm border border-green-200">
              {successMessage}
            </div>
          </div>
        )}
      </section>
      <CookieBanner />
    </main>
  );
}
