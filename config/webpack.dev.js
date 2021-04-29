const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

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
