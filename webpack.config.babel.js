/* eslint-env node */
import 'babel-polyfill';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import autoprefixer from 'autoprefixer';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import lost from 'lost';
import calc from 'postcss-calc';
import pxtorem from 'postcss-pxtorem';
import lh from 'postcss-lh';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import OfflinePlugin from 'offline-plugin';

import {trimExtension} from './lib';
import packageJson from './package.json';
import {paths} from './config';

const staticPaths = [
	'/',
	'/about',
	'/client/',
	'/consultation',
	'/contact',
	'/control/',
	'/documentation/',
	'/elvanto',
	'/error',
	'/feature/',
	'/podcasting',
	'/registration',
	'/sparkleshare',
	'/status/',
	'/support/',
	'/training'
];

const documentation = fs.readdirSync(paths.documentation.dir).map(p => `/documentation/${trimExtension(p)}`);
const blog = fs.readdirSync(paths.blog.dir).map(p => `/blog/${trimExtension(p)}`);

Reflect.apply(Array.prototype.push, staticPaths, [...blog, ...documentation]);

export default getConfig();

function getConfig() {
	let config = getCommonConfig();

	if (process.env.NODE_ENV === 'production') {
		config = _.merge(config, getProdConfig());
	} else {
		config = _.merge(config, getDevConfig());
	}

	return config;
}

function getCommonConfig() {
	return {
		context: path.resolve(paths.bundle.src),
		entry: {
			main: './index.jsx',
			critical: './critical.jsx'
		},
		output: {
			filename: '[name].js',
			path: path.resolve(paths.bundle.dest),
			publicPath: '/',
			libraryTarget: 'umd'
		},
		stats: {
			colors: true,
			reasons: true
		},
		node: {
			fs: 'empty'
		},
		resolve: {
			extensions: ['', '.js', '.jsx', '.scss']
		},
		postcss: getPostCss()
	};
}

function getDevConfig() {
	return {
		debug: true,
		devtool: 'source-map',
		module: {
			loaders: [
				getJavaScriptLoader(),
				getStyleLoader(),
				getHtmlLoader(),
				getAssetLoader(),
				getJSXLoader(),
				getMarkdownLoader(),
				getFileLoader(),
				getJsonLoader()
			]
		},
		plugins: _.union(getCommonPlugins(), [
			new BrowserSyncPlugin({
				host: 'localhost',
				port: '3000',
				proxy: 'http://localhost:3100/'
			}, {
				reload: false
			}),
			new ExtractTextPlugin('[name].css', {
				allChunks: true
			}),
			new StaticSiteGeneratorPlugin('main', staticPaths, {}, {window: {}})
		])
	};
}

function getProdConfig() {
	return {
		debug: true,
		devtool: 'source-map',
		module: {
			loaders: [
				getJavaScriptLoader(),
				getStyleLoader(),
				getHtmlLoader(),
				getAssetLoader(),
				getJSXLoader(),
				getMarkdownLoader(),
				getFileLoader(),
				getJsonLoader()
			]
		},
		plugins: _.union(getCommonPlugins(), [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.AggressiveMergingPlugin(),
			new LodashModuleReplacementPlugin(),
			new ExtractTextPlugin('[name].css', {
				allChunks: true
			}),
			new StaticSiteGeneratorPlugin('main', staticPaths, {}, {window: {}})
		])
	};
}

function getJavaScriptLoader() {
	return {
		test: /\.js$/,
		loaders: ['babel', 'xo'],
		exclude: /node_modules/
	};
}

function getJsonLoader() {
	return {
		test: /\.json$/,
		loaders: ['json']
	};
}

function getJSXLoader() {
	return {
		test: /\.jsx$/,
		loaders: ['babel'],
		exclude: /node_modules/
	};
}

function getHtmlLoader() {
	return {
		test: /\.html$/,
		loaders: ['html'],
		exclude: /node_modules/
	};
}

function getMarkdownLoader() {
	return {
		test: /\.md$/,
		loaders: ['raw'],
		exclude: /node_modules/
	};
}

function getStyleLoader() {
	return {
		test: /\.scss$/,
		loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass'].join('!')),
		exclude: /node_modules/
	};
}

function getAssetLoader() {
	return {
		test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
		exclude: /favicon\.png$/,
		loader: 'url?limit=10000'
	};
}

function getFileLoader() {
	return {
		test: /\.(mpeg|mp4|webm|ogv)(\?.+)?$/,
		exclude: /node_modules/,
		loader: 'file'
	};
}

function getPostCss() {
	return [
		lh(),
		lost(),
		calc(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
		pxtorem()
	];
}

function getCommonPlugins() {
	return _.filter([
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'VERSION': JSON.stringify(packageJson.version)
		}),
		new StyleLintPlugin({
			syntax: 'scss',
			configFile: 'package.json',
			configOverrides: {
				rules: packageJson.stylelint.rules
			}
		}),
		new WebpackNotifierPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			// names: ["app", "subPageA"]
			children: true,
			async: true
		}),
		new OfflinePlugin({
			ServiceWorker: {
				output: '/sw.js'
			}
		})
	]);
}
