"use strict";
const dev = require("./webpack/webpack.dev.config");
const production = require("./webpack/webpack.production.config");
const common = require("./webpack/webpack.common.config");
const es = require("./webpack/webpack.es.config");
const commonjs = require("./webpack/webpack.commonjs.config");
const path = require("path");

let config = {
  ...common,
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config = { ...config, ...dev };
  } else if (argv.mode === "production") {
    config = { ...config, ...production };
    if (env["es"]) {
      config = { ...config, ...es };
      config.module.rules[0].use = [
        {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.es.json"),
          },
        },
      ];
    }
    if (env["commonjs"]) {
      config = { ...config, ...commonjs };
      config.module.rules[0].use = [
        {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.cjs.json"),
          },
        },
      ];
    }
  }
  return config;
};
