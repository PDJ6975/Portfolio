import type { NextConfig } from "next";

const repoName = "Portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // genera HTML estático para GitHub Pages
  trailingSlash: true, // asegura rutas correctas en Pages
  basePath: isProd && repoName ? `/${repoName}` : undefined,
  assetPrefix: isProd && repoName ? `/${repoName}/` : undefined,
  images: { unoptimized: true }, // evita domains al exportar
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
