import ghost from 'ghost';
import path from 'path';

const dirPath = (...paths) => {
	const params = ['./'];
	params.push(...paths);
	return path.join(...params);
};

export default () => {
	ghost({
		config: dirPath('../config.js')
	}).then(ghostServer => {
		ghostServer.start();
	});
};
