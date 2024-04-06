/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*githubusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
    experimental: {
      serverActions: {
        allowedForwardedHosts: ['go.moklet.org'],
        allowedOrigins: ['https://go.moklet.org']
      },
    }
  },
};

export default nextConfig;
