const path = require('path');

const clientConfig = {
  entry: "./src/client.tsx",
  output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
      extensions: [".ts", ".tsx"]
  },

  module: {
      rules: [
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      ]
  },
};

module.exports = clientConfig;