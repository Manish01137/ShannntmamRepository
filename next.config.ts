import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    // Next 16.3 writes a Turbopack build cache that snapshots env var values
    // (including RESEND_API_KEY). Netlify's secrets scan finds the key there and
    // fails the deploy, so don't write the build cache at all.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
