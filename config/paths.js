const path = require('path');

const dirPath = (...paths) => {
	const params = ['./'];
	params.push(...paths);
	return path.join(...params);
};

const src = p => dirPath('/src/', p || '');

const dest = p => dirPath('/dest/', p || '');

module.exports = {
	src,
	dest,
	public: dirPath('public'),
	bundle: {
		src: src(),
		dest: dest()
	},
	content: {
		dir: src('content'),
		src: src('content/**/*.md')
	},
	pages: {
		dir: src('pages')
	},
	documentation: {
		dir: src('documentation'),
		src: src('documentation/**/*')
	},
	blog: {
		dir: src('blog'),
		src: src('blog/**/*')
	},
	template: {
		src: src('index.html')
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
		src: src('**/*.js'),
		dest: dest(),
		bundle: src('js')
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
