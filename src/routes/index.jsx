import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {Alert} from '../components/alert';
import {Blog} from '../components/blog';
import {Documentation} from '../components/documentation';
import {Template} from '../components/documentation/template';
import {About} from './about';
import {Client} from './client';
import {Consultation} from './consultation';
import {Contact} from './contact';
import {Control} from './control';
import {Feature} from './feature';
import {Home} from './home';
import {Site} from './site';
import {Status} from './status';
import {Support} from './support';
import {Training} from './training';
import {Registration} from './registration';
import {Podcasting} from './podcasting';
import {Elvanto} from './elvanto';
import {Sparkleshare} from './sparkleshare';
import {Error} from './error';

export default(
	<Route path="/" component={Site}>
		<IndexRoute component={Home}/>
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
		<Route path="/registration" component={Registration}/>
		<Route path="/podcasting" component={Podcasting}/>
		<Route path="/alert" component={Alert}/>
		<Route path="/elvanto" component={Elvanto}/>
		<Route path="/sparkleshare" component={Sparkleshare}/>
		<Route path="/*" component={Error}/>
	</Route>
);
