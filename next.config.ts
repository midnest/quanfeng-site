import type { NextConfig } from "next";
import { resolve } from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath removed - using custom domain quanfeng.co
  turbopack: {
    root: resolve(__dirname),
  },
};

export default nextConfig;
