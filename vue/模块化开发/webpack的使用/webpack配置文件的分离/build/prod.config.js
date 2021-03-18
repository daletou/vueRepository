const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    // 开发的时候不要使用，打包才需要配置
    new UglifyjsWebpackPlugin(),
  ],
})
