/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.vanityfair.com", "localhost", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
