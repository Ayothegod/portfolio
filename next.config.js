/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // module:{
  //   test: /\.(png|svg|jpg|gif|pdf)$/,
  //   use: [
  //     {
  //       loader: 'file-loader',
  //       options: {
  //         name: '[name].[ext]'
  //       }
  //     }
  //   ]
  // }
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.pdf$/,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //       } 
  //     ]
  //   })
  //   return config
  // },
}

module.exports = nextConfig

// 
