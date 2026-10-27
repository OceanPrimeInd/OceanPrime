"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CookieBanner from "app/components/CookieBanner";

export default function DonatePage() {
  return (
    <main className="bg-white text-blue-900">

      {/* ============================= */}
      {/* HERO — full SI gradient       */}
      {/* ============================= */}
      <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E9FBFF] via-[#D8F2FF] to-[#CFF0FF]" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.15] tracking-tight">
            Help fund Swansea Ferry Research Project
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-900/80">
            Smart Green Travel
          </p>
          <p className="mt-3 text-base md:text-lg text-blue-900/70 max-w-3xl mx-auto">
            An exciting initiative to explore the feasibility of a ferry service between Swansea and Southwest England
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* INTRODUCTION                  */}
      {/* ============================= */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Introduction
            </h2>
            <div className="mt-5 space-y-4 text-blue-900/80 leading-relaxed">
              <p>
                My name is Dave Sampson, I’m CEO and founder of Ocean and I’m spearheading an exciting initiative
                to explore the feasibility of a new advanced tech zero-emission ferry service between Swansea and
                South West England.
              </p>
              <p>
                This service has the potential to save people hours of monotonous driving, reduce road congestion on
                the M4/M5, boost tourism by £££millions, and create well-paid jobs and economic opportunities in
                clean advanced tech at all levels and for communities on both sides of the Bristol Channel.
              </p>
              <p>
                To make this vision a reality, we need your help. Through this GoFundMe campaign, we’re raising funds
                to finance a comprehensive research report that will allow Swansea Council and regional partners to
                make an informed decision on whether to proceed with the ferry project.
              </p>
            </div>

            <div className="mt-6">
              <a
                href="https://gofund.me/d8991f8d"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
              >
                Donate now at our GoFundMe page <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* BENEFITS — alternating blocks */}
      {/* ============================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-16">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-blue-200/50 bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg flex items-center justify-center">
            {/* Ensure the span doesn't constrain the image dimensions */}
            <span className="text-blue-900/40 font-semibold w-full h-full">
                {/* Update the Image className as shown below */}
                <Image
                    src="/scenic-motorway.png"
                    alt="Ferry Illustration"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                />
            </span>
        </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Save travel time, reduce road congestion & air pollution</h3>
            <p className="text-blue-900/80 leading-relaxed">
              With traffic along the M4/M5 corridors increasing, a direct ferry could offer a cleaner air and faster travel alternative.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Day trips, weekend breaks and business opportunities</h3>
            <p className="text-blue-900/80 leading-relaxed">
              A ferry service is likely to encourage day trips, weekend breaks, and new business opportunities on both sides of the Channel.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-64 md:h-80 rounded-3xl overflow-hidden border border-blue-200/50 bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg flex items-center justify-center">
            {/* Optional: Add w-full h-full to the span if it needs to fill its parent first */}
            <span className="text-blue-900/40 font-semibold w-full h-full">
                {/* Update the Image className as shown below */}
                <Image
                    src="/day-trips.png"
                    alt="Ferry Illustration"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                />
            </span>
        </div>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-blue-200/50 bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg flex items-center justify-center">
              {/* Add w-full, h-full, object-cover to the Image component */}
              <Image
                src="/New-Friends.png"
                alt="New Friends Illustration"
                width={128} // These can stay but are less impactful if w-full/h-full are used
                height={128}
                className="w-full h-full object-cover" // Updated classes
              />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">New friends and colleagues</h3>
            <p className="text-blue-900/80 leading-relaxed">
              People in South Wales, North Devon and Cornwall could more easily meet up and work together.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Cleaner beaches, happier crabs</h3>
            <p className="text-blue-900/80 leading-relaxed">
              Everyone wins when we reduce pollution, the sea is cleaner for swimming, the air is fresher for breathing,
              and even the crabs will be happier.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-64 md:h-80 rounded-3xl overflow-hidden border border-blue-200/50 bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg flex items-center justify-center">
            {/* Remove the span wrapper if possible, or ensure it doesn't interfere with sizing */}
            {/* If you must keep the span, make it fill the parent too */}
            <span className="text-blue-900/40 font-semibold w-full h-full">
                {/* Apply w-full, h-full, and object-cover to the Image */}
                <Image
                    src="/smiling-Crab.png"
                    alt="Ferry Illustration"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                />
            </span>
        </div>

        </div>
      </section>

      {/* ============================= */}
      {/* USE OF FUNDS                  */}
      {/* ============================= */}
      <section className="w-full bg-gradient-to-b from-white via-blue-50/60 to-blue-100/60 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold">Use of Funds</h3>
          <p className="mt-3 text-blue-900/70">How we expect to use your donation</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { label: "Research", pct: "30%", desc: "Data, economics, environment" },
              { label: "Engagement", pct: "20%", desc: "Outreach meetings, consultations" },
              { label: "Communication", pct: "10%", desc: "Website, newsletters, videos" },
              { label: "Consultation", pct: "30%", desc: "Business & maritime communities" },
              { label: "Reporting", pct: "10%", desc: "Modelling, publish & present" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 text-left bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl"
              >
                <div className="text-sm font-semibold text-blue-900/80">{item.label}</div>
                <div className="mt-1 text-3xl font-extrabold">{item.pct}</div>
                <div className="mt-3 text-sm text-blue-900/70 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* TIMELINE + BIG IMAGE          */}
      {/* ============================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-start">
        {/* Timeline */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-extrabold">What is the Project Timeline?</h3>
          <ul className="space-y-4">
            {[
              { when: "Mar 2025", what: "Launch & Public Poll" },
              { when: "Apr – Jun", what: "Data Capture & Outreach" },
              { when: "Jul – Sep", what: "Groups Analysis" },
              { when: "Oct – Dec", what: "Draft Report & Modelling" },
              { when: "Jan 2026", what: "Final Report" },
            ].map((row) => (
              <li key={row.when} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 rounded-full bg-blue-900" />
                <p className="text-blue-900/80">
                  <span className="font-semibold">{row.when}:</span> {row.what}
                </p>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <a
              href="https://gofund.me/d8991f8d"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
            >
              Donate now at our GoFundMe page <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Big city image placeholder */}
       <div className="relative h-64 md:h-[380px] rounded-3xl overflow-hidden border border-blue-200/60 bg-gradient-to-br from-blue-100 to-blue-200 shadow-xl flex items-center justify-center">
        {/* Image fitting classes remain the same for perfect fit */}
        <span className="text-blue-900/40 font-semibold w-full h-full">
            <Image
                src="/Castle.png"
                alt="Castle Illustration"
                width={256}
                height={256}
                className="w-full h-full object-cover"
            />
        </span>
     </div>

      </section>
    <CookieBanner/>
    </main>
  );
}
