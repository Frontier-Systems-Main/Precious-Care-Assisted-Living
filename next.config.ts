import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
  ],
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
