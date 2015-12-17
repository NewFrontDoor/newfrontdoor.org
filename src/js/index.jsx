/* eslint-env browser */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {createHistory, createMemoryHistory} from 'history';
import {Router, RoutingContext, match} from 'react-router';
import {Root} from './components/Root';
import Routes from './components/Routes';

// Client render (optional):
if (typeof document !== 'undefined') {
	const history = createHistory();
	const content = document.getElementById('content');

	ReactDOM.render(<Router history={history}>{Routes}</Router>, content);
}

export default (locals, callback) => {
	const history = createMemoryHistory(locals.path);
	const reactApp = {
		__html: ReactDOMServer.renderToString(<Router history={history}>{Routes}</Router>)
	};

	const html = ReactDOMServer.renderToStaticMarkup(<Root reactApp={reactApp}></Root>);
	callback(null, `<!DOCTYPE html>${html}`);
};
// Promise.resolve({
// 	'/': ReactDOMServer.renderToString(<Root locals={locals}>
// 			<Hero locals={locals}></Hero>
// 			<Main locals={locals}></Main>
// 		</Root>),
// 	'/client': ReactDOMServer.renderToString(<Root locals={locals}>
// 			<Client></Client>
// 		</Root>),
// 	'/support': ReactDOMServer.renderToString(<Root locals={locals}>
// 			<Support></Support>
// 		</Root>),
// 	'/feature': ReactDOMServer.renderToString(<Root locals={locals}>
// 			<Feature></Feature>
// 		</Root>),
// 	'/documentation': ReactDOMServer.renderToString(<Root locals={locals}>
// 			<Documentation></Documentation>
// 		</Root>)
// });
