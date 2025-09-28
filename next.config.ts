import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/.well-known/farcaster.json",
        destination:
          "https://api.farcaster.xyz/miniapps/hosted-manifest/01998ea6-d266-b2d7-a776-f7f87e5e5815",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;