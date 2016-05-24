import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {Alert} from '../Alert';
import {Blog} from '../Blog';
import {Documentation} from '../Documentation';
import {Template} from '../Documentation/Template';
import {About} from './About';
import {Client} from './Client';
import {Consultation} from './Consultation';
import {Contact} from './Contact';
import {Control} from './Control';
import {Feature} from './Feature';
import {Main} from './Main';
import {Site} from './Site';
import {Status} from './Status';
import {Support} from './Support';
import {Training} from './Training';

export default(
	<Route path="/" component={Site}>
		<IndexRoute component={Main}/>
		<Route path="/client" component={Client}/>
		<Route path="/blog/:blogId" component={Blog}/>
		<Route path="/support" component={Support}/>
		<Route path="/feature" component={Feature}/>
		<Route path="/documentation" component={Documentation}/>
		<Route path="/documentation/:documentId" component={Template}/>
		<Route path="/status" component={Status}/>
		<Route path="/control" component={Control}/>
		<Route path="/about" component={About}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/training" component={Training}/>
		<Route path="/consultation" component={Consultation}/>
		<Route path="/alert" component={Alert}/>
	</Route>
);
