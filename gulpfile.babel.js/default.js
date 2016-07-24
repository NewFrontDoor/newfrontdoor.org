import gulp from 'gulp';
import watch from './watch';

const develop = () => {
	gulp.start('develop');
};

gulp.task('develop', [
	'webpack',
	'fonts',
	'lunr'
], watch);

gulp.task('default', ['clean'], develop);
