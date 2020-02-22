const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const paths = require('../config/paths');

const $ = gulpLoadPlugins();

function awsPublish(src) {
	const publisher = $.awspublish.create({
		region: 'ap-southeast-2',
		params: {
			Bucket: 'vision100it.org'
		}
	});

	const headers = {
		'Cache-Control': 'max-age=315360000, no-transform, public'
	};

	const cfSettings = {
		distribution: 'EZ6KL53Q1GMJF'
	};

	return src
		.pipe(publisher.publish(headers))
		.pipe(publisher.sync())
		.pipe($.cloudfrontInvalidateAwsPublish(cfSettings))
		.pipe(publisher.cache())
		.pipe($.awspublish.reporter());
}

const critical = () => {
	return awsPublish(gulp.src(paths.dest('critical.css')));
};

module.exports = () => {
	if ($.util.env.aws) {
		return awsPublish(gulp.src(paths.dest('**/*')));
	}

	return gulp.src(paths.dest('**/*'))
		.pipe($.ghPages({
			branch: 'master',
			remoteUrl: 'git@github.com:NewFrontDoor/Vision100IT.github.io.git'
		}));
};

module.exports.critical = critical;
