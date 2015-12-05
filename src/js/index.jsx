/* eslint-env browser */
import 'babel-polyfill';

import React from 'react';
import {Root} from './components/Root';
import {Main} from './components/Main';
import {Hero} from './components/Hero';
import {Blog} from './components/Blog';
import {Support} from './components/Support';
import {Feature} from './components/Feature';
import ReactDOMServer from 'react-dom/server';

export default locals => Promise.resolve({
	'/': ReactDOMServer.renderToString(<Root locals={locals}>
			<Hero locals={locals}></Hero>
			<Main locals={locals}></Main>
		</Root>),
	'/blog': ReactDOMServer.renderToString(<Root locals={locals}>
			<Blog></Blog>
		</Root>),
	'/support': ReactDOMServer.renderToString(<Root locals={locals}>
			<Support></Support>
		</Root>)
});
