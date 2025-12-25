import type { NextConfig } from "next";

const isProd =true

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath in production
  basePath: isProd ? '/amirul-apps-developer' : '',
  assetPrefix: isProd ? '/amirul-apps-developer' : '',
};

export default nextConfig;
