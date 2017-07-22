const path = require('path');
const slash = require('slash');

module.exports = function (file) {
	return slash(file.replace(path.extname(file), ''));
};
