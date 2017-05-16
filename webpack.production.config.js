
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

// local css modules
loaders.push({
	test: /[\/\\]src[\/\\].*\.css/,
	exclude: /(node_modules|bower_components|public)/,
	loaders: [
    'style?sourceMap',
    'css?modules&importLoaders=1&localIdentName=[local]',
    'postcss',
    'sass'
	]
});

// local scss modules
loaders.push({
	test: /[\/\\]src[\/\\].*\.scss/,
	exclude: /(node_modules|bower_components|public)/,
  loaders: [
    'style?sourceMap',
    'css?modules&importLoaders=1&localIdentName=[local]',
    'postcss',
    'sass'
  ]
});
// global css files
// loaders.push({
// 	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
// 	loader: ExtractTextPlugin.extract('style', 'css')
// });

module.exports = {
	entry: [
		'./src/index.jsx'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'js/react-script.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: false,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		// new ExtractTextPlugin('css/style-react.css', {
		// 	allChunks: true
		// }),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
		//new webpack.optimize.DedupePlugin()
	]
};
