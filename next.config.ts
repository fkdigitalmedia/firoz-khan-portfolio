import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages (site is 100% static)
  output: "export",
  reactStrictMode: true,
  images: {
    // No image-optimization server on Pages; serve images as static assets.
    unoptimized: true,
  },
};

export default nextConfig;
