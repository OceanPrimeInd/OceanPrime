"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import { insertContact } from "../actions/insertContact";
import CookieBanner from "app/components/CookieBanner";

export default function ContactPage() {
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <main className="bg-gradient-to-b from-blue-50/60 to-white min-h-screen py-24 px-6">
      
      {/* ✅ Header */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <p className="uppercase tracking-wide text-blue-800 font-semibold mb-3">
          Want to work together?
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
          Send Us a Message Using the Form Below
        </h1>
      </section>

      {/* ✅ Contact Form */}
      <section className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-10 md:p-14">

        <form action={async (formData) => {
              formData.set("phone", phone); // ✅ attach phone value
        
              const res = await insertContact(formData);
        
              if (res.success) {
                  setSuccessMessage("✅ Thank you! Your details have been submitted.");
              } else {
                setSuccessMessage("❌ Something went wrong. Please try again.");
            }
        }} className="space-y-8">

          {/* ✅ Name Fields */}
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
              Message
            </label>
            <textarea
              name="message"
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
            Submit
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
