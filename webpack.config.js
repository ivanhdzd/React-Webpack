const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [ './src/index.jsx' ],
    output: {
        path: path.resolve('docs'),
        filename: 'bundle.min.js'
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
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						}
					]
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
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development') // development | production
			}
		}),
		new HtmlWebpackPlugin({
		    template: './src/index.html',
		    filename: 'index.html',
			favicon: './src/favicon.ico'
		}),
		new ExtractTextPlugin('bundle.min.css'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			}
		})
    ]
};