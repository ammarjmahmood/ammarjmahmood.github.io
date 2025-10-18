// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRUCIAL: Tells Next.js to create a static HTML build (into the 'out' directory)
  output: 'export', 
  
  // CRUCIAL: Ensures the root URL '/' resolves to 'index.html' on static servers
  trailingSlash: true, 

  typescript: {
    // You have this. It ignores TypeScript errors during the build.
    ignoreBuildErrors: true,
  },
  images: {
    // You have this. Disables Next.js Image Optimization features.
    unoptimized: true,
  },
}

export default nextConfig
