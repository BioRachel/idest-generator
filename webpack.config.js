var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "./app/temp"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015", "stage-2"]
        },
        test: /\.js$/,
        exclude: /[node_modules]/
      }
    ]
  }
}
