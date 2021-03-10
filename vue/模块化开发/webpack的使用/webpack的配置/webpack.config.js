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
}
