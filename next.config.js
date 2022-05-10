/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["proxy.duckduckgo.com", "i.imgur.com"],
  },
};

module.exports = nextConfig;
