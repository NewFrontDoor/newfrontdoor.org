const gulp = require('gulp');
const {reload} = require('browser-sync');

const paths = require('../config/paths');

module.exports = () => {
	gulp.watch(paths.style.watch, ['styles']);
	gulp.watch(paths.fonts.src, ['fonts']);
	gulp.watch(paths.html.src, ['html']).on('change', reload);
};
