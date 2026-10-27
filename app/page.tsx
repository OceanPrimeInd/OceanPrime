"use client";

import { ArrowRight } from "lucide-react";
import CookieBanner from "app/components/CookieBanner";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full text-gray-900">

      {/* ================================================= */}
      {/* ✅ SUPERINTELLIGENCE HERO — Clean White to Soft Blue */}
      {/* ================================================= */}
      <section className="w-full text-center py-28 md:py-40 px-6 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/40">
        <h2 className="text-5xl md:text-7xl text-[64px] font-semibold leading-tight text-blue-900">
          A Very Different <span className="text-orange-600">Maritime Future</span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Building the next era of performance, sustainability, and intelligence on the world’s oceans.
        </p>

        <div className="mt-10">
          <a
            href="#about"
            className="inline-flex items-center px-7 py-3 rounded-xl bg-blue-900 text-white shadow-lg hover:bg-blue-800 transition"
          >
            Learn More <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </section>

      {/* ================================================= */}
      {/* ✅ ABOUT SECTION — White with soft mist gradient */}
      {/* ================================================= */}
      <section id="about" className="w-full py-20 px-6 md:px-10 bg-gradient-to-b from-blue-100/40 to-white">
        <div className="max-w-5xl mx-auto text-center md:text-left space-y-8">
           <h2
              className="text-4xl text-[36px] md:text-5xl text-blue-900"
              style={{ fontFamily: "Public Sans, sans-serif", lineHeight: "1.25" }}
            >
              We Develop &amp; Scale <br />
              <span className="text-orange-600">
                Ultra Performance <br />
                Mission Capability
              </span>
              <br />
              For Vessels &amp; Ports
            </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Ultra Maritime System (UMS) is our AI powered platform for<br />
            upgrading vessels, fleets and ports to high-performance,<br />
            zero-emission operations.
          </p>
        </div>
      </section>

      {/* ================================================= */}
      {/* ✅ FEATURE CARDS — Superintelligence Soft Blue Gradient */}
      {/* ================================================= */}
      <section className="w-full py-24 px-6 md:px-10 bg-gradient-to-b from-white via-blue-50/60 to-blue-100/70">
        <div className="max-w-6xl mx-auto text-center" style={{ fontFamily: "Public Sans, sans-serif" }}>
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* CARD 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-10 border border-blue-100 hover:shadow-xl transition">
              <h3 className="text-2xl leading-[1.3]  font-extrabold text-blue-900 mb-3">
                Ultra Vessel Performance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent propulsion systems for <br /> all vessel sizes from &gt;10m to &lt;100m for better, cleaner performance. <br /><br />
                Don&apos;t get penalised by rapid changes in IMO or Government regulations
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-10 border border-blue-100 hover:shadow-xl transition">
              <h3 className="text-2xl leading-[1.3] font-extrabold text-blue-900 mb-3">
                Modular Fuel <br /> Plant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Drop-in renewable powered green fuel <br /> production, storage and dispensing for <br /> all ports, harbours and marinas. <br /><br />
                Don&apos;t wait for the national grid, take control of your transition to net zero
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-10 border border-blue-100 hover:shadow-xl transition">
              <h3 className="text-2xl leading-[1.3] font-extrabold text-blue-900 mb-3">
                Smart Port Systems
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent management of port <br /> customers, infrastructure, electricity, <br /> fuel, water securely and safely <br /><br />
                Grow your revenues and improve efficiency with cleantech
              </p>
            </div>

          </div>

          <p className="mt-12 text-blue-900 font-bold text-[15px] leading-normal text-center">
            We design, build, source, assemble, integrate and curate everything the real world needs to rapidly achieve exceptional maritime performance and capability,<br />
            helping our customers deliver extraordinary business performance advantages
          </p>
        </div>
      </section>

    {/* ================================================= */}
      {/* ✅ CONTACT SECTION — Superintelligence Style */}
      {/* ================================================= */}

      <section className="w-full py-32 px-6 bg-gradient-to-b from-[#E9F4FF] to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT — Text Block */}
          <div className="space-y-6">

           <h2
              className="leading-[1.0] text-4xl md:text-5xl font-semibold text-blue-900"
              style={{ fontFamily: "Public Sans, sans-serif", lineHeight: "1.35" }}
            >
              Get In Touch, To Find 
              <br />
              How We Can Support
              <span className="block text-orange-600">Your Business</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            We are independent experts partnering with leading OEMs, <br/>
            consultancy services and fuel production and distribution <br/>
            companies. We operate at the convergence of business <br/>
            performance and sustainability, offering vessel upgrades,<br/>
            new design & build, renewable and clean energy and fuel. <br/>
            Our straightforward advice and recommendations help you<br/>
            quickly and profitably achieve business goals and objectives.
            </p>

            <a
              href="#audit"
              className="inline-flex items-center px-7 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>

        </div>
      </section>



      {/* ================================================= */}
      {/* ✅ AUDIT CTA — Superintelligence Gradient */}
      {/* ================================================= */}

      <section id="audit" className="w-full py-32 px-6 bg-gradient-to-b from-white via-[#E9F4FF] to-[#D9EEFF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT — Text Block */}
          <div className="space-y-6">

            <h2
              className="text-4xl md:text-5xl font-semibold text-blue-900"
              style={{ lineHeight: "1.25" }}
            >
              A Performance Audit
              Changes Your Business  
              <span className="block text-orange-600">
                Discover How Future Ready You Are
              </span>
            </h2>


            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Ocean's Performance Audits enables us to dive deep into<br/>
              your business goals to uncover where advanced clean tech,<br/> 
              renewable electricity and green fuels, could make the most <br/>
              impact for your enterprise, we outline a plan to enable a fast <br/>
              return on your investment. Ocean's blend of experts, artificial<br/>
              intelligence, and analysis reveals fast, unbiased opportunities<br/>
              and insights, which are immediately actionable
            </p>

            <a
              href="#step-one"
              className="inline-flex items-center px-7 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
            >
              Discover Performance Audits
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>

        </div>
      </section>


      {/* ================================================= */}
      {/* ✅ STEP ONE — Superintelligence Split Layout */}
      {/* ================================================= */}
      <section id="step-one" className="w-full py-28 px-6 bg-gradient-to-b from-blue-100/60 to-blue-50/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <span className="inline-block text-xs tracking-widest font-semibold text-blue-900 bg-white/70 px-4 py-1 rounded-full border border-blue-200">
              STEP ONE
            </span>

            <h6
            className="text-4xl text-[36px] md:text-5xl font-semibold text-blue-900"
            style={{ lineHeight: "1.25" }}
           >
            Performance Audits Use Ocean’s Experts & Our AI-Enabled UMS Platform
          </h6>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Unlike slow and expensive surveys our digital audits operate 
              quickly and dynamically at scale within your organisation to 
              uncover, categorise, and decipher powerful opportunities for
              immediate implementation.
            </p>

            <a
              href="#step-two"
              className="inline-flex items-center px-7 py-3 rounded-xl bg-blue-900 text-white shadow-lg hover:bg-blue-800 transition"
            >
              See Audit Outcome <ArrowRight size={18} className="ml-2" />
            </a>
          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* ✅ STEP TWO */}
      {/* ================================================= */}
      <section id="step-two" className="w-full py-28 px-6 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* RIGHT */}
          <div className="space-y-6">
            <span className="inline-block text-xs tracking-widest font-semibold text-blue-900 bg-blue-50 px-4 py-1 rounded-full border border-blue-200">
              STEP TWO
            </span>

           <h6
            className="text-4xl text-[36px] md:text-5xl font-semibold text-blue-900"
            style={{ lineHeight: "1.25" }}
          >
            Get Actionable Recommendations For Your Vessel, Port Or Company
          </h6>

            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Our in-depth assessment analyses your organisation’s 
              readiness to adopt cleantech, renewable electricity and green 
              fuels to enhance earnings, taking into account operational, 
              technical and use case dimensions. The full audit includes 
              recommendations of relevant products and expertise along 
              with a prioritised list of next steps.
            </p>

            <a
              href="#plans"
              className="inline-flex items-center border border-blue-900 text-blue-900 px-7 py-3 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition"
            >
              Pick Your Audit Plan <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ✅ AUDIT PLANS */}
      {/* ================================================= */}
      <section id="plans" className="w-full py-28 px-6 bg-gradient-to-b from-blue-50/70 to-blue-100/70">
        <div className="max-w-6xl mx-auto text-center space-y-14">

          <span className="text-sm tracking-wider font-semibold text-blue-900">
            PERFORMANCE AUDIT PLANS
          </span>

         <h2
            className="text-4xl md:text-5xl font-semibold text-blue-900"
            style={{ lineHeight: "1.25" }}
          >
            Performance Audits for <br /> Every Enterprise
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* CARD 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-blue-100 flex flex-col items-center text-center space-y-6">
              <div className="h-20 w-20 rounded-full border-2 border-blue-300 flex items-center justify-center text-blue-300 text-3xl">
                📊
              </div>

              <h3 className="text-2xl font-semibold text-blue-900">
                Benchmarking Audit
              </h3>

              <div className="inline-flex items-center px-4 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-900 text-sm font-semibold">
                IDEAL FOR:
                <span className="ml-2 font-normal">
                  Orgs in the early stages of the process
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg max-w-md">
                For organisations that know they need to consider cleantech or green
                fuels but don’t know where to start. Perfect for leadership teams needing
                clarity, direction, and early readiness insights.
              </p>

              <a
                href="#start"
                className="inline-flex items-center px-7 py-3 bg-blue-900 text-white rounded-xl shadow-lg hover:bg-blue-800 transition"
              >
                Get Started Now <ArrowRight size={18} className="ml-2" />
              </a>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-blue-100 flex flex-col items-center text-center space-y-6">
              <div className="h-20 w-20 rounded-full border-2 border-blue-300 flex items-center justify-center text-blue-300 text-3xl">
                ✅
              </div>

              <h3 className="text-2xl font-semibold text-blue-900">
                Opportunity Mapping
              </h3>

              <div className="inline-flex items-center px-4 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-900 text-sm font-semibold">
                IDEAL FOR:
                <span className="ml-2 font-normal">
                  Orgs ready for advanced next steps
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg max-w-md">
                Designed to uncover high-value use cases with structured workflows,
                operational insights, and a prioritised roadmap. Ideal for organisations
                needing clarity on where clean-tech drives the biggest impact.
              </p>

              <a
                href="#start"
                className="inline-flex items-center px-7 py-3 bg-blue-900 text-white rounded-xl shadow-lg hover:bg-blue-800 transition"
              >
                Get Started Now <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ✅ MARKETPLACE SECTION — Superintelligence Style */}
      {/* ================================================= */}
      <section
        id="start"
        className="w-full py-32 px-6 bg-gradient-to-b from-blue-100/70 via-blue-200/40 to-blue-100/20 text-blue-900"
      >
        <div className="max-w-4xl mx-auto text-center space-y-10">

          <span className="text-sm tracking-wider font-semibold text-blue-900/70">
            WHAT HAPPENS NEXT?
          </span>

          <h2
            className="text-4xl md:text-5xl font-semibold text-blue-900"
            style={{ lineHeight: "1.25" }}
          >
            Find Solutions On <br />
            <span className="text-blue-900">Ocean's Marketplace</span>
          </h2>

          <p className="text-lg leading-relaxed text-blue-900/90 max-w-2xl mx-auto">
           Audits produce a list of use cases immediately. Our marketplace is where we help you find the best in class products,
           services and partners to implement your solutions. Suppliers in our marketplace are all vetted and approved by Ocean
          </p>

          <div className="pt-4">
            <a
              href="/contact"
              className="inline-flex items-center px-7 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-900 text-blue-900 font-semibold shadow-xl hover:bg-white transition text-lg"
            >
              Explore Marketplace <ArrowRight size={20} className="ml-2" />
            </a>
          </div>

        </div>
      </section>
      <CookieBanner />
    </main>
  );
}
