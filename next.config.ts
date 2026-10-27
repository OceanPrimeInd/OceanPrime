import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Enable Turbopack cleanly and silence warning
  experimental: {},
  // No webpack config here — Turbopack will handle everything
};

export default nextConfig;
