/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  rewrites: async () => [
    {
      source: "/",
      destination: "/index.html",
    },
  ],
};

module.exports = nextConfig;