const autoprefixer = require('autoprefixer');
const lost = require('lost');
const calc = require('postcss-calc');
const pxtorem = require('postcss-pxtorem');
const lh = require('postcss-lh');
const typography = require('postcss-typography');

module.exports = {
	plugins: [
		typography({
			googleFonts: [{
				name: 'EB Garamond',
				styles: [
					'400'
				]
			}, {
				name: 'Quicksand',
				styles: [
					'400'
				]
			}],
			headerFontFamily: ['Quicksand', 'sans-serif'],
			bodyFontFamily: ['EB Garamond', 'serif'],
			baseFontSize: '18px',
			headerWeight: 400,
			bodyWeight: 400,
			scaleRatio: 2.333
		}),
		lh(),
		lost(),
		calc(),
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}),
		pxtorem()
	]
};
