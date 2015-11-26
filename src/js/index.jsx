/* eslint-env browser */
import 'babel-polyfill';

import React from 'react';
import {Root} from './components/Root';
import {Main} from './components/Main';
import {Hero} from './components/Hero';
import {featuredFirst} from './components/featuredFirst';
import {featuredSecond} from './components/featuredSecond';
import {featuredThird} from './components/featuredThird';
import {featuredFourth} from './components/featuredFourth';
import {featuredFifth} from './components/featuredFifth';
import {Blog} from './components/Blog';
import ReactDOMServer from 'react-dom/server';

export default locals => Promise.resolve({
	'/': ReactDOMServer.renderToString(<Root locals={locals}>
			<Hero></Hero>
			<featuredFirst></featuredFirst>
			<featuredSecond></featuredSecond>
			<featuredThird></featuredThird>
			<featuredFourth></featuredFourth>
			<featuredFifth></featuredFifth>
			<Main></Main>
		</Root>),
	'/blog': ReactDOMServer.renderToString(<Root locals={locals}>
			<Blog></Blog>
		</Root>)
});
