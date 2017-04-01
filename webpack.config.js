const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [ './src/index.js' ],
    output: {
        path: path.resolve('docs'),
        filename: 'bundle.js'
    },
    watch: false,
    module: {
        rules: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: '/node_modules/' },
            { test: /\.css$/, loaders: [ 'style-loader', 'css-loader' ] },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.(woff|woff2)$/, loader: 'file-loader' },
        ]
    },
    devServer: {
        contentBase: 'docs'
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};
