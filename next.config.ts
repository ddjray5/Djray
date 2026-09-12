import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/training",
        destination: "https" + "://" + "goldendjcourse.vercel.app",
      },
    ];
  },
};

export default nextConfig;
