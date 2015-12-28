var webpack = require('webpack');

module.exports = function(options) {
  var cssLoaders = 'style-loader!css-loader!autoprefixer';
  var scssLoaders = cssLoaders + '!sass';
  var jsLoaders = ['jsx-loader', 'babel'];

  return {
    entry: "./../main.jsx",
    output: {
      path: __dirname,
      filename: "./../../../public/javascripts/app.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loaders: jsLoaders,
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.scss$/,
          loader: scssLoaders,
        },
        {
          test: /\.png$/,
          loader: 'file-loader?name=images/[name].[ext]',
        },
        {
          test: /\.svg$/,
          loader: 'raw',
        },
        {
          test: /\.gif$/,
          loader: 'url?limit=100000&mimetype=image/gif',
        },
        {
          test: /\.jpg$/,
          loader: 'file',
        },
        {
          test: /\.(mp3|ogg)$/i,
          loader: 'file?name=[path][name].[ext]?[hash]'
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/i,
          loader: 'file?name=[name].[ext]'
        },
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    modulesDirectories: ['node_modules']
  }
}();
