var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  entry: {
    app: './js/students.js',
    welcome: './js/welcome.js',
    vendor: [
      'jquery',
    ],
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
      inject: false,
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'page1.html',
      template: 'page1.html',
      inject: false,
      hash: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      template: 'page2.html',
      inject: false,
      hash: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    /*
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.HashedModuleIdsPlugin(),
    */
  ],
};
