/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@tulx'],
  // Next.js 15 optimizations
  experimental: {
    // Enable React Compiler if needed
    // reactCompiler: true,
  },
};

export default nextConfig;

