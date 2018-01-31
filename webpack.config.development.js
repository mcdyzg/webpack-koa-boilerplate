const path = require('path');
const webpack = require('webpack');
const _externals = require('externals-dependencies')

module.exports = {
    entry: {
        app: [
            // 如果polyfill放在这里，打包的时候将不会被external,必须在js里require才能有效external
            // 'babel-polyfill',
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js'
    },
    resolve: {
        extensions: [".js"]
    },
    target: 'node',
    // 移除掉所有绝对路径的引用，只保留以.开头的，也就是相对路径的引用
    // externals: /^(?![.])./,
    externals: _externals(),
    context: __dirname,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
    ]
}
