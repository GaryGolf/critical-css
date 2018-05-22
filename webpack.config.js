const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const serverConfig = {
  mode: 'production',
  target: 'node',
  entry: './src/server.tsx',
  output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'server'),
  },
  resolve: {
      extensions: ['.js', '.ts', '.tsx']
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.css$/, use: [
        { loader: 'fake-style-loader' },
        { loader: 'css-loader', options: {  
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]__[hash:base64:5]'
          } 
        }]
      }
    ]
  }
};


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

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.css$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: {
          loader: 'css-loader',
          query: {
            modules: true,
            sourceMap: false,
            importLoaders: 1,
            localIdentName: '[local]__[hash:base64:5]'
          }
        }
      })}
    ]
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};

module.exports = [ serverConfig, clientConfig ];