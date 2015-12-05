import evaluate from 'eval';
import path from 'path';

export default class StaticSiteGeneratorWebpackPlugin {
	constructor(renderChunkName, locals) {
		this.renderChunkName = renderChunkName || 'main';
		this.locals = locals;
	}

	apply(compiler) {
		compiler.plugin('emit', (compilation, done) => {
			const webpackStats = compilation.getStats();
			const webpackStatsJson = webpackStats.toJson();

			try {
				const asset = findAsset(this.renderChunkName, compilation, webpackStatsJson);

				if (!asset) {
					throw new Error(`Source file not found: "${this.renderChunkName}"`);
				}

				const assets = getAssetsFromCompilation(compilation, webpackStatsJson);

				const source = asset.source();

				let render = evaluate(source, this.renderChunkName, {
					console,
					setTimeout
				});

				if (render.hasOwnProperty('__esModule') && render.__esModule) {
					if (!render.hasOwnProperty('default')) {
						throw new Error(`${this.renderChunkName} has no default export.`);
					}

					render = render.default;
				}

				const locals = Object.assign({}, {
					assets,
					webpackStats
				}, this.locals);

				render(locals)
					.then(pages => {
						Object.keys(pages).forEach(pth => {
							// Remove leading slashes for webpack-dev-server
							const outputFileName = (path.extname(pth) === '.html') ?
								pth : path.join(pth, '/index.html').replace(/^(\/|\\)/, '');
							const html = pages[pth];
							compilation.assets[outputFileName] = {
								source: () => html,
								size: () => html.length
							};
						});
						done();
					})
					.catch(err => {
						compilation.errors.push(err.stack);
						done(err);
					});
			} catch (err) {
				compilation.errors.push(err.stack);
				done(err);
			}
		});
	}
}

function findAsset(src, compilation, webpackStatsJson) {
	const asset = compilation.assets[src];

	if (asset) {
		return asset;
	}

	let chunkValue = webpackStatsJson.assetsByChunkName[src];

	if (!chunkValue) {
		return null;
	}
	// Webpack outputs an array for each chunk when using sourcemaps
	if (chunkValue instanceof Array) {
		// Is the main bundle always the first element?
		chunkValue = chunkValue[0];
	}
	return compilation.assets[chunkValue];
}

// Shamelessly stolen from html-webpack-plugin - Thanks @ampedandwired :)
function getAssetsFromCompilation(compilation, webpackStatsJson) {
	const assets = {};
	for (const chunk in webpackStatsJson.assetsByChunkName) {
		if (webpackStatsJson.assetsByChunkName.hasOwnProperty(chunk)) {
			let chunkValue = webpackStatsJson.assetsByChunkName[chunk];

			// Webpack outputs an array for each chunk when using sourcemaps
			if (chunkValue instanceof Array) {
				// Is the main bundle always the first element?
				chunkValue = chunkValue[0];
			}

			if (compilation.options.output.publicPath) {
				chunkValue = compilation.options.output.publicPath + chunkValue;
			}
			assets[chunk] = chunkValue;
		}
	}

	return assets;
}
