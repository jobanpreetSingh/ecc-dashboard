// next.config.mjs
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), '@opentelemetry/sdk-node'];
    }
    return config;
  }
};

export default nextConfig;