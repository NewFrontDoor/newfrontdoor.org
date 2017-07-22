const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const gulpLoadPlugins = require('gulp-load-plugins');

const config = require('../webpack.config');
const {compileLogger} = require('../lib');

const $ = gulpLoadPlugins();

const result = done => (err, stats) => {
	compileLogger(err, stats);
	done();
};

const listen = err => {
	if (err) {
		throw new $.util.PluginError('webpack-dev-server', err);
	}

	$.util.log('[webpack-dev-server]', 'http://localhost:3000');
};

module.exports = done => {
	if (process.env.NODE_ENV === 'production') {
		webpack(config, result(done));
	} else {
		new WebpackDevServer(webpack(config), {}).listen(3100, 'localhost', listen);
	}
};
