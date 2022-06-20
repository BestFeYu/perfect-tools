"use strict";
const dev = require("./webpack/webpack.dev.config");
const production = require("./webpack/webpack.production.config");
const common = require("./webpack/webpack.common.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
  ...common,
};

module.exports = (env, argv) => {
  // console.log(argv.mode, 'mode', argv.target[0], 'target');
  if (argv.mode === "development") {
    config = { ...config, ...dev };
    // config.plugins = []
  } else if (argv.mode === "production") {
    config = { ...config, ...production };
    // console.log("config", config);
    // if (argv.target[0] === 'es') {

    // }
    // if (argv.target[0] === 'umd') {

    // }
  }
  console.log("config", config);
  return config;
};
