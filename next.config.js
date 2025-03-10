/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    },
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
