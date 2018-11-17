const commonPaths = require('./common-paths')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const ManifestPlugin = require('webpack-manifest-plugin')

let enableSourceMap = true

const config = {
    mode: 'production',
    devtool: enableSourceMap ? 'source-map' : false,
    output: {
        filename: '[hash].js',
        path: commonPaths.outputPath
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[hash].[ext]'
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            name: 'images/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[hash].[ext]'
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 2, sourceMap: enableSourceMap } },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')({
                                        'browsers': ['last 5 years']
                                    }),
                                    require('cssnano')()
                                ]
                            }
                        },
                        { loader: 'sass-loader' }
                    ]
                })
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: enableSourceMap
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }
        ),
        new ExtractTextPlugin('[hash].css'),
        // new ManifestPlugin(),
    ]
}

module.exports = config