import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
   basePath: '/resume-site',  // Add this
};

export default nextConfig;
