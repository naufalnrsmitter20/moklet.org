/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedForwardedHosts: ["go.moklet.org"],
      allowedOrigins: ["https://go.moklet.org"],
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
