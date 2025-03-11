/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    },
};

module.exports = nextConfig;
