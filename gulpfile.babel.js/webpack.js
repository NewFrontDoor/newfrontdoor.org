import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import gulpLoadPlugins from 'gulp-load-plugins';

import config from '../webpack.config.babel';
import {compileLogger} from '../lib';

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

export default done => {
	if (process.env.NODE_ENV === 'production') {
		webpack(config, result(done));
	} else {
		new WebpackDevServer(webpack(config), {}).listen(3100, 'localhost', listen);
	}
};
