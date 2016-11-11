#!/usr/bin/env node
const nightmare = require('nightmare');
const PQueue = require('p-queue');
const {flatMap, map} = require('lodash/fp');
const buildRoutes = require('../lib/build-routes');

const browser = nightmare({
	frame: false,
	useContentSize: true,
	width: 1280,
	height: 1024
});

const screenshot = url => {
	console.log('url', url);
	return browser
		.goto(url)
		.wait(1000)
		.evaluate(() => {
			const rect = document.documentElement.getBoundingClientRect();
			return {
				x: Math.round(rect.left),
				y: Math.round(rect.top),
				width: Math.round(rect.width),
				height: Math.round(rect.height),
				scrollHeight: document.body.scrollHeight
			};
		})
		.then(({scrollHeight, width, height}) => {
			let scroll = 0;
			const all = [];

			while (scroll < scrollHeight) {
				console.log('scroll', scroll);

				all.push(browser
					.scrollTo(scroll, 0)
					.wait(1000)
					.screenshot(`screenshots/${url.replace(/.*?:\/\//g, '')}-${width}x${height}-${scroll}.png`));

				scroll += height;
			}

			return Promise.all(all).then(() => browser.end());
		});
};

const queue = new PQueue({concurrency: 1});

buildRoutes()
.then(flatMap(route => map(url => `${url}/${route}`)(['https://vision100it.org', 'https://vision100it.github.io'])))
.then(map(route => queue.add(() => screenshot(route))))
.then(result => {
	if (result) {
		console.log(result);
	}

	console.log('Test success');
})
.catch(err => {
	console.error('Test failed:', err);
	process.exit(1);
});
