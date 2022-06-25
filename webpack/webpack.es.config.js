"use strict";

const path = require("path");

module.exports = {
  output: {
    filename: (chunkData) => {
      let filePath = chunkData.chunk.name;
      const filename = filePath.replace(".tsx", ".js");
      return filename;
    },
    path: path.resolve(__dirname, "../es"),
    libraryTarget: "module",
    clean: true,
  },
  experiments: { outputModule: true },
};
