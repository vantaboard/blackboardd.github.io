/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
