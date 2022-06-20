'use strict'
const dev = require('./webpack/webpack.dev.config')
const production = require('./webpack/webpack.production.config')
const common = require('./webpack/webpack.common.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    ...common,
}

module.exports = (env, argv) => {
    console.log(argv.mode);
    if (argv.mode === 'development') {
        config = { ...config, ...dev }
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: "./examples/public/index.html",
            }))
        console.log(config);
    } else if (argv.mode === 'production') {
        config = { ...config, ...production }
    }
    return config
}
