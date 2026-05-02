import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/TalentAI",
  assetPrefix: "/TalentAI/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;