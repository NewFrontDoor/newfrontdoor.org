const gulp = require('gulp');
const through = require('through2');
const map = require('through2-map');
const lunr = require('lunr');
const removeMarkdown = require('remove-markdown');
const gulpLoadPlugins = require('gulp-load-plugins');

const paths = require('../config/paths');
const {trimExtension, handleError} = require('../lib');

const $ = gulpLoadPlugins();

function lunrConfig(items) {
	return function () {
		this.ref('id');
		this.field('title');
		this.field('tags');
		this.field('author');
		this.field('body');

		items.forEach(item => {
			this.add(item);
		});
	};
}

const mapFrontMatter = map.obj(({frontMatter, contents, relative}) => {
	const {title} = frontMatter;
	const id = trimExtension(relative);
	const body = removeMarkdown(contents.toString('utf8'));
	const {author = {}} = frontMatter;

	return {
		id,
		title,
		body,
		author: author.name,
		tags: (frontMatter.tags || []).join(' ')
	};
});

module.exports = () => {
	return gulp.src([paths.blog.src, paths.documentation.src, paths.content.src], {
		base: paths.src()
	})
		.pipe($.plumber(handleError))
		.pipe($.frontMatter({
			remove: true
		}))
		.pipe(mapFrontMatter)
		.pipe(lunrGulp(lunrConfig))
		.pipe(gulp.dest(paths.lunr.dest));
};

function lunrGulp(config) {
	const items = [];

	function transform(file, enc, cb) {
		items.push(file);
		cb();
	}

	function flush(cb) {
		const index = lunr(config(items));

		this.push(new $.util.File({
			path: 'search-index.json',
			contents: Buffer.from(JSON.stringify(index), 'utf8')
		}));
		this.push(new $.util.File({
			path: 'search-data.json',
			contents: Buffer.from(JSON.stringify({
				items: items.map(({id, title}) => ({id, title}))
			}), 'utf8')
		}));
		cb();
	}

	return through.obj(transform, flush);
}
