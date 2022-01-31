/** @type {import('next').NextConfig} */

import withImages from 'next-images';

const nextConfig = {
  ...withImages(),
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
