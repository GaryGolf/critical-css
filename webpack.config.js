const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientConfig = {
  mode: 'production',
  entry: './src/client.tsx',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
      extensions: ['.js', '.ts', '.tsx']
  },

  module: {
      rules: [
          { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};

module.exports = clientConfig;