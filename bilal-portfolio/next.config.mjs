/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // GitHub Pages project sites need a basePath. Set NEXT_PUBLIC_BASE_PATH
  // to the repository name in the GitHub Actions workflow if needed.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};
export default nextConfig;
