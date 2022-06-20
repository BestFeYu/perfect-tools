'use strict'

const path = require('path')

module.exports = {
    mode: 'development',
    entry: './examples/index.tsx',
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            '@examples': path.resolve(__dirname, '../examples'),
            '@components': path.resolve(__dirname, '../components'),
        }
    },
    output: {
        path: path.resolve(__dirname, './examples/dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './examples/public'),
        },
        compress: true,
        port: 8000,
    },
    // devtool: "cheap-module-eval-source-map",
}