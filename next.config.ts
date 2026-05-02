import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/TalentAI",
  assetPrefix: "/TalentAI/",
};

export default nextConfig;
