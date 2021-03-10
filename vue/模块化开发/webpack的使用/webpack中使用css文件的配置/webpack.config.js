// 去node里去找path这个包
const path = require('path')

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    // path需要动态获取path，这个path必须是一个绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader：只负责将css文件进行加载
        // style-loader：负责将样式添加到DOM中
        // 使用多个loader时，是从右向左读取的
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
