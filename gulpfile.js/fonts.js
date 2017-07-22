const gulp = require('gulp');

const paths = require('../config/paths');

module.exports = () => gulp.src(paths.fonts.src)
	.pipe(gulp.dest(paths.fonts.dest));
