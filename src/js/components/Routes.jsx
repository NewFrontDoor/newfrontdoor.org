import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {Site} from './Site';
import {Main} from './Main';
import {Client} from './Client';
import {Support} from './Support';
import {Feature} from './Feature';
import {Template} from './Template';
import {Documentation} from './Documentation';
import {Status} from './Status';
import {Control} from './Control';
import {About} from './About';
import {Contact} from './Contact';

export default (
	<Route path="/" component={Site} >
		<IndexRoute component={Main} />
		<Route path="client" component={Client} />
		<Route path="support" component={Support} />
		<Route path="feature" component={Feature} />
		<Route path="documentation" component={Documentation} />
		<Route path="template" component={Template} />
		<Route path="status" component={Status} />
		<Route path="control" component={Control} />
		<Route path="about" component={About} />
		<Route path="contact" component={Contact} />
	</Route>
);
