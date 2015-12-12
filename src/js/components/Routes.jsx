import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {Site} from './Site';
import {Main} from './Main';
import {Blog} from './Blog';
import {Support} from './Support';
import {Feature} from './Feature';
import {Template} from './Template';
import {Documentation} from './Documentation';

export default (
	<Route path="/" component={Site} >
		<IndexRoute component={Main} />
		<Route path="blog" component={Blog} />
		<Route path="support" component={Support} />
		<Route path="feature" component={Feature} />
		<Route path="documentation" component={Documentation} />
		<Route path="template" component={Template} />
	</Route>
);
