const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [ './src/index.jsx' ],
    output: {
        path: path.resolve('docs'),
        filename: 'bundle.js'
    },
    watch: false,
    module: {
        rules: [
            {
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
            {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
            {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader'
			},
            {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader'
			},
            {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader'
			},
            {
				test: /\.(woff|woff2)$/,
				loader: 'file-loader'
			},
        ]
    },
    devServer: {
        contentBase: 'docs'
    },
    plugins: [
		new HtmlWebpackPlugin({
		    template: './src/index.html',
		    filename: 'index.html'
		}),
		new ExtractTextPlugin('styles.css')
    ]
};