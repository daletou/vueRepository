// 去node里去找path这个包
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    // path需要动态获取path，这个path必须是一个绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/',
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
      // 遇到该问题：vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
      // npm install vue-loader@13.7.2 -D
      // npm install vue-template-compiler@2.6.12 -D
      // 解决vue-loader和vue-template-compiler版本问题
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  resolve: {
    // vue不同版本构建
    // alias别名
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    // 解决引用时省略扩展名的问题
    // extensions: ['.js', '.css', '.vue'],
  },
  plugins: [
    // 1、给打包文件bundle.js添加版权信息
    new webpack.BannerPlugin('最终版权归cobe所有'),
    // 2、打包时自动生成一个index.html文件（可以指定模板来生成）
    // npm install html-webpack-plugin@3.2.0 --save-dev
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    // 3、代码压缩丑化：npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
    // 开发的时候不要使用，打包才需要配置
    new UglifyjsWebpackPlugin(),
  ],
  // 搭建本地服务器 npm install webpack-dev-server@2.9.3 --save-dev
  devServer: {
    contentBase: './dist', // 服务于哪个文件夹
    inline: true, // 是否需要实时监听
  },
}
