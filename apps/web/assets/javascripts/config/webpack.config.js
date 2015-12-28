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
          exclude: /node_modules/,
          loaders: jsLoaders,
        }
      ]
    },
    externals: {
      //don't bundle the 'react' npm package with our bundle.js
      //but get it from a global 'React' variable
      'react': 'React'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  }
}();
