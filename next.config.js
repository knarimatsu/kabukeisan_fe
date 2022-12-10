/** @type {import('next').NextConfig} */
const nextConfig = {
    target: "serverless",
    reactStrictMode: true,
    swcMinify: true,
    future: {
        webpack5: true,
    },
};

module.exports = nextConfig;
