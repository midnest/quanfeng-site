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
      // Cache HTML pages for 1 hour with stale-while-revalidate
      {
        source: "/:path*.html",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
      // Cache extracted_docx_images
      {
        source: "/extracted_docx_images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Webpack optimizations for production
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
            },
            common: {
              minChunks: 2,
              chunks: "all",
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
