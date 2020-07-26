const path = require("path");

module.exports = {
  watch: true,
  target: "node", // in order to ignore built-in modules like path, fs, etc.
  entry: path.resolve(__dirname, "assets") + "/js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        test: /\.js$/,
        include: [path.resolve(__dirname, "assets")],
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
        include: [path.resolve(__dirname, "assets")],
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.scss$/,
        include: [path.resolve(__dirname, "assets")],
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
};
