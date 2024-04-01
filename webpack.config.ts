require('ts-node/register');


import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
// import NodePolyfillPlugin from 'node-polyfill-webpack-plugin'

const config: webpack.Configuration = {
    mode: 'development',
    target: 'node',
    // entry: {
    //     'app': [
    //         'webpack-hot-middleware/client',
    //         './server/index'
    //     ],
    // },
    entry: {
        'app': './server/index',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/js'),
        publicPath: '/js/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {

        }
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
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new NodePolyfillPlugin()
    ]
};

export default config;
