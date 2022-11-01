/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    MYSQL_HOST: "127.0.0.1",
    MYSQL_DATABASE: "dnpk_dnpk_oes",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "root", // 中尾専用
    MYSQL_PORT: 8889 // 中尾専用
  },
  // webpack: {
  //   target: "node"
  // },
  webpack: {
    target: "node"
  },
}