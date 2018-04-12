const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {

    devServer: {
        port: 3000,
        host: 'localhost',
        // proxy: {
        //     '/api': {
        //         target: 'https://perseus.tusvc.bcs.ru/api/',
        //         changeOrigin: true,
        //         pathRewrite: {'^/api': ''},
        //         agent: new HttpsProxyAgent('http://172.18.252.100:8080')
        //     }
        // }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: "./src/index.tpl.html"
        })
    ]
});