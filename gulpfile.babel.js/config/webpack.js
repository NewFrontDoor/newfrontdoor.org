import _ from 'lodash';
import path from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

import paths from './paths';
import packageJson from '../../package.json';

process.env.NODE_ENV = 'development';

export default () => {
	let config = getCommonConfig();

	switch (process.env.NODE_ENV) {
    case 'development':
      config = _.merge(config, getDevConfig());
      break;
    case 'production':
      config = _.merge(config, getProdConfig());
      break;
    case 'test':
      config = _.merge(config, getTestConfig());
      break;
    default:
      throw new Error(`NODE_ENV not equal to development, production, or test. It is equal to ${process.env.NODE_ENV}`);
  }
  return config;
};

function getCommonConfig() {
	return {
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

		resolve: {
			extensions: ['', '.js']
		}
	}
}

function getDevConfig() {
	return {
		debug: true,
		devtool: 'source-map',
		module: {
      loaders: [
        getJavaScriptLoader()
      ]
    },
		plugins: _.union(getCommonPlugins(), [
			new webpack.optimize.CommonsChunkPlugin({
				name: 'lib',
				filename: '[name].js'.replace(/\.js$/, '.js')
			}),
		])
	};
}

function getProdConfig() {
	return {
		output: {
			path: path.resolve(paths.scripts.dest),
			filename: '[name]-[hash].js'.replace(/\.js$/, '.min.js')
		},
		devtool: 'source-map',
		module: {
      loaders: [
        getJavaScriptLoader()
      ]
    },
		plugins: _.union(getCommonPlugins(), [
			new webpack.optimize.CommonsChunkPlugin({
				name: 'lib',
				filename: '[name]-[hash].js'.replace(/\.js$/, '.min.js')
			}),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.AggressiveMergingPlugin(),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
    ])
	}
}

function getTestConfig() {
	return _.merge({}, getDevConfig(), {});
}

function getJavaScriptLoader() {
  return {test: /\.js$/, loaders: ['babel', 'xo'], exclude: /node_modules/};
}

function getCommonPlugins() {
  return _.filter([
    new webpack.BannerPlugin(getBanner(process.env.NODE_ENV), {raw: true}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'VERSION': JSON.stringify(packageJson.version)
    }),
    process.env.CI ? undefined : new WebpackNotifierPlugin()
  ]);
}

function getBanner() {
	return `//! ${packageJson.name} version ${packageJson.version} built with ♥ by ${(packageJson.contributors || [packageJson.author]).join(', ')} (ó ì_í)=óò=(ì_í ò)\n`;
}
