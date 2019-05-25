const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: [
        './src/components/App.jsx'
    ],
    module: {
        rules: [
          {
            test: /\.html/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true
                }
              }
            ]
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(sa|sc|c)ss$/,
            exclude: /node_modules/,
            use: [
               MiniCssExtractPlugin.loader,
               "css-loader",
               "sass-loader"
            ]
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: "file-loader?name=/src/assets/images/[name].[ext]"
          }
        ]
    },
    resolve: {      
        extensions: ['*', '.js', '.jsx', 'css', 'scss'],
        alias: {
          '@Components': path.resolve(__dirname, "../src/components"),
          '@Containers': path.resolve(__dirname, "../src/containers"),
          '@Utils': path.resolve(__dirname, "../src/utils")
        }, 
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['../dist']),
        new MiniCssExtractPlugin({
          filename: "style.css",
          chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true,
          minify: {
             minifyCSS: true,
             html5: true 
          }
        })
    ]
}