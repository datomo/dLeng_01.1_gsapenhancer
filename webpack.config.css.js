const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

var SCSS_DIR = path.resolve(__dirname, 'src/client/app/styles/scss');
var CSS_DIR = path.resolve(__dirname, 'src/client/css/styles');

var config = {
	entry: SCSS_DIR + '/main.scss',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.css'
	},
	module: {
		loaders :[
			{
				test:/\.scss?/,
				include : SCSS_DIR,
				use: ExtractTextPlugin.extract({
          			loader: "css-loader!sass-loader"
        		})
			}
		]
	},
	plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};

module.exports = config;