import gulp from 'gulp';

import paths from '../config/paths';

export default () => {
	gulp.watch(paths.style.watch, ['styles']);
	gulp.watch(paths.fonts.src, ['fonts']);
	gulp.watch(paths.html.src, ['html']);
};
