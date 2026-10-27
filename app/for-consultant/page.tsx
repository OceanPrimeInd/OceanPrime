"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { insertInquiry } from "../actions/insertInquiry";
import CookieBanner from "app/components/CookieBanner";

export default function ForConsultantsPage() {
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <main className="bg-white text-gray-900">
      {/* ✅ HERO — SUPERINTELLIGENCE GRADIENT */}
      <section className="w-full text-center py-32 md:py-44 px-6 bg-gradient-to-b from-white via-blue-50/40 to-blue-50">
        <h1
          className="text-5xl md:text-7xl font-extrabold text-blue-900 tracking-tight"
          style={{ lineHeight: "1.2" }}
        >
          Co-Creating The <br /> Future Of Maritime Performance<br />
          <span className="text-orange-600">With You, For You</span>
        </h1>
      </section>

      {/* divider */}
      <div className="w-full h-24 bg-gradient-to-b from-blue-50 to-blue-100/40"></div>

      {/* ✅ INTRO — Superintelligence Card Layout */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
          Built for Independent Maritime Consultants
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Ultra Maritime System (UMS) is in its founder-led, early-access 
          beta phase, AI powered service platform and every line of code
          is being written with your day-to-day consulting reality in mind. 
          We want to be hyper-successful to help us drive the adoption
          of high-performance zero-emission technology, fleets, green 
          fuel and smart-ports. You’ll be among the very first to shape a
          platform that will eventually power zero-emission fleets and 
          smart ports worldwide.
        </p>

        <div>
          <a
            href="#who"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-blue-900 text-blue-900 font-medium hover:bg-blue-900 hover:text-white transition"
          >
            See Who’s Already Here
          </a>
        </div>
      </section>

      {/* ✅ WHO'S HERE — Gradient Background */}
      <section
        id="who"
        className="w-full bg-gradient-to-b from-blue-100/40 to-blue-50 py-28 px-6"
      >
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 text-center tracking-tight">
            Who’s Here Already
          </h3>

          {/* TWO-COLUMN GRID */}
          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* LEFT COLUMN — TEXT */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Right now you'll be joining an elite list of individuals and SME
                consulting services with access to a rapidly growing range of 
                the very best equipment, service, software and AI vendors — all  
                via our Ultra Maritime System platform.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Gain early access to vetted suppliers, structured workflows,  
                maritime intelligence tools, and clean-tech partners designed  
                to elevate the way consulting work is delivered globally.
              </p>
               {/* CTA */}
              <br/><br/>
              <a
                href="#benefits"
                className="px-8 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
              >
                See Early-Access Benefits
              </a>
      
            </div>

            {/* RIGHT COLUMN — CARD */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/60">
              <h4 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
                Coming Soon
              </h4>

              <ul className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <li className="flex gap-3 items-start">
                  <span className="mt-2 block h-2 w-2 bg-blue-900 rounded-full"></span>
                  UK maritime regulations — all in one place with instant AI lookup.
                </li>

                <li className="flex gap-3 items-start">
                  <span className="mt-2 block h-2 w-2 bg-blue-900 rounded-full"></span>
                  AI-enabled automated tender responses for UK, EU, and North America.
                </li>

                <li className="flex gap-3 items-start">
                  <span className="mt-2 block h-2 w-2 bg-blue-900 rounded-full"></span>
                  Voice-enabled maritime AI agents (beta coming soon).
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ✅ BENEFITS — SuperAI Card */}
      <section
        id="benefits"
        className="max-w-5xl mx-auto px-6 py-28"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center tracking-tight mb-12">
          How Early Partners Benefit
        </h2>

        <div className="bg-white/80 backdrop-blur-xl shadow-xl border border-white/60 rounded-3xl p-10 max-w-3xl mx-auto space-y-6">
          <div className="flex gap-3 items-start">
            <span className="mt-2 h-2 w-2 bg-blue-900 rounded-full"></span>
            <p className="text-lg text-gray-700 leading-relaxed">
              Influence the roadmap — your feedback directly shapes the next release.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <span className="mt-2 h-2 w-2 bg-blue-900 rounded-full"></span>
            <p className="text-lg text-gray-700 leading-relaxed">
              First-mover advantage — offer clients next-gen capabilities months
              before the market.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <span className="mt-2 h-2 w-2 bg-blue-900 rounded-full"></span>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transparent rollout — receive sandbox access and ongoing feature updates.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <span className="mt-2 h-2 w-2 bg-blue-900 rounded-full"></span>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your data stays yours — never shared without explicit written consent.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#form"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-blue-900 text-blue-900 font-medium hover:bg-blue-900 hover:text-white transition"
          >
            Join the Early-Access Program
          </a>
        </div>
      </section>

      {/* ✅ FORM SECTION — full SI gradient */}
      <section 
        id="form"
        className="w-full bg-gradient-to-b from-white via-blue-50/50 to-blue-100/40 py-28 px-6"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Get Started & Power Your Client Discovery
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Apply for early access to UMS and gain qualified enterprise leads
            with clear purchasing intent.
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
      <CookieBanner />
    </main>
  );
}
