import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/storage/**",
        search: "",
      },

      {
        protocol: "https",
        hostname: "backend.naufhalzakwan.my.id",
        pathname: "/storage/**",
        search: "",
      },

      {
        protocol: "https",
        hostname: "backend.naufhalzakwan.my.id",
        pathname: "/public/storage/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
