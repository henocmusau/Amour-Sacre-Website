import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: '127.0.0.1' },
      { hostname: "images.unsplash.com" },
    ]
  }
};

export default nextConfig;
