/* eslint-env browser */
import 'babel-polyfill';

import React from 'react';
import {Root} from './components/Root';
import {Main} from './components/Main';
import {Hero} from './components/Hero';
import {Blog} from './components/Blog';
import ReactDOMServer from 'react-dom/server';

export default locals => Promise.resolve({
	'/': ReactDOMServer.renderToString(<Root locals={locals}>
			<Hero></Hero>
			<Main></Main>
		</Root>),
	'/blog': ReactDOMServer.renderToString(<Root locals={locals}>
			<Blog></Blog>
		</Root>)
});
