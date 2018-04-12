const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: "./src/index.tpl.html",
            version: new GitRevisionPlugin().version()
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});