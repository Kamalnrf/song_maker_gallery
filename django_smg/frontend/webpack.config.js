const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
    ],
  },
  resolve: {
    alias: {
      Common: path.resolve(__dirname, "./src/components/common"),
      Styles$: path.resolve(__dirname, "./src/components/common/styles.jsx"),
      Actions: path.resolve(__dirname, "./src/actions"),
      Test: path.resolve(__dirname, "./src/test"),
    },
  },
  entry: "./src/index.jsx",
  output: {
    filename: "main_v2.1.2.js",
    path: path.resolve(__dirname, "static", "frontend", "webpack_output"),
  },
};
