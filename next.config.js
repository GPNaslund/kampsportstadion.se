/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 200,
      }
    };
    return config;
  },
}

module.exports = nextConfig
