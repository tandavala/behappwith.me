const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglyfyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']

            },
            {
                test: /\.(jpeg|ico|png|gif|svg)$/i,
                loader: 'file-loader?name=img/[name].[ext]'
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new UglyfyJSPlugin()
    ],
    devServer: {
        publicPath: '/',
        contentBase: './dist'
    }
};