const path = require('path')
const WorkerPlugin = require('worker-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

/**@type {import('webpack').Configuration}*/
module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // Note that the the web directory builds to the same directory as
    // the extension so we need to make sure tha the entry points for
    // both don't conflict with each other
    filename: 'web-view.js'
  },
  watchOptions: {
    ignored: './web/**'
  },
  devtool: 'nosources-source-map',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.json']
  },
  plugins: [new WorkerPlugin(), new ESLintPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, '../web'),
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(yaml|yml)$/,
        use: 'yaml-loader',
        type: 'json'
      }
    ]
  }
}
