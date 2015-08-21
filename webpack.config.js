var path = require('path');
var webpack = require('webpack');
var isDev = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
    test: /\.css?$/,
    loaders: ['style', 'css'],
    include: path.join(__dirname, 'styles')
  }]
  }
};

if (isDev) {
    module.exports.entry.push('webpack-dev-server/client?http://localhost:3000');
    module.exports.entry.push('webpack/hot/only-dev-server');
}