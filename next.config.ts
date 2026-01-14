import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false, // generate no-slash URLs
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;

