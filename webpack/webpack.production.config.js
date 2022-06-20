"use strict";

const path = require("path");
const { entryConfig } = require("./tools");

module.exports = {
  mode: "production",
  entry: entryConfig(),
  output: {
    filename: (chunkData) => {
      let filePath = chunkData.chunk.name;
      console.log("filePath", filePath);
      const filename = filePath.replace(".tsx", ".js");
      return filename;
    },
    path: path.resolve(__dirname, "../lib"),
    libraryTarget: "umd",
  },
};
