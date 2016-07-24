import gulp from 'gulp';
import through from 'through2';
import lunr from 'lunr';
import removeMarkdown from 'remove-markdown';
import gulpLoadPlugins from 'gulp-load-plugins';

import {paths} from '../config';
import {trimExtension, handleError} from '../lib';

const $ = gulpLoadPlugins();

function lunrConfig() {
	this.ref('id');
	this.field('title', {
		boost: 10
	});
	this.field('tags', {
		boost: 100
	});
	this.field('author');
	this.field('body');
}

export default () => {
	return gulp.src([paths.blog.src, paths.documentation.src], {
		base: paths.src()
	})
	.pipe($.plumber(handleError))
	.pipe($.frontMatter({
		remove: true
	}))
	.pipe(lunrGulp(lunrConfig))
	.pipe(gulp.dest(paths.lunr.dest));
};

function lunrGulp(config) {
	const index = lunr(config);
	const items = [];

	function transform(file, enc, cb) {
		const frontMatter = file.frontMatter;
		const id = trimExtension(file.relative);
		const title = frontMatter.title;
		const body = removeMarkdown(file.contents.toString());
		const author = frontMatter.author || {};

		index.add({
			id,
			title,
			body,
			author: author.name,
			tags: (frontMatter.tags || []).join(' ')
		});

		items.push({
			id,
			title
		});

		cb();
	}

	function flush(cb) {
		this.push(new $.util.File({
			path: 'search-index.json',
			contents: new Buffer(JSON.stringify(index.toJSON()))
		}));
		this.push(new $.util.File({
			path: 'search-data.json',
			contents: new Buffer(JSON.stringify({
				items
			}))
		}));
		cb();
	}

	return through.obj(transform, flush);
}
