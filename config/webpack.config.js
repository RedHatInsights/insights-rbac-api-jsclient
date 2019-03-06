const resolve = require('path').resolve;

module.exports = {
  entry: resolve('./src/index.js'),
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }]
  },
  output: {
    filename: 'main.js',
    path: resolve('./dist'),
    library: '[name]',
    libraryTarget: 'umd',
  },
}
