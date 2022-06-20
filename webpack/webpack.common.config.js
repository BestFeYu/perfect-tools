"use strict";

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@examples": path.resolve(__dirname, "../examples"),
      "@components": path.resolve(__dirname, "../components"),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../components", "**/*.less"),
          to: (filePath) => {
            filePath.absoluteFilename = filePath.absoluteFilename.replace(
              "components",
              "lib"
            );
            return filePath.absoluteFilename;
          },
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: (chunkData) => {
        let filePath = chunkData.chunk.name;
        const filename = filePath.replace(".tsx", ".css");
        return filename;
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
};
