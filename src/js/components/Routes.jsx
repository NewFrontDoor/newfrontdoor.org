import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {Site} from './Site';
import {Main} from './Main';
import {Client} from './Client';
import {Blog} from '../Blog';
import {Support} from './Support';
import {Feature} from './Feature';
import {Template} from '../Documentation/Template';
import {Documentation} from '../Documentation';
import {Status} from './Status';
import {Control} from './Control';
import {About} from './About';
import {Contact} from './Contact';
import {Training} from './Training';
import {Consultation} from './Consultation';

export default (
	<Route path="/" component={Site} >
		<IndexRoute component={Main} />
		<Route path="client" component={Client} />
		<Route path="blog/:blogId" component={Blog} />
		<Route path="support" component={Support} />
		<Route path="feature" component={Feature} />
		<Route path="documentation" component={Documentation} />
		<Route path="documentation/:documentId" component={Template}/>
		<Route path="status" component={Status} />
		<Route path="control" component={Control} />
		<Route path="about" component={About} />
		<Route path="contact" component={Contact} />
		<Route path="training" component={Training} />
		<Route path="consultation" component={Consultation} />
	</Route>
);
