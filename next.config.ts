import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/setting',
        destination: '/order',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
