/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/trofeosarte',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // La raíz de trofeosarte.vercel.app (URL antigua indexada) manda a la dirección oficial.
      {
        source: '/',
        destination: 'https://rolandomacouzet.com/trofeosarte',
        permanent: true,
        basePath: false,
      },
      // robots.txt en la raíz del host interno redirige al archivo bajo el basePath.
      {
        source: '/robots.txt',
        destination: '/trofeosarte/robots.txt',
        permanent: false,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
