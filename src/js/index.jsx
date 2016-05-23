import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Router, browserHistory, createMemoryHistory} from 'react-router';
import {scroller, animateScroll} from 'react-scroll';
import {Root} from './components/Root';
import Routes from './components/Routes';

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
	const content = document.getElementById('content');
	ReactDOM.render(<Router history={browserHistory} onUpdate={hashLinkScroll}>{Routes}</Router>, content);
}

export default (locals, callback) => {
	const history = createMemoryHistory(locals.path);
	const reactApp = {
		__html: ReactDOMServer.renderToString(<Router history={history}>{Routes}</Router>)
	};
	const title = 'Vision 100 IT';
	const html = ReactDOMServer.renderToStaticMarkup(<Root title={title} reactApp={reactApp}/>);
	callback(null, `<!DOCTYPE html>${html}`);
};
