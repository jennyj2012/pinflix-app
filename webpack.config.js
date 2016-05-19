var path = require("path");
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

//https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
var config = {
  'classPrefix': "modernizr-",
  'options':[
    'addTest',
    'atRule',
    'domPrefixes',
    'hasEvent',
    'html5shiv',
    'html5printshiv',
    'load',
    'mq',
    'prefixed',
    'prefixes',
    'prefixedCSS',
    'setClasses',
    'testAllProps',
    'testProp',
    'testStyles'
  ],
  'feature-detects':[
    'css/all',
    'css/gradients',
    'css/flexbox',
    'touchevents',
    'css/mediaqueries'
  ]
}
module.exports = {
  context: __dirname,
  entry: "./frontend/pinflix.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          plugins: ["transform-object-rest-spread", "transform-es2015-destructuring"],
          presets: ['es2015', 'react']
        }
      },
      {
      test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
      loader: 'imports?define=>false&this=>window'
    }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: [
   new ModernizrWebpackPlugin(config)
  ]
};
