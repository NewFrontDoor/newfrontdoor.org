import gulp from 'gulp';
import through from 'through';
import {File} from 'gulp-util';
import lunr from 'lunr';
import removeMarkdown from 'remove-markdown';
import gulpLoadPlugins from 'gulp-load-plugins';

import {paths} from './config';
import {trimExtension} from './lib';

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
		base: paths.src
	}).pipe($.frontMatter({
		remove: true
	}))
	.pipe(lunrGulp(lunrConfig))
	.pipe(gulp.dest(paths.lunr.dest));
};

function lunrGulp(config) {
	const index = lunr(config);
	const data = [];

	function add(file) {
		const frontMatter = file.frontMatter;
		const id = trimExtension(file.relative);
		const title = frontMatter.title;
		const body = removeMarkdown(file.contents.toString());
		const author = frontMatter.author || {};
		// const short = body.slice(0, 100).concat('...');

		index.add({
			id, title, body,
			author: author.name,
			tags: (frontMatter.tags || []).join(' ')
		});

		data.push({id, title});

		return;
	}

	function end() {
		this.emit('data', new File({
			path: 'search-index.json', contents: new Buffer(JSON.stringify(index.toJSON()))
		}));
		this.emit('data', new File({
			path: 'search-data.json', contents: new Buffer(JSON.stringify({
				items: data
			}))
		}));
		this.emit('end');
	}

	return through(add, end);
}
