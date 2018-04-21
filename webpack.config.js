var path = require("path");

var config = {
    mode: 'production',
    entry: "./app/assets/scripts/index.jsx",
    output: {
        path: path.resolve(__dirname, "./app/temp"),
        filename: "index.js"
//        publicPath: "/app/"  -- I dont know what this does
    },
  /*  devServer: {
    contentBase: './app/temp'
  },  */
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};
module.exports = config;
