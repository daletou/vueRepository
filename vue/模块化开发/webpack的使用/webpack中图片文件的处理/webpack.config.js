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
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         // 当加载的图片小于limit时，会将图片编译成base64的字符串形式
      //         // 当加载的图片大于limit时，需要使用file-loader模块进行加载，此时得把url-loader注释掉
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            // 自己定义图片导出后的路径及名称
            options: {
              name: 'img/[name].[hash:8].ext',
            },
          },
        ],
      },
      // npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
      // 将打包好的代码中ES6语法转化为ES5的语法
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, //exclude排除，这些东西不需要做转化
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
    ],
  },
}
