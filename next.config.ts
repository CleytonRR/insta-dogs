import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dogsapi.origamid.dev',
        port: '',
        pathname: '/wp-content/uploads/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'dogsapi.origamid.dev',
        port: '',
        pathname: '/files/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
