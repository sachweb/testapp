/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/testapp', 
    assetPrefix: '/testapp/',
    typescript: {
        ignoreBuildErrors: true,
    }
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  

module.exports =  withBundleAnalyzer(nextConfig);
