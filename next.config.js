/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // it should be false by default
};
const withImages = require("next-images");

module.exports = withImages();
module.exports = nextConfig;
