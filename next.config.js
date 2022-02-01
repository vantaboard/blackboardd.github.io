/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images')

const nextConfig = {
  ...withImages(),
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
