/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Router, browserHistory, createMemoryHistory} from 'react-router';
import {Root} from './components/Root';
import Routes from './components/Routes';

if (typeof document !== 'undefined') {
	const content = document.getElementById('content');
	ReactDOM.render(<Router history={browserHistory}>{Routes}</Router>, content);
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
