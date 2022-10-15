
 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 const prodConfig = {
   entry: {
     app: './src/index.js',
   },
   mode: "production",
   devtool: 'source-map',
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       template: "./public/index.html",
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };


 module.exports = merge(common, prodConfig);