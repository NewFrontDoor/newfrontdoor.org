import gulp from 'gulp';
import {
  reload
}
from 'browser-sync';
import autoprefixer from 'autoprefixer-core';
import gulpLoadPlugins from 'gulp-load-plugins';

import {
  paths
}
from './config';
import {
  handleError
}
from './lib';

const $ = gulpLoadPlugins();

export default () => {
  return gulp
    .src(paths.style.src)
    .pipe($.plumber(handleError))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: [
        paths.bootstrap.style
      ]
    }))
    // .pipe($.colorguard({
    //   threshold: 1
    // }))
    .pipe($.postcss([
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    ]))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(paths.style.dest))
    .pipe($.filter('**/*.css'))
    .pipe(reload({
      stream: true
    }));
};
