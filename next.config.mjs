/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, 
    images: {
      unoptimized: true,
    },
    basePath: '/portfolio',
  };
  
  export default nextConfig;
  