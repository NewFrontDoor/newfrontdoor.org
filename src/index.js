import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal2';
import {install} from 'offline-plugin/runtime';
import {AppContainer} from 'react-hot-loader';
import App from './containers/app';

const render = Component => {
	Modal.getApplicationElement = () => document.getElementById('application');
	ReactDOM.render((
		<AppContainer>
			<Component/>
		</AppContainer>
	), document.getElementById('root'));
};

render(App);

if (process.env.NODE_ENV === 'production') {
	install();
}

if (module.hot) {
	module.hot.accept('./containers/app', () => {
		render(App);
	});
}
