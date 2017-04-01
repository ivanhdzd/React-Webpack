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
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
    },
    devServer: {
        contentBase: 'docs'
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};
