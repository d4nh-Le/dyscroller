const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    }],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/app.html',
    filename: 'app.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public'}
      ],
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
  ]
};