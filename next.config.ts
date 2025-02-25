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
        hostname: "testing.ayamjuraganmuda.org",
        pathname: "/storage/**",
        search: "",
      },

      {
        protocol: "https",
        hostname: "testing.ayamjuraganmuda.org",
        pathname: "/public/storage/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
