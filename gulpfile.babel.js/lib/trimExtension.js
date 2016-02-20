import path from 'path';

export default function (file) {
	return file.replace(path.extname(file), '');
}
