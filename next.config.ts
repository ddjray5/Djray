import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/training",
        destination: "https" + "://" + "goldendjcourse.vercel.app",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
