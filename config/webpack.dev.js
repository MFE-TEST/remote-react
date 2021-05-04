const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/'
        },
    },
    output: {
        publicPath: "http://localhost:8081/",
    },
};

module.exports = merge(commonConfig, devConfig);
