/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'site',
    images: {
      unoptimized: true,
    },
}

module.exports = nextConfig
