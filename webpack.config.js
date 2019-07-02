var path = require('path');

module.exports = {
  mode: "development",
  context: path.resolve(__dirname + '/client/src/'),
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: __dirname + '/client/src',
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread'],
        }
      }
    ]
  }
};