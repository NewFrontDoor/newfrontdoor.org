import gulp from 'gulp';

import clean from './clean';
import fonts from './fonts';
import lunr from './lunr';
import publish from './publish';
import watch from './watch';
import webpack from './webpack';

gulp.task('clean', clean);
gulp.task('fonts', fonts);
gulp.task('lunr', lunr);
gulp.task('watch', watch);
gulp.task('webpack', ['lunr'], webpack);

gulp.task('build', ['clean', 'webpack']);
gulp.task('publish', ['build'], publish);

const develop = () => {
	gulp.start('develop');
};

gulp.task('develop', [
	'webpack',
	'fonts',
	'lunr'
], watch);

gulp.task('default', ['clean'], develop);
