var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.join(basePath, 'dist'),
    // filename: '[chunkhash].[name].js',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      hash: true,
    })
  ],
};
