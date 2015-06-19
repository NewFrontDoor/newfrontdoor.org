import browserSync from 'browser-sync';
import {paths} from './config';

export default () => {
  browserSync({
    // proxy: 'http://localhost:2368',
    server: paths.dest,
    port: 3000,
    browser: ['google chrome']
  });
};
