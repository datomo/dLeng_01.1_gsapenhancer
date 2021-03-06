var webpack = require('webpack');
var path = require('path');
const ExtractTextWebpack = require("extract-text-webpack-plugin");
var CompressionPlugin = require('compression-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var SCSS_DIR = path.resolve(__dirname, 'src/client/app/styles/scss');

var IMG_DIR = path.resolve(__dirname, 'src/client/public/compImg');

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
			    test: /\.(jpg|png|gif)$/i,
			    include : APP_DIR, 
			    loader: 
			    'file-loader?name=/compImg/[hash].[ext]!image-maxsize-webpack-loader?max-width=400!image-webpack-loader?progressive=true'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({ // <-- key to reducing React's size
	      'process.env': {
	        'NODE_ENV': JSON.stringify('production')
	      }
	    }), 
	    new webpack.optimize.UglifyJsPlugin(), //minify everything
	    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks 

	  	new ExtractTextWebpack({
	    	filename: 'bundle.css'
  		}),

  		new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    	

	]
};

module.exports = config;