"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-xs bg-white/95 backdrop-blur-md border border-blue-100 rounded-2xl shadow-lg p-4 flex flex-col gap-3 animate-fadeIn">
      <p className="text-sm text-gray-700 leading-snug">
        🍪 We use cookies to improve your browsing experience and analyze site traffic. By clicking “Accept”, you consent to our use of cookies.{" "}
        <a href="/privacy-policy" className="underline text-blue-800 hover:text-blue-900">
          Learn more
        </a>
      </p>
      <button
        onClick={acceptCookies}
        className="self-end bg-blue-900 text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-800 transition"
      >
        Accept
      </button>
    </div>
  );
}
