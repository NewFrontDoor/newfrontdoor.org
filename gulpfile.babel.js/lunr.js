import gulp from 'gulp';
import path from 'path';
import through from 'through';
import {File, PluginError} from 'gulp-util';
import lunr from 'lunr';
import gulpLoadPlugins from 'gulp-load-plugins';

import {paths} from './config';

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
	return gulp.src(paths.blog.src)
		.pipe($.frontMatter({
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
		const id = file.relative;
		const title = frontMatter.title;
		const body = file.contents.toString();
		const short = body.slice(0, 100).concat('...');

		index.add({
			id, title, body,
			author: frontMatter.author.name,
			tags: frontMatter.tags.join(' ')
		});

		data.push({id, title, short});

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
