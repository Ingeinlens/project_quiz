const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    module: {
        rules: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                Object.assign({
                        fallback: {
                            loader: require.resolve('style-loader'),
                            options: {
                                hmr: false,
                            },
                        },
                        use: [{
                                loader: require.resolve('sass-loader'),
                                options: {
                                    importLoaders: 1,
                                    minimize: true,
                                    modules: true,
                                    localIdentName: '[name]__[local]--[hash:base64:5]'
                                },
                            },
                        ],
                    },
                )
            ),
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //Минифицирует файлы
    optimization: {
        minimizer: [
            new UglifyJsPlugin({}),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        }),
        new HTMLWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            template: './src/html/index.html'
        })
    ]
};