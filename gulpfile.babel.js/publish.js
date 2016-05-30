import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {paths} from './config';

const $ = gulpLoadPlugins();

export default () => {
	return gulp.src(paths.dest('**/*'))
		.pipe($.ghPages({
			branch: 'master'
		}));
};
