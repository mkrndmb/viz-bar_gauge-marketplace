var path = require("path");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var webpackConfig = {
  mode: 'production',
  entry: {
    bargauge: "./bar-gauge/viz-gauge.js",
  },
  devServer: {
    contentBase: './dist',
    disableHostCheck: true,
  },
  output: {
    filename: "[name].js",
    path: __dirname,
    library: "[name]",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "../src"), "node_modules"]
  },
  plugins: [new UglifyJSPlugin()],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader"},
      { test: /\.css$/, loader: [ 'to-string-loader', 'css-loader' ] }
    ]
  },
  stats: {}
};

module.exports = webpackConfig;
