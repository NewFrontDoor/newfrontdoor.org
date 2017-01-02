import webpack from 'webpack';
import browserSync from 'browser-sync';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config.babel';
import {compileLogger} from '../lib';

const result = done => (err, stats) => {
	compileLogger(err, stats);
	done();
};

export default done => {
	if (process.env.NODE_ENV === 'production') {
		webpack(config, result(done));
	} else {
		const bundler = webpack(config);
		browserSync({
			server: {
				baseDir: 'app',

				middleware: [
					webpackDevMiddleware(bundler, {
						publicPath: config.output.publicPath,
						stats: {colors: true}
					}),
					webpackHotMiddleware(bundler)
				]
			}
		});
	}
};
