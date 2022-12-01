/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    MYSQL_HOST: "127.0.0.1",
    // MYSQL_DATABASE: "hew",
    MYSQL_DATABASE: "hue2023",
    MYSQL_USER: "root",
    // MYSQL_PASSWORD: "", // 小松専用
    MYSQL_PASSWORD: "root", // 中尾専用
    // MYSQL_PORT: 3306 // 小松専用
    MYSQL_PORT: 8889 // 中尾専用
  },
  webpack: {
    target: "node"
  },
}