/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  rewrites: async () => [
    {
      source: "/",
      destination: "/index.html",
    },
    {
      source: "/about",
      destination: "/main2.html",
    },
    {
      source: "/developers",
      destination: "/main3.html",
    },
    {
      source: "/voting",
      destination: "/voting.html",
    },
  ],
};

module.exports = nextConfig;