import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "/**",
      },
    ],
    unoptimized: false,
  },
  // Enable experimental features if needed
  experimental: {
    // optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
