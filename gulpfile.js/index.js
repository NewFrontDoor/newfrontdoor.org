const gulp = require('gulp');

const clean = require('./clean');
const fonts = require('./fonts');
const lunr = require('./lunr');
const publish = require('./publish');
const watch = require('./watch');
const webpack = require('./webpack');

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
