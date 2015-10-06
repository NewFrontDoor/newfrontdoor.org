import _ from 'lodash';
import path from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

import paths from './paths';
import packageJson from '../../package.json';

const configFns = {
	development: getDevConfig,
	production: getProdConfig,
	test: getTestConfig
};

export default env => {
	const config = configFns[env]();
	return addCommonPlugins(config);
};

function getDevConfig() {
	const commonPlugin = new webpack.optimize.CommonsChunkPlugin('lib.js');

	const exclude = /node_modules/;
	const devConfig = {
		debug: true,
		devtool: 'source-map',

		context: path.resolve(paths.scripts.bundle),

		entry: {
			lib: ['angular'],
			app: './index.js'
		},

		output: {
			path: path.resolve(paths.scripts.dest),
			filename: '[name].js'
		},

		stats: {
			colors: true,
			reasons: true
		},

		plugins: [commonPlugin],

		resolve: {
			extensions: ['', '.js']
		},

		module: {
			loaders: [{
				test: /\.js$/,
				loaders: getLoaders(['ng-annotate', 'babel', 'eslint']),
				exclude
			}]
		},

		eslint: {
			emitError: false,
			failOnError: false,
			failOnWarning: false,
			quiet: true
		}
	};

	if (process.env.CI !== 'true') {
		devConfig.plugins.push(new WebpackNotifierPlugin());
	}

	return devConfig;
}

function getProdConfig(noUglify) {
	const commonPlugin = new webpack.optimize.CommonsChunkPlugin({
		name: 'lib',
		filename: '[name]-[hash].js'.replace(/\.js$/, '.min.js')
	});

	const prodConfig = _.merge({}, getDevConfig(), {
		output: {
			path: path.resolve(paths.scripts.dest),
			filename: '[name]-[hash].js'.replace(/\.js$/, '.min.js')
		},
		devtool: 'source-map',
		eslint: {
			emitError: true,
			failOnError: true
		}
	});

	prodConfig.plugins = [
		commonPlugin,
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
	];

	// allow getting rid of the UglifyJsPlugin
	// https://github.com/webpack/webpack/issues/1079
	if (!noUglify) {
		prodConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}));
	}
	return prodConfig;
}

function getTestConfig() {
	return _.merge({}, getDevConfig(), {});
}

function getLoaders(loaders) {
	return _.filter(loaders, loader => {
		return packageJson.devDependencies.hasOwnProperty(`${loader}-loader`);
	});
}

function addCommonPlugins(config) {
	config.plugins = config.plugins || [];

	config.plugins.unshift(new webpack.BannerPlugin(getBanner(), {
		raw: true
	}));
	// put the global variables before everything else
	config.plugins.unshift(new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		'VERSION': JSON.stringify(packageJson.version)
	}));

	return config;
}

function getBanner() {
	return `//! ${packageJson.name} version ${packageJson.version} built with ♥ by ${(packageJson.contributors || [packageJson.author]).join(', ')} (ó ì_í)=óò=(ì_í ò)\n`;
}
