const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    devServer: {
        inline: true,
        hot: true,
    },
    entry: [
        'babel-polyfill',
        // 'webpack-hot-middleware/client',
        'webpack/hot/dev-server',
        './index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.json', '.js', '.jsx'],
        mainFields: ['jsnext:main', 'main'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.json$/,
                loader: 'json',
                include: [
                    path.join(__dirname, 'src'),
                ]
            },
        ]
    },
    target: 'web', // Make web variables accessible to webpack, e.g. window
    stats: false, // Don't show stats in the console
    progress: true,
};
