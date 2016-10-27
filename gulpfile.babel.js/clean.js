import util from 'gulp-util';
import del from 'del';
import paths from '../config/paths';

export default () => {
	const dest = paths.dest();
	util.log(`Cleaning ${dest}`);
	return del(dest);
};
