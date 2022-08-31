const path = require('path');
const htmlPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './client/index.js',
  
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