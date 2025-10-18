// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  typescript: {
    // You have this. It ignores TypeScript errors during the build.
    ignoreBuildErrors: true,
  },
}

export default nextConfig
