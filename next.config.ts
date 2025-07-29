import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimize fonts for deployment
  optimizeFonts: true,
  // Ensure proper handling of static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Configure webpack for font handling
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[hash][ext][query]'
      }
    });
    return config;
  },
  // Enable experimental features for better font loading
  experimental: {
    optimizeCss: true,
  },
  // Headers for font caching
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
