const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const commonPaths = require('./common-paths')

const config = {
    entry: {
        // app: ['@css/app.scss', '@/main.jsx']
        app: ['@css/app.scss', '@/main.tsx']
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': commonPaths.rootPath,
            '@img': commonPaths.imagesPath,
            '@css': commonPaths.cssPath,
            '@components': commonPaths.componentsPath
        }
    },
    devServer:{
        noInfo: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    failOnWarning: true,
                    failOnerror: true
                },
                exclude: [/node_modules/]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.tsx?/,
                loader: 'tslint-loader',
                enforce: 'pre',
                exclude: [/node_modules/]
            },
            {
                test: /\.tsx?/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    /*
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    */
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanPlugin([path.resolve('..', path.basename(commonPaths.outputPath))], {
            allowExternal: true,
            dry: false,
            verbose: true,
            exclude: []
        }),
        new HtmlPlugin({
            filename: 'index.html',
            template: commonPaths.template,
            favicon: commonPaths.favicon,
            inject: true
        })
    ]
}

module.exports = config
