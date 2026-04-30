import type { NextConfig } from "next";
import { resolve } from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath removed - using custom domain quanfeng.co
  turbopack: {
    root: resolve(__dirname),
  },
  // Performance optimizations
  images: {
    unoptimized: true, // Static export requires unoptimized images
  },
  // Enable compression for smaller bundle
  compress: true,
  // Experimental features for performance
  experimental: {
    // Optimize package imports for faster builds
    optimizePackageImports: ["react", "react-dom"],
  },
  // Headers for caching and performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
