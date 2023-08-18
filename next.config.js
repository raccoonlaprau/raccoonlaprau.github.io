/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'prod',
    images: {
      unoptimized: true,
    },
}

module.exports = nextConfig
