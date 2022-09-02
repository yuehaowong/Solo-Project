const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {
  entry: './client/index.js',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './bundleFolder'),
      publicPath: '/',
    },
    proxy: {
      '/api':'http://localhost:3001',
    },
    compress: false,
    host: 'localhost',
    port: 8080,
    hot: true,
  },
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './bundleFolder')
  },

  plugins: [
    new htmlPlugin(
      {
        template:'./client/index.html'
    })
  ],
 mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      //add scss rules for css styling later
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      //this one is to serve the images
       {
        test: /\.(png|jpg)$/, 
        use: ['file-loader', 'url-loader?limit=8192'],
      }
    ]
  }
}