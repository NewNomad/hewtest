/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    MYSQL_HOST: "127.0.0.1",

    //MYSQL_DATABASE: "hew2023",        // 中尾専用
    //MYSQL_USER: "root",          // win・mac共通
    //MYSQL_PASSWORD: "root",      // 中尾専用(mac)
    //MYSQL_PORT: 8889             // 中尾専用(mac)

    MYSQL_DATABASE: "hew2023",  // 小松専用
    MYSQL_USER: "root",             // win・mac共通
    MYSQL_PASSWORD: "",             // 小松専用(win)
    MYSQL_PORT: 3306                // 小松専用(win)
  },
  webpack: {
    target: "node"
  },
}