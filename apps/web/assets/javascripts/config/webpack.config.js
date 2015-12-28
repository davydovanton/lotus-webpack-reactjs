var webpack = require('webpack');

module.exports = function(options) {
  var cssLoaders = 'style!css!autoprefixer';
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
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    modulesDirectories: ['node_modules']
  }
}();
