const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		//contacts: './src/js/contacts.js', //новые js страницы, если нужны
		// about: './src/js/about.js', //новые js страницы, если нужны 
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;