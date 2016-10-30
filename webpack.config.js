/*
*   @author: puxiao
*   @describe: 开发/预发/正式通用配置文件
* */

var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    cache: true,
    target: 'electron',
    entry: {
        'index': './src/index.jsx'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/, 
                loader: ['babel'],
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.[woff|ttf|eot|svg]$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            },
            {
                loader: 'json-loader',
                test: /\.json?$/,
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new Clean(['./dist', ''])
    ]
}