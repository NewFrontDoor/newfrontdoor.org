const util = require('gulp-util');
const del = require('del');
const paths = require('../config/paths');

module.exports = () => {
	const dest = paths.dest();
	util.log(`Cleaning ${dest}`);
	return del(dest);
};
