import path from 'path';

const dirPath = (...paths) => {
	const params = ['./'];
	params.push(...paths);
	return path.join(...params);
};

const src = p => dirPath('/src/', p || '');

const dest = p => dirPath('/dest/', p || '');

export default {
	dest: dest(),
	bundle: {
		src: src(),
		dest: dest()
	},
	documentation: {
		dir: src('documentation'),
		src: src('documentation/**/*')
	},
	blog: {
		src: src('blogs/**/*')
	},
	style: {
		src: src('css/main.scss'),
		dest: dest(),
		watch: [
			src('/css/**/*.scss')
		],
		imports: [
			dirPath('node_modules')
		]
	},
	scripts: {
		src: src('js/**/*.js'),
		dest: dest(),
		bundle: src('js')
	},
	templates: {
		src: [
			src('/templates/**/*.hbs')
		],
		dest: dest()
	},
	extras: {
		src: src('/stuff/*'),
		dest: dest()
	},
	fonts: {
		src: [
			src('/fonts/*.{eot,svg,ttf,woff,otf}')
		],
		dest: dest('/assets/fonts')
	},
	html: {
		src: src('/**/*.html'),
		dest: dest(),
		watch: [
			src('**/*.html'),
			'./index.html'
		]
	},
	html2js: {
		src: src('/**/*.html'),
		dest: src('/js/')
	},
	lunr: {
		dest: src('/search/')
	}
};
