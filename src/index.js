import React from 'react';
import ReactDOM from 'react-dom';
import {renderToStaticMarkup} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Modal from 'react-modal2';
import {install} from 'offline-plugin/runtime';
import App from './containers/app';
import Layout from './containers/layout';
import Root from './containers/root';

if (typeof document !== 'undefined') {
	const render = Component => {
		Modal.getApplicationElement = () => document.getElementById('application');
		ReactDOM.render(<Component/>, document.getElementById('content'));
	};

	render(App);

	if (process.env.NODE_ENV === 'production') {
		install();
	}
}

export default (locals, callback) => {
	const html = renderToStaticMarkup(
		<Root>
			<StaticRouter location={locals.path} context={{}}>
				<Layout/>
			</StaticRouter>
		</Root>
	);

	callback(null, `<!doctype html>${html}`);
};
