import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "goldendjcourse.vercel.app" }],
        destination: "/training",
      },
    ];
  },
};

export default nextConfig;
