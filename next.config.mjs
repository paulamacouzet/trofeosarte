/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/trofeosarte',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
