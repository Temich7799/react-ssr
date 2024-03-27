const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        'app': './app/index',
        'src': './src/index',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/js')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 9000,
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
};

