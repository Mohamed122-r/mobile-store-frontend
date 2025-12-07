/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', 'via.placeholder.com'],
  },
  // ⚠️ في المستقبل: أضف إعدادات API routes هنا
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://your-backend-api.com/:path*',
      },
    ];
  },
}

module.exports = nextConfig
