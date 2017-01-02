/* eslint-env node */
import fs from 'fs';
import path from 'path';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import {filter, merge, range, union} from 'lodash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import OfflinePlugin from 'offline-plugin';

import {trimExtension} from './lib';
import packageJson from './package';
import paths from './config/paths';

const pages = fs.readdirSync(paths.pages.dir).map(page => page === 'index.jsx' ? '/' : `/${page}`);
const documentation = fs.readdirSync(paths.documentation.dir).map(p => `/documentation/${trimExtension(p)}`);
const blog = fs.readdirSync(paths.blog.dir).map(p => `/blog/${trimExtension(p)}`);
const blogPages = range(1, Math.ceil(blog.length / 5)).map(i => `/client/${i}`);

Reflect.apply(Array.prototype.push, pages, [...blogPages, ...blog, ...documentation]);

export default getConfig();

function getConfig() {
	let config = getCommonConfig();

	if (process.env.NODE_ENV === 'production') {
		config = merge(config, getProdConfig());
	} else {
		config = merge(config, getDevConfig());
	}

	return config;
}

function getCommonConfig() {
	return {
		context: path.resolve(paths.bundle.src),
		entry: {
			commons: 'webpack-dev-server/client?http://localhost:3000',
			main: './index.jsx',
			critical: './critical.jsx'
		},
		output: {
			filename: '[name].js',
			chunkFilename: '[name].chunk.js',
			path: path.resolve(paths.bundle.dest),
			publicPath: '/',
			libraryTarget: 'umd'
		},
		stats: {
			colors: true,
			reasons: true
		},
		module: {
			rules: [
				getJavaScriptLoader(),
				getReactIconLoader(),
				getStyleLoader(),
				getHtmlLoader(),
				getAssetLoader(),
				getMarkdownLoader(),
				getFileLoader()
			]
		}
	};
}

function getDevConfig() {
	return {
		devtool: 'cheap-module-eval-source-map',
		plugins: union(getCommonPlugins(), [
			new BrowserSyncPlugin({
				host: 'localhost',
				port: '3000',
				proxy: 'http://localhost:3100/'
			}, {
				reload: false
			}),
			new webpack.NamedModulesPlugin(),
			new WebpackNotifierPlugin()
		])
	};
}

function getProdConfig() {
	return {
		plugins: union(getCommonPlugins(), [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.optimize.AggressiveMergingPlugin(),
			new LodashModuleReplacementPlugin(),
			new webpack.NormalModuleReplacementPlugin(
				/^\.\.\/\.\.\/routes\/index$/,
				'../../routes/async'
			)
		])
	};
}

function getJavaScriptLoader() {
	return {
		test: /\.jsx?$/,
		use: ['babel-loader'], // , 'xo'],
		exclude: /node_modules/
	};
}

function getReactIconLoader() {
	return {
		test: /react-icons\/(.)*(.js)$/,
		use: [{
			loader: 'babel-loader',
			options: {
				presets: ['es2015', 'react']
			}
		}]
	};
}

function getHtmlLoader() {
	return {
		test: /\.html$/,
		use: ['html-loader'],
		exclude: /node_modules/
	};
}

function getMarkdownLoader() {
	return {
		test: /\.md$/,
		use: ['raw-loader'],
		exclude: /node_modules/
	};
}

function getStyleLoader() {
	return {
		test: /\.scss$/,
		loader: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: [{
				loader: 'css-loader',
				options: 'localIdentName=[name]__[local]___[hash:base64:5]'
			}, {
				loader: 'postcss-loader'
			}, {
				loader: 'sass-loader'
			}]
		}),
		exclude: /node_modules/
	};
}

function getAssetLoader() {
	return {
		test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
		exclude: /favicon\.png$/,
		use: [{
			loader: 'url-loader',
			options: {
				limit: 10000
			}
		}]
	};
}

function getFileLoader() {
	return {
		test: /\.(mpeg|mp4|webm|ogv)(\?.+)?$/,
		exclude: /node_modules/,
		use: ['file-loader']
	};
}

function getCommonPlugins() {
	return filter([
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': process.env.NODE_ENV ? JSON.stringify(process.env.NODE_ENV) : JSON.stringify('development'),
			VERSION: JSON.stringify(packageJson.version)
		}),
		new webpack.optimize.CommonsChunkPlugin({
			children: true,
			minChunks: 2,
			async: true
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		}),
		new StaticSiteGeneratorPlugin({
			paths: pages,
			globals: {
				window: {}
			}
		}),
		new OfflinePlugin({
			relativePaths: false,
			publicPath: '/',
			excludes: ['**/.*', '**/*.map', '**/*.mp4'],
			ServiceWorker: {
				events: true
			},
			caches: {
				main: [':rest:'],
				additional: ['*.chunk.js']
			},
			safeToUseOptionalCaches: true,
			AppCache: false
		})
	]);
}
