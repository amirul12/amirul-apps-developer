import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/amirul-apps-developer",
  assetPrefix: "/amirul-apps-developer/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
