const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/example/main.js'),

  output: {
    path: path.resolve(__dirname, '../example'),
    filename: 'bundle.js',
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/example/index.html")
    }),
    new VueLoaderPlugin()
  ],

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },

  devServer: {
    // historyApiFallback: true,
    port: 9000,
    // compress: false,   //打包
    stats: "errors-only"
  }
}