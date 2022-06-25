"use strict";

const path = require("path");
const { entryConfig } = require("./tools");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: entryConfig(),
  output: {
    filename: (chunkData) => {
      let filePath = chunkData.chunk.name;
      const filename = filePath.replace(".tsx", ".js");
      return filename;
    },
    path: path.resolve(__dirname, "../lib"),
    // libraryTarget: "commonjs",
    clean: true,
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false, //不将注释提取到单独的文件中
      }),
    ],
  },
};
