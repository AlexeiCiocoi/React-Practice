const merge = require('webpack-merge')
const webpack = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(webpack, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJSPlugin({
                sourceMap: true,
                cache: true,
                uglifyOptions: {
                    inline: false
                }
            })    
        ]
    }
})