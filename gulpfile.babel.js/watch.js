import gulp from 'gulp';
import {reload} from 'browser-sync';

import {paths} from './config';

export default () => {
  gulp.watch(paths.style.watch, ['styles']);
  gulp.watch(paths.fonts.src, ['fonts']);
  gulp.watch(paths.html.src, ['html']).on('change', reload);
};
