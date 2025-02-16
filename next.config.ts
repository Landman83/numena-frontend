import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ['@orderly.network/react', '@orderly.network/web3-onboard'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname)
    };
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
      fs: false,
    };
    config.module.rules.push({
      test: /\.m?js$/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false,
      },
    });
    // Add this new rule for ESM handling
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/@orderly\.network/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false
      }
    });
    return config;
  }
};

export default nextConfig;
