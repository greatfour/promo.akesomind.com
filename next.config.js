/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/promo.akesomind.com',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig