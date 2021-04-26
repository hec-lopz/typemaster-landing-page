const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "assets/static/images/[name].[hash][ext]",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.ttf$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
    }),
  ],
};
