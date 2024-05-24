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
  images: { // Add the 'images' configuration inside 'nextConfig'
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'www.webcoderskull.com',
        port: '',
        // pathname: '/account123/**', // Uncomment if needed
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // Correct the hostname
        port: '',
        // pathname: '/account123/**', // Uncomment if needed
      },
    ],
  },
};


module.exports = nextConfig;