import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

export default () => {
	const publisher = $.awspublish.create({
		region: 'ap-southeast-2',
		params: {
			Bucket: 'screenshots.vision100it.org'
		}
	});

	return gulp.src('screenshots/**/*')
		.pipe(publisher.publish())
		.pipe(publisher.sync())
		.pipe($.awspublish.reporter());
};
