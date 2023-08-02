/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}

module.exports = nextConfig
