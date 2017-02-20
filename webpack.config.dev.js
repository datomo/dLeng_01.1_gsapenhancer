var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextWebpack = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var SCSS_DIR = path.resolve(__dirname, 'src/client/app/styles/scss');

var IMG_DIR = path.resolve(__dirname, 'src/client/public/compImg');

var config = {
	entry: [
	'react-hot-loader/patch',
	'webpack-hot-middleware/client',
	APP_DIR + '/index.jsx'
	],
	output: {
		path: BUILD_DIR,
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	module: {
		loaders :[
			{
				test:/\.scss?/,
				include: SCSS_DIR,
				use: ExtractTextWebpack.extract({
          			use: "css-loader!sass-loader"
        		})
			},
			{
				test: /\.jsx?/,
				include : APP_DIR,
				loaders : ['babel-loader'],
			},
			{
				test: /\.svg$/,
				include : APP_DIR,
				loaders: [ 'babel-loader',
    				{
		      			loader: 'react-svg-loader',
		      			query: {
		        			svgo: {
		          				plugins: [{removeTitle: false}],
		          				floatPrecision: 2
		        			}
		      			}
		    		}
    			]						
			},
			{
			    test: /\.(jpg|png|gif)$/i,
			    include : APP_DIR, 
			    loader: 
			    'file-loader?name=/compImg/[hash].[ext]!image-maxsize-webpack-loader?max-width=800!image-webpack-loader?progressive=true'
			}
		]
	},
	devServer: {
	    contentBase: "./src/client",
	  	historyApiFallback: true,
	   	hot: true,
	   	stats: { colors: true}
	},
	plugins: [
	  	new ExtractTextWebpack({
	    	filename: 'bundle.css'
  		}),
  		new webpack.HotModuleReplacementPlugin(),

  		new webpack.NamedModulesPlugin(),
	    // prints more readable module names in the browser console on HMR updates

	    new webpack.NoEmitOnErrorsPlugin(),
	    // do not emit compiled assets that include errors
	]
};

module.exports = config;