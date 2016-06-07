import gulp from 'gulp';

import './default';

import clean from './clean';
import extras from './extras';
import fonts from './fonts';
import lunr from './lunr';
import publish from './publish';
import templates from './templates';
import watch from './watch';
import webpack from './webpack';

gulp.task('clean', clean);
gulp.task('extras', extras);
gulp.task('fonts', fonts);
gulp.task('lunr', lunr);
gulp.task('templates', templates);
gulp.task('watch', watch);
gulp.task('webpack', ['lunr'], webpack);

gulp.task('build', ['clean', 'webpack']);
gulp.task('publish', ['build'], publish);
