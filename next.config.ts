import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Создавать папки с index.html вместо файлов .html
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
