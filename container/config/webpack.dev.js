const { merge } = require('webpack-merge');
const HtmlWelpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  // devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(commonConfig, devConfig);