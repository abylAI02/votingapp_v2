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
  ],
};

module.exports = nextConfig;