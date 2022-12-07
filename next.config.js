/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    MYSQL_HOST: "127.0.0.1",

    MYSQL_DATABASE: "hew2023",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "",
    MYSQL_PORT: 3306

  },
  webpack: {
    target: "node"
  },
}