import type { NextConfig } from "next";
import { resolve } from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/quanfeng-site",
  assetPrefix: "/quanfeng-site",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/quanfeng-site",
  },
  turbopack: {
    root: resolve(__dirname),
  },
};

export default nextConfig;
