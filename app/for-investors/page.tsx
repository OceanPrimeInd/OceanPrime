"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { insertInvestor } from "../actions/insertInvestor";
import CookieBanner from "app/components/CookieBanner";

export default function InvestorPage() {
  const [mobile, setMobile] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <main className="bg-white text-gray-900">

      {/* ✅ HERO — SUPERINTELLIGENCE STYLE */}
      <section className="w-full text-center py-28 md:py-40 px-6 bg-gradient-to-b from-white via-blue-50/40 to-blue-50">
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight">
          Awakening What Others<br />
          <span className="text-orange-600">Cannot Yet See</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The maritime industry's transformation won't wait for consensus. If you're
          here, you already sense what's coming and want to shape it. Register
          below to access our investor materials and see how we're building the
          future of seamanship through AI-powered vessel intelligence.
        </p>
      </section>

      {/* ✅ SUPERINTELLIGENCE DIVIDER */}
      <div className="w-full h-16 bg-gradient-to-b from-blue-50 to-blue-100/40"></div>

      {/* ✅ FORM SECTION — GLASS CARD */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12">
          Get Started
        </h2>

        <form  action={async (formData) => {
             formData.set("mobile", mobile); // ✅ attach phone value
             const res = await insertInvestor(formData);
                  if (res.success) {
                    setSuccessMessage("✅ Thank you! Your details have been submitted.");
                  } else {
                    setSuccessMessage("❌ Something went wrong. Please try again.");
                  }
                }}
          className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/60 space-y-5"
        >
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-blue-900 block mb-1">First Name</label>
              <input name="firstname" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>

            <div>
              <label className="text-sm font-semibold text-blue-900 block mb-1">Last Name</label>
              <input name="lastname" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-blue-900 block mb-1">Email</label>
            <input type="email" name="email" required className="w-full border rounded-lg px-4 py-2" />
          </div>

          {/* Mobile */}
          <div>
            <label className="text-sm font-semibold text-blue-900 block mb-1">Mobile</label>
            <PhoneInput
              defaultCountry="gb"
              value={mobile}
              onChange={(value) => setMobile(value)}
              className="w-full"
              inputClassName="!w-full !border !border-gray-300 !rounded-lg !px-4 !py-2"
              countrySelectorStyleProps={{
                buttonClassName: "!px-3 !py-2 !border-gray-300",
                dropdownArrowClassName: "!text-blue-900",
              }}
            />
          </div>
               
          {/* Message */}
           <div>
            <label className="text-sm font-semibold text-blue-900 block mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <p className="text-sm text-gray-600">
            *When you are approved, you will be emailed login credentials.
          </p>

          {/* CTA */}
          <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-800 transition flex items-center justify-center gap-2">
            Submit <ArrowRight size={18} />
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
