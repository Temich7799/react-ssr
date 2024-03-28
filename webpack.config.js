const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        'app': [
            'webpack-hot-middleware/client',
            './app/index'
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/js'),
        publicPath: '/js/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                terserOptions: {
                    mangle: {
                        keep_fnames: false,
                        keep_classnames: false
                    },
                    compress: {
                        unused: true,
                        hoist_vars: true
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};