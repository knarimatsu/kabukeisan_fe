/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    // i18n: {
    //     locales: ["ja", "en"],
    //     defaultLocale: "ja",
    // },
    output: "export",
};

module.exports = nextConfig;
