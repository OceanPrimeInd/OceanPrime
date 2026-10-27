"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { submitVote } from "app/actions/submitVote";
import { subscribeNewsletter } from "app/actions/subscribeNewsletter";
import CookieBanner from "app/components/CookieBanner";


/* -------------------------------------------
   Small inline SVG icons for the vote options
--------------------------------------------*/
function HappyIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-10 w-10">
      <circle cx="32" cy="32" r="28" fill="none" stroke="#1343a3" strokeWidth="4" />
      <circle cx="22" cy="26" r="3" fill="#1343a3" />
      <circle cx="42" cy="26" r="3" fill="#1343a3" />
      <path d="M22 40c3 4 8 6 10 6s7-2 10-6" fill="none" stroke="#1343a3" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
function SadIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-10 w-10">
      <circle cx="32" cy="32" r="28" fill="none" stroke="#1343a3" strokeWidth="4" />
      <circle cx="22" cy="26" r="3" fill="#1343a3" />
      <circle cx="42" cy="26" r="3" fill="#1343a3" />
      <path d="M22 46c3-4 8-6 10-6s7 2 10 6" fill="none" stroke="#1343a3" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
function QuestionIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-10 w-10">
      <circle cx="32" cy="32" r="28" fill="none" stroke="#1343a3" strokeWidth="4" />
      <path d="M22 25c1-5 6-8 10-8 6 0 10 4 10 9 0 6-6 7-8 10" fill="none" stroke="#1343a3" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="48" r="2.5" fill="#1343a3" />
    </svg>
  );
}

/* -------------------------------------------
   VoteForm: custom React form (client-only)
   - Emits JSON on submit (console.log)
   - You can wire to API/Supabase easily
--------------------------------------------*/
type VoteChoice = "yes" | "no" | "maybe";

function VoteForm({ compact = false }: { compact?: boolean }) {
  const [vote, setVote] = useState<VoteChoice | null>(null);
  const [comment, setComment] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!vote || !email || !first) {
      setMessage("❌ Please fill in all required fields.");
      return;
    }

    setSending(true);
    const formData = new FormData();
    formData.append("vote_choice", vote);
    formData.append("comments", comment);
    formData.append("first_name", first);
    formData.append("last_name", last);
    formData.append("email", email);
    formData.append("org", org);

    const result = await submitVote(formData);

    if (result.success) {
      setMessage("✅ Thank you! Your vote has been recorded.");
      setVote(null);
      setComment("");
      setFirst("");
      setLast("");
      setEmail("");
      setOrg("");
    } else if (result.error === "User already voted") {
      setMessage("⚠️ You’ve already voted.");
    } else {
      setMessage("❌ Something went wrong. Please try again.");
    }

    setSending(false);
  };

  return (
     <form onSubmit={onSubmit} className="w-full">
      {/* Vote options */}
      <div className={`grid ${compact ? "md:grid-cols-3" : "md:grid-cols-3"} gap-4`}>
        {[
          { key: "yes", label: "Yes", icon: <HappyIcon /> },
          { key: "no", label: "No", icon: <SadIcon /> },
          { key: "maybe", label: "Maybe", icon: <QuestionIcon /> },
        ].map((opt) => (
          <label
            key={opt.key}
            className={`flex flex-col items-center justify-center rounded-2xl border p-6 cursor-pointer bg-white/80 backdrop-blur
            ${
              vote === (opt.key as VoteChoice)
                ? "border-blue-600 ring-2 ring-blue-100"
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            <input
              type="radio"
              name="vote"
              value={opt.key}
              className="hidden"
              onChange={() => setVote(opt.key as VoteChoice)}
              checked={vote === (opt.key as VoteChoice)}
            />
            <div className="mb-3">{opt.icon}</div>
            <div className="text-sm font-semibold text-blue-900">{opt.label}</div>
          </label>
        ))}
      </div>

      {/* Comment field */}
      <div className="mt-6">
        <label className="block text-sm font-semibold text-blue-900 mb-1">Comment</label>
        <textarea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
        />
      </div>

      {/* Name + Email fields */}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-blue-900 mb-1">First Name *</label>
          <input
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-900 mb-1">Last Name</label>
          <input
            value={last}
            onChange={(e) => setLast(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold text-blue-900 mb-1">Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-semibold text-blue-900 mb-1">Organisation</label>
        <input
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
        />
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Now click on submit and your vote will be counted. We respect your privacy. Read our{" "}
        <Link href="#" className="underline">
          Privacy Policy
        </Link>.
      </p>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 text-white font-semibold px-6 py-3 hover:bg-blue-800 transition"
      >
        {sending ? "Submitting..." : "Submit"} <ArrowRight size={18} />
      </button>

      {message && (
        <p
          className={`mt-4 text-sm ${
            message.startsWith("✅")
              ? "text-green-700"
              : message.startsWith("⚠️")
              ? "text-orange-600"
              : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

/* -------------------------------------------
   Page
--------------------------------------------*/
export default function FerryProjectIntro() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const result = await subscribeNewsletter(newsletterEmail.trim());
    if (result.success) {
      setNewsletterMsg("✅ You’re now subscribed!");
      setNewsletterEmail("");
    } else if (result.error === "Email already subscribed") {
      setNewsletterMsg("⚠️ You’re already subscribed.");
    } else {
      setNewsletterMsg("❌ Subscription failed. Try again.");
    }
    setSubmitting(false);
  };

  return (
    <main className="w-full bg-white text-gray-900">

      {/* ======================================= */}
      {/* HERO */}
      {/* ======================================= */}
      <section className="w-full text-center py-28 md:py-40 px-6 bg-gradient-to-b from-white via-blue-50/50 to-blue-100/50">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.15] text-blue-900 tracking-tight">
          Your Voice Matters
        </h1>
        <p className="mt-4 text-[18px] text-blue-900/80">
          Shape the Future of Zero Emission Travel Across the Bristol Channel
        </p>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
          Join us in pioneering an affordable zero-emission fast ferry service between Swansea and South West England
        </p>
      </section>

      {/* ======================================= */}
      {/* WHAT WE’RE DOING */}
      {/* ======================================= */}
    <section className="max-w-7xl mx-auto px-6 py-28">
            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* ✅ Left Side — Image Placeholder (swap later) */}
              <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-blue-200/50 bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg flex items-center justify-center">
                            {/* Add w-full, h-full, object-cover to the Image component */}
                    <Image
                       src="/day-trips.png"
                       alt="New Friends Illustration"
                       width={128} // These can stay but are less impactful if w-full/h-full are used
                       height={128}
                       className="w-full h-full object-cover" // Updated classes
                     />
                 </div>
                {/* ✅ Right Side — Premium Content */}
                <div className="space-y-8">
                
                {/* Section Tag */}
                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide shadow-sm">
                    PROJECT OVERVIEW
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-[1.25] tracking-tight">
                    What We’re Doing  
                </h2>

                {/* About Block */}
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-100 shadow-lg p-6 space-y-4">
                    <p className="text-gray-700 leading-relaxed text-lg">
                    Ocean is leading a major initiative to transform travel across the Bristol Channel 
                    with a <span className="text-blue-900 font-semibold">zero-emission fast ferry service</span>, operating 
                    all year round (weather permitting).  
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                    We want to hear from you — whether you support the idea, have concerns, or simply 
                    have questions. Your perspective matters.
                    </p>
                </div>

                {/* Mini Highlights */}
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 bg-blue-900 rounded-full"></span>
                    <p className="text-gray-700 leading-relaxed">
                        Over the next 12 months, we’re conducting an in-depth study to understand public demand 
                        for a clean, reliable, fast ferry link between Swansea and destinations across 
                        the Bristol Channel and Celtic Sea.
                    </p>
                    </div>

                    <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 bg-blue-900 rounded-full"></span>
                    <p className="text-gray-700 leading-relaxed">
                        Findings will shape a comprehensive report and determine whether this transformative 
                        service moves forward into full development.
                    </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                    <a
                    href="/projects/ferry/faqs" target="_blank"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
                    >
                    Find out more in our FAQs <ArrowRight size={18} />
                    </a>
                </div>

                </div>
            </div>
        </section>

      {/* ======================================= */}
      {/* WHY IT MATTERS */}
      {/* ======================================= */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6">Why It Matters</h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-700 leading-relaxed">
            <li>
              A zero-emission ferry would pioneer efficient, comfortable travel setting new transport industry
              standards for maritime clean innovation.
            </li>
            <li>
              Its low environmental impact could drastically reduce air and water pollution and protect our beautiful
              coastal and marine ecosystems.
            </li>
            <li>
              Ferry passengers&apos; spending generates economic growth and stimulates local businesses, creating new job
              opportunities.
            </li>
            <li>
              The strengthening of links between communities on both sides of the channel to collaborate and share
              resources would increase social capital.
            </li>
          </ul>
        </div>
      </section>

      {/* ======================================= */}
      {/* HOW YOU CAN GET INVOLVED + CAST YOUR VOTE (Form #1) */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-16" id="vote">
        <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6">How You Can Get Involved</h3>

        <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-6 md:p-10">
          <h4 className="text-lg font-semibold text-blue-900 mb-1">Cast Your Vote Below</h4>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            Tell us if you support this initiative - Yes, No, or Maybe - whatever your answer, please leave a short
            comment to tell us why. Leave your contact details, so you can stay updated and we can reach out to you for
            more information if we need it. Your opinion will directly influence the future of this project.
          </p>
          <VoteForm />
        </div>
      </section>

      {/* ======================================= */}
      {/* FOREWORD + IMAGE */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* ✅ Perfectly fitted image box */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/Rob-Stewart.png"
              alt="Cllr Rob Stewart"
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* ✅ Text Card */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-8 md:p-10">
            <h4 className="text-2xl md:text-3xl font-extrabold text-blue-900">
              Foreword from Cllr Rob Stewart
            </h4>

            <p className="text-blue-900 font-semibold mt-2">
              Swansea Council Leader
            </p>

            <div className="space-y-4 mt-5 text-gray-700 leading-relaxed">
              <p>
                Swansea is undergoing a period of unprecedented positive change, with
                the public and private sectors working more closely together than ever
                before to transform our city for the benefit of local people, local
                businesses and visitors.
              </p>
              <p>
                It’s important, however, that Swansea has a transport system that
                meets modern needs while supporting our ambition to become a net zero
                city. The possible introduction of a ferry service between Swansea and
                South West England could form part of this system in future, so we’re
                keen to hear as many people’s views as possible on the concept.
              </p>
              <p>
                I’d encourage residents and businesses to vote and give their
                feedback because this is a great opportunity to help shape Swansea’s
                future.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* SWANSEA REGENERATION */}
      {/* ======================================= */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">
            Swansea&apos;s Regeneration Programme
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A regeneration programme worth more than £1bn is ongoing in Swansea, helping to transform the city into one
            of the UK’s best places to live, work, enjoy, study and visit. From the development of new facilities to the
            restoration of historic structures, the city’s future is being shaped and its heritage is being celebrated.
          </p>
        </div>
      </section>

      {/* ======================================= */}
      {/* SUPPORT THE RESEARCH FINANCIALLY */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900">Support the Research Financially</h3>
        <p className="text-gray-700 leading-relaxed mt-4">
          We&apos;d like to thank Swansea Council for their support via the UK Government&apos;s UK Shared Prosperity Fund,
          which has enabled us to kick-start the project. To sail ahead 🙄 and carry out further research and analysis,
          we will need further financial support.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          You can donate via GoFundMe to help us cover research and analysis costs and move closer to making this vision
          a reality. There are other ways you can help by becoming a brand partner or an investor. Here&apos;s the link to the{" "}
          <Link href="https://gofund.me/d8991f8d" target="_blank" className="underline">GoFundMe</Link> (Opens in a new window)
        </p>

      {/* ✅ Partner Logos — Larger, Cleaner, No Borders */}
    <div className="flex flex-wrap md:flex-nowrap gap-12 mt-10">

        {/* Swansea Council */}
        <Image
          src="/Swansea.jpg"
          alt="Swansea Council Logo"
          width={120}
          height={120}
          className="object-contain"
        />

        {/* UK Government */}
        <Image
          src="/Funded-by-UK-Gov-Duel-Side.jpg"
          alt="Funded by UK Government Logo"
          width={400}
          height={400}
          className="object-contain"
        />

      </div>


        <div className="mt-8">
          <a href="/contact" target="_blank" className="mt-6 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 text-white font-semibold px-6 py-3 hover:bg-blue-800 transition">
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ======================================= */}
      {/* CONTACT GROUPS GRID */}
      {/* ======================================= */}
      <section className="w-full bg-blue-50/40 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900">
            Please contact us if you are in any of the following groups
          </h3>

          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Collaborate and Share Expertise",
                body:
                  "We intend to be present at various events during the year, and if you’d like us to attend, please get in contact.",
              },
              {
                title: "Local Residents and Businesses",
                body:
                  "Share your insights and let us know how this service could benefit you. If you have concerns, we'd like to hear them too.",
              },
              {
                title: "Schools, Colleges and Training Establishments",
                body:
                  "We’d encourage schools, colleges and universities to reach out to us to explore opportunities to enhance learning.",
              },
              {
                title: "Hospitality, Tourism and Events",
                body:
                  "Explore opportunities and make suggestions on how this project can enhance leisure activities and visitor experiences.",
              },
              {
                title: "Environment and Climate Advocates",
                body:
                  "Replacing oil with clean energy is complex. Help us drive sustainable innovation and address climate change.",
              },
              {
                title: "Bus, Rail, Taxi and E-Bike Rental Operators",
                body:
                  "Can you help us build our vision for a fully integrated ferry service? We aim to use seamless and fully accessible ticketing.",
              },
              {
                title: "Marine and Maritime Professionals",
                body:
                  "Join us and influence the design, build, or operation of a beautiful futuristic zero-emission fast-ferry!",
              },
              {
                title: "Techies, Engineers, Students and Academics",
                body:
                  "We know that research today builds the products of tomorrow. Do you research zero-emission tech, fuel, or maritime?",
              },
              {
                title: "Angel Investors, VCs, Corporate Finance",
                body:
                  "Curious or committed to making pollution elimination financially appealing? Please contact us.",
              },
              {
                title: "Councillors, MSs, MSPs, MPs and MEPs",
                body:
                  "Our innovative marine transport hub could drive local economic growth—how might this benefit your constituents?",
              },
              {
                title: "Philanthropists, Charities and NGOs",
                body:
                  "A convergence of ideas and technology will drive social capital we hope to export globally. Your involvement matters.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-6"
              >
                <h4 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-gray-700 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* WHY YOUR VOICE COUNTS */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">Why Your Voice Counts</h3>
        <p className="text-gray-700 leading-relaxed">
          This isn’t just our project—it’s yours too. Your input will shape the future with affordable ticket pricing,
          emission-free, sustainable and fully integrated ferry travel across the Swansea region and beyond. Together we
          can make a lasting impact on the environment and the local economy.
        </p>
      </section>

      {/* ======================================= */}
      {/* READY TO MAKE A DIFFERENCE + FORM #2 */}
      {/* ======================================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900">Ready to Make a Difference?</h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          Be part of this exciting journey towards a cleaner, greener Bristol Channel.
        </p>

        <div className="mt-6 bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-6 md:p-10">
          <VoteForm compact />
        </div>
      </section>

      {/* ======================================= */}
      {/* NEWSLETTER SIGNUP */}
      {/* ======================================= */}
      <section className="w-full bg-gradient-to-b from-blue-100/50 to-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-extrabold text-blue-900">
            Stay Connected! Sign up for our Newsletter
          </h3>
          <p className="text-sm text-gray-700 mt-2">Don’t miss out, be the first to know</p>

          <form
            onSubmit={handleNewsletter}
            className="mt-6 grid md:grid-cols-[1fr_auto] gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl bg-blue-900 text-white font-semibold px-6 py-3 hover:bg-blue-800 transition"
            >
              {submitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {newsletterMsg && (
            <p
              className={`mt-4 text-sm ${
                newsletterMsg.startsWith("✅")
                  ? "text-green-700"
                  : newsletterMsg.startsWith("⚠️")
                  ? "text-orange-600"
                  : "text-red-600"
              }`}
            >
              {newsletterMsg}
            </p>
          )}
        </div>
      </section>
      <CookieBanner/>
    </main>
  );
}
