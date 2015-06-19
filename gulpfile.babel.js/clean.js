import util from 'gulp-util';
import del from 'del';
import {paths} from './config';

function clean(done) {
  util.log('Cleaning ' + paths.dest);
  del(paths.dest, done);
}

export default clean;
