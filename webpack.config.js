var webpack = require('webpack');
var path = require('path');
const ExtractTextWebpack = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var SCSS_DIR = path.resolve(__dirname, 'src/client/app/styles/scss');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders :[
			{
				test:/\.scss?/,
				use: ExtractTextWebpack.extract({
          			use: "css-loader!sass-loader"
        		})
			},
			{
				test: /\.jsx?/,
				include : APP_DIR,
				loader : 'babel-loader',
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
			    test: /\.(jpe?g|png|gif)$/,
			    include : APP_DIR, 
			    loader: 'file-loader?name=/compImg/[hash].[ext]!img-loader' 
			    
			}
		]
	},
	plugins: [
	  	new ExtractTextWebpack({
	    	filename: 'bundle.css'
  		})
	]
};

module.exports = config;