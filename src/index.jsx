import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Router, RouterContext, match, browserHistory, createMemoryHistory} from 'react-router';
import {scroller, animateScroll} from 'react-scroll';
import {applyUpdate, install} from 'offline-plugin/runtime';
import {Root} from './routes/Root';
import Routes from './routes/index.jsx';

function hashLinkScroll() {
	const {hash} = window.location;
	const scrollOptions = {
		spy: true,
		smooth: true,
		offset: -64,
		duration: 500
	};

	if (hash === '') {
		animateScroll.scrollToTop(scrollOptions);
	} else {
		// Push onto callback queue so it runs after the DOM is updated
		setTimeout(() => {
			const id = hash.replace('#', '');
			scroller.scrollTo(id, scrollOptions);
		}, 0);
	}
}

if (typeof document !== 'undefined') {
	if (process.env.NODE_ENV === 'production') {
		install({
			onUpdating: () => {
				console.log('SW Event:', 'onUpdating');
			},
			onUpdateReady: () => {
				console.log('SW Event:', 'onUpdateReady');
				applyUpdate();
			},
			onUpdated: () => {
				console.log('SW Event:', 'onUpdated');
				window.location.reload();
			},
			onUpdateFailed: () => {
				console.log('SW Event:', 'onUpdateFailed');
			}
		});
	}
	const content = document.getElementById('content');
	ReactDOM.render(<Router history={browserHistory} onUpdate={hashLinkScroll}>{Routes}</Router>, content);
}

export default (locals, callback) => {
	const history = createMemoryHistory();
	const location = history.createLocation(locals.path);

	return match({
		location,
		routes: Routes
	}, (error, redirectLocation, renderProps) => {
		const html = ReactDOMServer.renderToStaticMarkup(
			<Root location={location}>
				<RouterContext {...renderProps}/>
			</Root>
		);
		return callback(null, `<!doctype html>${html}`);
	});
};
