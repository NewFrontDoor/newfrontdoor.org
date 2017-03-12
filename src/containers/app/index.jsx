import React from 'react';
import {scroller, animateScroll} from 'react-scroll';
import {BrowserRouter} from 'react-router-dom';
import Layout from '../layout/index.jsx';

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

const App = props => (
	<BrowserRouter onUpdate={hashLinkScroll} {...props}>
		<Layout/>
	</BrowserRouter>
);

export default App;
