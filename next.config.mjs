/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "alibaba.oneentry.cloud",
      },
    ],
  },
};

export default nextConfig;
