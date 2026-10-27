"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, FileText } from "lucide-react";
import { submitReportDownload } from "app/actions/submitReportDownload";
import CookieBanner from "app/components/CookieBanner";

const PDF_PATH = "/2026-10-27_OceanJet_Research_Report.pdf";

export default function FerryReportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("email", email.trim());

    const result = await submitReportDownload(formData);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }

    setSending(false);
  };

  return (
    <main className="w-full bg-white text-gray-900">

      {/* ======================================= */}
      {/* HERO */}
      {/* ======================================= */}
      <section className="w-full text-center py-24 md:py-36 px-6 bg-gradient-to-b from-white via-blue-50/50 to-blue-100/50">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide shadow-sm mb-6">
          <FileText size={14} />
          FERRY PROJECT — RESEARCH REPORT
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.15] text-blue-900 tracking-tight max-w-4xl mx-auto lg:max-w-none lg:w-max">
          <span className="lg:block">OceanJet Line – Public</span>{" "}
          <span className="lg:block">Consultation Research Report</span>
        </h1>
      </section>

      {/* ======================================= */}
      {/* SUMMARY + DOWNLOAD FORM */}
      {/* ======================================= */}
      <section className="w-full px-6 py-16">
        <div className="mx-auto w-full max-w-4xl lg:w-max lg:max-w-[calc(100vw-3rem)]">
          <div
            aria-hidden="true"
            className="hidden lg:block h-0 overflow-hidden invisible whitespace-nowrap text-6xl font-extrabold leading-[1.15] tracking-tight"
          >
            Consultation Research Report
          </div>
          <div className="lg:w-0 lg:min-w-full">

        <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
          <p>
            In March 2026, Ocean Prime Industries published the findings of its public consultation into demand
            for a zero-emission ferry service connecting Swansea with destinations across the Bristol Channel.
          </p>
          <p>
            The research was funded by the UK Shared Prosperity Fund, administered by Swansea Council. It
            received <strong className="font-bold text-gray-900">4,396 responses, with 97.7% supporting the proposed service.</strong>
          </p>
          <p>
            The report covers public feedback, the market opportunity, indicative fares from £15, potential
            economic benefits for participating communities, green hydrogen and the proposed development
            programme. It includes a foreword by Rob Stewart, Leader of the City and County of Swansea Council.
          </p>
        </div>

        <div className="my-10 border-t border-blue-100" />

        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight mb-5">
          October 2026 Update
        </h2>
        <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
          <p>
            We have published an updated report correcting factual and numerical errors and provide clarity on
            the research methodology, development assumptions and economic forecasts.
          </p>
          <p>
            <strong className="font-bold text-gray-900">The corrections do not change the principal research findings or overall conclusions.</strong>
          </p>
          <p>
            The updated report includes a schedule of corrections and clarifications for transparency.
          </p>
          <p>
            This version supersedes the original report published in March 2026.
          </p>
        </div>

        <div className="mt-10">
          {submitted ? (
            <DownloadSuccess />
          ) : (
            <DownloadForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              sending={sending}
              error={error}
              onSubmit={handleSubmit}
            />
          )}
        </div>

        <div className="my-10 border-t border-blue-100" />

        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight mb-5">
          Important Information
        </h2>
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            This report presents public consultation findings and preliminary assessments prepared by Ocean
            Prime Industries Ltd. Financial projections, passenger forecasts, environmental benefits, vessel
            specifications and development proposals are estimates based on assumptions available at the time
            of preparation. They remain subject to further research, technical validation, commercial
            agreements and regulatory approvals.
          </p>
          <p>
            Publication does not represent a commitment by Ocean Prime Industries Ltd, Swansea Council or any
            other organisation to deliver the proposed services.
          </p>
          <p>
            Supporting spreadsheets, proprietary financial models and other confidential working materials are
            held separately and are excluded from public publication.
          </p>
        </div>

          </div>
        </div>
      </section>

      <CookieBanner />
    </main>
  );
}

/* -------------------------------------------
   Download form (before submission)
--------------------------------------------*/
function DownloadForm({
  name,
  setName,
  email,
  setEmail,
  sending,
  error,
  onSubmit,
}: {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  sending: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-xl p-8 md:p-10">
      <h2 className="text-2xl font-extrabold text-blue-900 mb-3">
        Download the updated research report
      </h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        To download the updated report, please enter your name and email address below. We may also share
        occasional updates on the OceanJet Line project. You can unsubscribe at any time.
      </p>

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label htmlFor="report-name" className="block text-sm font-semibold text-blue-900 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="report-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            placeholder="Your full name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base focus:ring-2 focus:ring-blue-600 outline-none bg-white"
          />
        </div>

        <div>
          <label htmlFor="report-email" className="block text-sm font-semibold text-blue-900 mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="report-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base focus:ring-2 focus:ring-blue-600 outline-none bg-white"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 text-white font-semibold px-8 py-4 text-base hover:bg-blue-800 transition disabled:opacity-60"
        >
          {sending ? "Submitting..." : "Download the updated research report"} <ArrowRight size={18} />
        </button>
      </form>

      <p className="mt-6 text-xs text-gray-500">
        By downloading, you agree to our{" "}
        <Link href="/privacy-policy" className="underline hover:text-blue-700">
          Privacy Policy
        </Link>.
      </p>
    </div>
  );
}

/* -------------------------------------------
   Success state (after submission)
--------------------------------------------*/
function DownloadSuccess() {
  return (
    <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-xl p-8 md:p-10 text-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
        <Download size={28} className="text-blue-900" />
      </div>
      <h2 className="text-2xl font-extrabold text-blue-900 mb-3">Your report is ready</h2>
      <p className="text-gray-700 mb-8 max-w-md mx-auto">
        Thank you. Click below to download the updated OceanJet Line Public Consultation Research Report.
        The file will open in your browser or download directly, depending on your device.
      </p>
      <a
        href={PDF_PATH}
        download="2026-10-27_OceanJet_Research_Report.pdf"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-900 text-white font-semibold px-8 py-4 text-base hover:bg-blue-800 transition"
      >
        <Download size={18} /> Download the updated research report
      </a>
      <p className="mt-6 text-xs text-gray-500">
        You may receive occasional updates on the OceanJet Line project. You can unsubscribe at any time
        by contacting{" "}
        <a href="mailto:hello@oceanprime.co" className="underline">
          hello@oceanprime.co
        </a>.
      </p>
    </div>
  );
}
