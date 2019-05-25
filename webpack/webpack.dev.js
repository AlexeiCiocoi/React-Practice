const merge = require('webpack-merge')
const webpack = require('./webpack.common.js')

module.exports = merge(webpack, {
    mode: 'development',
    devtool: 'source-map',
    watch: true,
    devServer: {
        //host: '0.0.0.0',
        compress: true,
        hot: true,
        historyApiFallback: true,
        //port: 9000
    }
})