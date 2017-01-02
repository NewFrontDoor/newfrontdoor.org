import React from 'react';
import ReactDOM from 'react-dom';
import {renderToStaticMarkup} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Modal from 'react-modal2';
import {install} from 'offline-plugin/runtime';
import {AppContainer} from 'react-hot-loader';
import App from './containers/app/index.jsx';
import Layout from './containers/layout/index.jsx';
import Root from './containers/root/index.jsx';

if (typeof document !== 'undefined') {
	const render = Component => {
		ReactDOM.render(
			<AppContainer>
				<Component/>
			</AppContainer>,
			document.getElementById('content')
		);
	};

	render(App);

	if (module.hot) {
		module.hot.accept('./containers/app/index.jsx', () => {
			render(App);
		});
	}

	if (process.env.NODE_ENV === 'production') {
		install();
	}

	Modal.getApplicationElement = () => document.getElementById('application');
}

export default (locals, callback) => {
	const html = renderToStaticMarkup(
		<Root>
			<AppContainer>
				<StaticRouter location={locals.path} context={{}}>
					<Layout/>
				</StaticRouter>
			</AppContainer>
		</Root>
	);

	return callback(null, `<!doctype html>${html}`);
};
