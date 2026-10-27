"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { insertInquiry } from "../actions/insertInquiry";
import CookieBanner from "app/components/CookieBanner";

export default function ForVendorsPage() {
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <main className="flex flex-col items-center bg-white text-gray-900">

      {/* ✅ HERO — SUPERINTELLIGENCE THEME */}
      <section className="w-full text-center py-32 md:py-44 px-6 bg-gradient-to-b from-white via-blue-50/40 to-blue-50">
        <h1 className="leading-tight text-5xl md:text-7xl font-extrabold text-blue-900 tracking-tight">
          The Space For Connecting to<br />
          <span className="text-orange-600"> Premium Buyers</span> <br />
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Ocean connects best‑in‑class maritime technology, equipment,
          and fuel equipment and suppliers with enterprise customers
          that are actively sourcing solutions for the next generation of
          clean, data‑driven port and seaborne operations.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#intro"
            className="px-8 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
          >
            Explore Marketplace Access
          </a>
        </div>
      </section>

      {/* ✅ SUPERINTELLIGENCE DIVIDER */}
      <div className="w-full h-24 bg-gradient-to-b from-blue-50 to-blue-100/40"></div>

      {/* ✅ INTRO SECTION — GLASS CARDS */}
      <section id="intro" className="max-w-6xl mx-auto px-6 py-20 space-y-16 text-center">

        <h2 className="leading-[1.40] text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
          Get Matched With Businesses Looking For High Performance <span className="text-orange-600">Cleantech Innovation</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 text-left">

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Enterprise Access</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Connect directly with enterprise buyers who are actively sourcing
              maritime clean-tech and operational performance solutions.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Pre-Qualified Leads</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Receive vetted opportunities with clear timelines, budgets,
              and technical scopes — no guesswork, no time wasted.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Simplified Communication</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Enjoy a streamlined, modern sales workflow with efficient channels that 
              shorten buyer cycles and increase win-rates.
            </p>
          </div>

        </div>

        <div>
          <a
            href="#who-should-apply"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-blue-900 text-blue-900 font-medium hover:bg-blue-900 hover:text-white transition"
          >
            Learn More About Applying
          </a>
        </div>
      </section>

      {/* ✅ WHO SHOULD APPLY — SUPERINTELLIGENCE GRADIENT */}
      <section id="who-should-apply" className="w-full bg-gradient-to-b from-blue-100/40 to-blue-50 py-28 px-6">
          <div className="max-w-6xl mx-auto space-y-16">

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center tracking-tight leading-tight">
              Who Should Apply?
            </h2>

            {/* Intro Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
              We welcome vendors offering any product, service, or solution that improves 
              sustainability, efficiency, or performance across the maritime industry—whether 
              at sea, in ports, or supporting the people and infrastructure behind them.
            </p>

            {/* 4 CATEGORY BLOCKS — Two Columns */}
            <div className="grid md:grid-cols-2 gap-10">

              {/* ✅ VESSELS */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60 space-y-4">
                <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-3">
                  🚢 Vessels
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  If you design, build, supply, maintain, upgrade, or manage boats, ships, 
                  yachts, submersibles (crewed or uncrewed), or their systems — whether 
                  new, pre-owned, leased, or autonomous — we want to hear from you.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  This includes propulsion (electric, hybrid, fuel cell, wind, kinetic, gas 
                  turbine), hull tech, navigation, comms, software, sensors, coatings, fuel 
                  additives, commercial & sport fishing technologies, and more.
                </p>
              </div>

              {/* ✅ PORTS & INFRASTRUCTURE */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60 space-y-4">
                <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-3">
                  ⚓ Ports, Harbours & Infrastructure
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We're looking for innovators in clean energy, fuel, and port systems—solar 
                  (including floating), wind, tidal, wave, kinetic systems, batteries, EV 
                  chargers, microgrids, and green fuel production (H₂, methanol, ammonia).
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Also: bunkering, storage, water treatment, automation, robotics, IoT, and 
                  digital systems that make shore-side operations smarter and cleaner.
                </p>
              </div>

              {/* ✅ PEOPLE */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60 space-y-4">
                <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-3">
                  🧭 People
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Vendors offering safety gear, training, clothing, welfare tools, simulation, 
                  recruitment, or crew support are welcome — especially those improving skills, 
                  wellbeing, diversity, and emergency preparedness across the maritime sector.
                </p>
              </div>

              {/* ✅ FINANCE & INSURANCE */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60 space-y-4">
                <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-3">
                  💼 Finance & Insurance
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  If you offer specialist funding, grant-writing, or insurance services 
                  tailored to the maritime or clean-technology sectors — whether for 
                  vessels, infrastructure, innovation projects, or operations — you’re 
                  invited to apply.
                </p>
              </div>

            </div>

            {/* Closing Line */}
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              There’s a place for everyone in the Ocean Marketplace. If you're not sure where 
              you fit, just get in touch — we’ll guide you.
            </p>

            {/* CTA */}
            <div className="text-center">
              <a
                href="#apply"
                className="px-8 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
              >
                Get Approved
              </a>
            </div>

          </div>
        </section>


      {/* ✅ FORM CTA — SUPERINTELLIGENCE */}

      <section
        id="apply"
        className="w-full bg-gradient-to-b from-white via-blue-50/50 to-blue-100/40 py-28 px-6"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            className="leading-[1.40] text-4xl md:text-5xl font-extrabold text-blue-900 mb-6"
          >
            Get Approved & Connect <br /> With Enterprise Buyers
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
            Apply now to access verified enterprise leads and high-value  
            maritime opportunities.
          </p>

          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Whether you offer ready-to-deploy products or custom solutions —  
            we help you reach qualified demand.
          </p>
        </div>

        {/* ✅ FORM */}
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
      <CookieBanner/>
    </main>
  );
}
