// 将该文件与base文件进行合并，需要用到一个包
// npm install webpack-merge@4.1.5 --save-dev
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  // 搭建本地服务器 npm install webpack-dev-server@2.9.3 --save-dev
  devServer: {
    contentBase: './dist', // 服务于哪个文件夹
    inline: true, // 是否需要实时监听
  },
})
