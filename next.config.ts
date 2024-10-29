/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    config.cache = false
    return config
  }
}

export default config