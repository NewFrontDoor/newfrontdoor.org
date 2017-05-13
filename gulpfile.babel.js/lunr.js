import gulp from 'gulp';
import through from 'through2';
import map from 'through2-map';
import lunr from 'lunr';
import removeMarkdown from 'remove-markdown';
import gulpLoadPlugins from 'gulp-load-plugins';

import paths from '../config/paths';
import {trimExtension, handleError} from '../lib';

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

const mapFrontMatter = map.obj(file => {
	const frontMatter = file.frontMatter;
	const id = trimExtension(file.relative);
	const title = frontMatter.title;
	const body = removeMarkdown(file.contents.toString('utf8'));
	const author = frontMatter.author || {};

	return {
		id,
		title,
		body,
		author: author.name,
		tags: (frontMatter.tags || []).join(' ')
	};
});

export default () => {
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
