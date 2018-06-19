import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from '../layout';
import ScrollToTop from '../../components/scroll-to-top';

const App = props => (
	<BrowserRouter {...props}>
		<ScrollToTop>
			<Layout/>
		</ScrollToTop>
	</BrowserRouter>
);

export default App;
