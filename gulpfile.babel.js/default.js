import gulp from 'gulp';
import watch from './watch';

const develop = () => {
	gulp.start('develop');
};

gulp.task('develop', [
	'templates',
	'styles',
	'webpack',
	'html',
	'fonts',
	'extras',
	'serve'
], watch);

gulp.task('default', ['clean'], develop);
