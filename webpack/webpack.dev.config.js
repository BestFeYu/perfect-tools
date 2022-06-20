"use strict";

const path = require("path");
const { entryConfig } = require("./tools");

module.exports = {
  mode: "development",
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
  //   watch: true,
  watchOptions: {
    //默认为空，不监听的文件或者文件夹，支持正则匹配
    ignored: /node_modules/,
    // liveReload: true,
    //监听到变化发生后会等300ms再去执行，默认300ms
    aggregateTimeout: 300,
    //判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，ms为单位下面意思是 每秒检查一次变动
    poll: 1000,
  },
  //   devServer: {
  //     hot: true,
  //     compress: true,
  //     writeToDisk: true,
  //     port: 8001,
  //   },
  // devtool: "cheap-module-eval-source-map",
};
