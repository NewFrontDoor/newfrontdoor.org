import path from 'path';
import slash from 'slash';

export default function (file) {
	return slash(file.replace(path.extname(file), ''));
}
