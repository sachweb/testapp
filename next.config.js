/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/testapp', // e.g. '/kavach-app'
    assetPrefix: '/testapp/',
    typescript: {
        ignoreBuildErrors: true,
    }
};

module.exports = nextConfig;
