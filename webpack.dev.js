const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {

    devServer: {
        port: 3000,
        host: 'localhost'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: "./src/index.tpl.html"
        })
    ]
});