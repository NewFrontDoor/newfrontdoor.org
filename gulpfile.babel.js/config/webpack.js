/* eslint-env node */
import _ from 'lodash';
import autoprefixer from 'autoprefixer';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import lost from 'lost';
import path from 'path';
import pxtorem from 'postcss-pxtorem';
import vr from 'postcss-vertical-rhythm';
import colorblind from 'postcss-colorblind';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

import paths from './paths';
import packageJson from '../../package.json';

const staticPaths = [
	'/',
	'/client/',
	'/support/',
	'/feature/',
	'/template',
	'/documentation/',
	'/status/',
	'/control/',
	'/about',
	'/contact'
];

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
			main: ['./js/index.jsx']
		},
		output: {
			filename: 'index.js',
			path: path.resolve(paths.bundle.dest),
			publicPath: '/',
			libraryTarget: 'umd'
		},
		stats: {
			colors: true,
			reasons: true
		},
		resolve: {
			extensions: ['', '.js', '.jsx', '.scss']
		},
		postcss: getPostCss(),
		remarkable: {
			html: true,
			linkify: true,
			typographer: true
		}
	};
}

function getDevConfig() {
	return {
		debug: true,
		devtool: 'eval',
		module: {
			loaders: [
				getJavaScriptLoader(),
				getStyleLoader(),
				getHtmlLoader(),
				getAssetLoader(),
				getJSXLoader(),
				getMarkdownLoader()
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
			new StaticSiteGeneratorPlugin('main', staticPaths, {})
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
				getMarkdownLoader()
			]
		},
		plugins: _.union(getCommonPlugins(), [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.AggressiveMergingPlugin(),
			new ExtractTextPlugin('[name].min.css', {
				allChunks: true
			}),
			new StaticSiteGeneratorPlugin('main', staticPaths, {})
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
		loader: 'html?attrs=link:href',
		exclude: /node_modules/
	};
}

function getMarkdownLoader() {
	return {
		test: /\.md$/,
		loaders: ['html', 'remarkable'],
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

function getPostCss() {
	return [
		vr(),
		lost(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
		pxtorem(),
		// colorblind({
		//	method: // One of the following 'protanomaly', 'protanopia', 'deuteranomaly', 'deuteranopia', 'tritanomaly', 'tritanopia', 'achromatomaly', 'achromatopsia'
		// })
	];
}

function getCommonPlugins() {
	return _.filter([
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'VERSION': JSON.stringify(packageJson.version)
		}),
		new WebpackNotifierPlugin()
	]);
}
