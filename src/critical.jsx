import webfontloader from 'webfontloader';

if (typeof document !== 'undefined') {
	webfontloader.load({
		google: {
			families: ['Quicksand::latin', 'EB+Garamond::latin']
		}
	});
}

export default () => '';
