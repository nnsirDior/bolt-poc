const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: false is not needed when .babelrc is present
  // but we leave it here for clarity
  swcMinify: false,
  images: {
    domains: ['images.unsplash.com', 'ui-avatars.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
}

module.exports = nextConfig
